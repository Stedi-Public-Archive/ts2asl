import * as asl from "asl-types";
import { Operator } from "asl-types/dist/choice";
import { appendBlock, convertBlock } from ".";
import * as iasl from "../convert-asllib-to-iasl/ast";
import { AslWriter } from "./asl-writer";
import { createChoiceOperator } from "./choice-utility";

export class AslChoiceFactory {
  static appendIaslChoice(expression: iasl.AslChoiceState, scopes: Record<string, iasl.Scope>, context: AslWriter, resultPath: string | null, nameSuggestion: string | undefined) {
    const choiceState = {
      Type: "Choice",
      Choices: [],
      Comment: expression.source
    } as asl.Choice;

    context.appendNextState(choiceState, nameSuggestion);
    for (const choice of (expression.choices || [])) {
      if (choice.block === undefined) throw new Error("choice must have block");
      const choiceOperator = createChoiceOperator(choice.condition, scopes, context);
      const branch = context.appendChoiceOperator(choiceOperator);
      appendBlock(choice.block, scopes, branch);
    }

    if (expression.default) {
      const branch = context.appendChoiceDefault();
      appendBlock(expression.default, scopes, branch);
    }

    const breakStates = context.finalizeChoiceState();
    context.appendTails(breakStates);
  }

  static appendSwitchStatement(expression: iasl.SwitchStatement, scopes: Record<string, iasl.Scope>, context: AslWriter, resultPath: string | null, nameSuggestion: string | undefined) {
    const choiceState = {
      Type: "Choice",
      Choices: [],
      Comment: expression.source
    } as asl.Choice;

    context.appendNextState(choiceState, nameSuggestion);
    let unjoinedBranches: { operator: Operator | undefined; branch: AslWriter; }[] = [];
    for (const _case of (expression.cases || [])) {
      let branch: AslWriter | undefined;
      let operator: Operator | undefined;
      if (_case.when) {
        operator = createChoiceOperator(_case.when, scopes, context);
        branch = context.appendChoiceOperator(operator);
      } else {
        branch = context.appendChoiceDefault();
      }
      if (_case.then) appendBlock(_case.then, scopes, branch);
      if (branch) {
        if (branch.startAt) {
          for (const unjoined of unjoinedBranches) {
            if (unjoined.branch.startAt === undefined) {
              if (unjoined.operator) {
                unjoined.operator.Next = branch.startAt;
              } else {
                choiceState.Default = branch.startAt;
              }
            } else {
              unjoined.branch.joinUnbrandedStates(branch.startAt);
            }
          }
          unjoinedBranches = [{ branch, operator }];
        }
        else {
          unjoinedBranches.push({ branch, operator });
        }
      }
    }

    const breakStates = context.finalizeChoiceState();
    for (const state of breakStates) {
      if (state.brand === "break") {
        context.removeState(state);
      } else {
        throw new Error(`${state.brand} statement is not supported inside switch`);
      }
    }

  }

  static appendIf(expression: iasl.IfStatement, scopes: Record<string, iasl.Scope>, context: AslWriter, resultPath: string | null, nameSuggestion: string | undefined) {
    if (expression.then === undefined) throw new Error("If must have then block"); //todo: optimize to no-op
    const choiceState = {
      Type: "Choice",
      Choices: [],
      Comment: expression.source
    } as asl.Choice;
    context.appendNextState(choiceState, nameSuggestion);

    const choiceOperator = createChoiceOperator(expression.condition, scopes, context);
    const thenWriter = context.appendChoiceOperator(choiceOperator);
    appendBlock(expression.then, scopes, thenWriter);

    if (expression.else) {
      const defaultWriter = context.appendChoiceDefault();
      appendBlock(expression.else, scopes, defaultWriter);
    }

    const brandedStates = context.finalizeChoiceState();
    context.appendTails(brandedStates);
  }
}