
import * as iasl from "../convert-asllib-to-iasl/ast";
import * as asl from "asl-types"
import { AslWriter } from "./asl-writer";
import { appendBlock } from ".";
import { createReplacer, replaceIdentifiers } from "./identifiers";
import { AslRhsFactory } from "./aslfactory.rhs";

export let foreachCounter = { value: 0 };

export class AslForeachFactory {
  static appendIaslForeach(expression: iasl.ForEachStatement, scopes: Record<string, iasl.Scope>, context: AslWriter, resultPath: string | null, nameSuggestion: string | undefined) {
    if (expression.iterator === undefined) throw new Error("ForEach must have iterator");
    if (!iasl.Check.isFunction(expression.iterator)) throw new Error("ForEach must have function");
    
    if (expression.iterator.statements.length == 0) return;
    const namespace = foreachCounter.value > 0 ? "foreach_" + (foreachCounter.value + 1) : "foreach";
    const namePostFix = foreachCounter.value > 0 ? " " + (foreachCounter.value + 1) : "";
    foreachCounter.value++;
    const foreachWriter = context.createChildContext();
    const items = AslRhsFactory.appendIasl(expression.items, scopes, context);
    foreachWriter.appendNextState({
      Type: "Pass",
      ResultPath: `$.${namespace}`,
      Parameters: {
        "items.$": items.path,
        "currentItem.$": `${items.path}[0]`,
      }
    }, "Foreach Initialize" + namePostFix);

    const checkDoneName = foreachWriter.appendNextState({
      Type: "Choice",
      Choices: [],
    }, "Foreach CheckDone" + namePostFix);

    const iteratorWriter = foreachWriter.appendChoiceOperator({ Variable: `$.${namespace}.items[0]`, IsPresent: true });
    let iterator = expression.iterator;
    if (expression.iterator.inputArgumentName) {
      const replacer = createReplacer(expression.iterator.inputArgumentName.identifier, `$.${namespace}.currentItem`);
      iterator = replaceIdentifiers(expression.iterator, [replacer]);
    }
    appendBlock(iterator, scopes, iteratorWriter);

    const defaultWriter = foreachWriter.appendChoiceDefault();
    const foreachExitState = {
      Type: "Pass",
      ResultPath: `$.${namespace}`,
      Result: {},
    };
    const exitStateName = defaultWriter.appendNextState(foreachExitState, "Foreach Exit" + namePostFix);

    const brandedStates = foreachWriter.finalizeChoiceState();
    const foreachNextSate = {
      Type: "Pass",
      ResultPath: `$.${namespace}`,
      Parameters: {
        "items.$": `$.${namespace}.items[1:]`,
        "currentItem.$": `$.${namespace}.items[1]`,
      }
    };
    const foreachNextName = foreachWriter.appendNextState(foreachNextSate, "Foreach Next" + namePostFix);

    for (const branded of brandedStates) {
      if (branded.brand === "continue") {
        (branded as asl.Pass).Next = foreachNextName;
      }
      if (branded.brand === "break") {
        (branded as asl.Pass).Next = exitStateName;
      }
      delete branded.brand;
    }

    foreachWriter.joinTrailingStates(foreachNextName, ...[foreachExitState]);
    (foreachNextSate as asl.Pass).Next = checkDoneName;
    for (const [name, state] of Object.entries(foreachWriter.states)) {
      context.states[name] = state;
    }
    context.joinTrailingStates(foreachWriter.startAt as string);
    delete (foreachExitState as asl.Pass).Next;
    context.appendTails(foreachExitState);

  }
};