
import * as asl from "@ts2asl/asl-lib/src/types";
import * as iasl from "../convert-asllib-to-iasl/ast";
import { AslWriter } from "./asl-writer";

export class AslSucceedFactory {
  static appendIaslSucceed(expression: iasl.AslSucceedState, context: AslWriter, nameSuggestion: string | undefined) {
    this.appendAsl(
      {
        Comment: expression.source
      },
      context,
      nameSuggestion ?? "Succeed");
  }

  static appendAsl(succeed: Omit<asl.Fail, "Type">, context: AslWriter, nameSuggestion: string) {
    context.appendNextState(
      {
        Type: "Succeed",
        ...succeed,
      }, nameSuggestion);
  }
}