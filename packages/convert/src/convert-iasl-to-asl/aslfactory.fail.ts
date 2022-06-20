
import * as asl from "asl-types";
import { convertBlock } from ".";
import * as iasl from "../convert-asllib-to-iasl/ast";
import { AslWriter } from "./asl-writer";
export class AslFailFactory {
  static appendIaslFail(expression: iasl.AslFailState, context: AslWriter, nameSuggestion: string | undefined) {
    this.appendAsl(
      {
        Error: expression.error,
        Cause: expression.cause,
        Comment: expression.source
      },
      context,
      nameSuggestion ?? "Fail");
  }

  static appendAsl(fail: Omit<asl.Fail, "Type">, context: AslWriter, nameSuggestion: string) {
    context.appendNextState(
      {
        Type: "Fail",
        ...fail,
      }, nameSuggestion);
  }
}