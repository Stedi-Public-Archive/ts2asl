
import * as asl from "asl-types";
import { convertBlock } from ".";
import * as iasl from "../convert-asllib-to-iasl/ast";
import { AslWriter } from "./asl-writer";
import { AslFactory } from "./aslfactory";
import { AslRhsFactory } from "./aslfactory.rhs";
import { createParametersForMap } from "./parameters";

export class AslMapFactory {
  static appendIaslMap(expression: iasl.AslMapState, scopes: Record<string, iasl.Scope>, context: AslWriter, resultPath: string | null, nameSuggestion: string | undefined) {
    if (expression.iterator === undefined) throw new Error("Map must have iterator");
    if (!iasl.Check.isFunction(expression.iterator)) throw new Error("Map must have function");

    const iterator = convertBlock(expression.iterator, scopes, context.createChildContext())!;
    const items = AslRhsFactory.appendIasl(expression.items, scopes, context);

    this.appendAsl(
      {
        ResultPath: resultPath,
        Iterator: iterator,
        ItemsPath: items.path,
        MaxConcurrency: expression.maxConcurrency,
        Comment: expression.source,
        ...createParametersForMap(scopes, expression.iterator, expression.iterator.inputArgumentName),
      },
      expression.catch,
      expression.retry,
      scopes,
      context,
      nameSuggestion ?? "Map");
  }

  static appendAsl(map: Omit<asl.Map, "Type">, catchConfiguration: iasl.CatchConfiguration | undefined, retryConfiguration: iasl.RetryConfiguration | undefined, scopes: Record<string, iasl.Scope>, context: AslWriter, nameSuggestion: string) {
    const { trailingStates } = AslFactory.appendCatchConfiguration([map as asl.Map], catchConfiguration, scopes, context);
    AslFactory.appendRetryConfiguration(map as asl.Map, retryConfiguration);

    context.appendNextState(
      {
        Type: "Map",
        ...map,
      }, nameSuggestion);
    
    context.appendTails(trailingStates);
  }
}