
import * as asl from "asl-types";
import * as iasl from "../convert-asllib-to-iasl/ast";
import { AslWriter } from "./asl-writer";
import { AslFactory } from "./aslfactory";
import { AslPassFactory } from "./aslfactory.pass";
import { AslRhsFactory, PathExpressionOrLiteral } from "./aslfactory.rhs";

export class AslInvokeStateMachineFactory {
  static appendIaslInvoke(expression: iasl.InvokeStateMachineState, scopes: Record<string, iasl.Scope>, context: AslWriter, resultPath: string | null, nameSuggestion: string | undefined) {
    
    const additionalParameters = {
      properties: {
        AWS_STEP_FUNCTIONS_STARTED_BY_EXECUTION_ID: {
            identifier: "$$.Execution.Id",
            _syntaxKind: iasl.SyntaxKind.Identifier,
            type: "string"
        }
      },
      _syntaxKind: iasl.SyntaxKind.LiteralObject,
    } as iasl.LiteralObjectExpression;

    let rhs = AslRhsFactory.appendIasl(expression.parameters, scopes, context, true);
    rhs = AslRhsFactory.modifyMergeWith(rhs, additionalParameters, scopes, context);

    const task = {
      Resource: expression.integrationPattern === "sync" ? "arn:aws:states:::states:startExecution.sync" : "arn:aws:states:::states:startExecution",
      Parameters: {
        StateMachineArn: expression.stateMachineArn,
        ...(rhs.path !== undefined ? { "Input.$" : rhs.path } : { Input : rhs.value })
      },
      Comment: expression.source,
      ResultPath: resultPath as any,
    } as Omit<asl.Task, "Type">

    this.appendAsl(task, scopes, expression.retry, context, nameSuggestion ?? "Invoke State Machine");
    if (expression.integrationPattern === "sync" && resultPath !== null) {

      const fn = {
        "arguments": [
          {
            "identifier": resultPath + ".Output",
            "type": "unknown",
            "_syntaxKind": "identifier"
          }
        ],
        "function": "asl.states.stringToJson",
        "_syntaxKind": "asl-intrinsic-function"
      } as iasl.AslIntrinsicFunction;
      
      const convert = AslRhsFactory.appendIasl(fn, scopes, context, true);
      AslPassFactory.appendAsl({ResultPath: resultPath}, convert, context, "Convert Result");
    }
  }

  static appendAsl(task: Omit<asl.Task, "Type">, scopes: Record<string, iasl.Scope>, retryConfiguration: iasl.RetryConfiguration | undefined, context: AslWriter, nameSuggestion: string) {
    AslFactory.appendRetryConfiguration(task as asl.Task, retryConfiguration);
    context.appendNextState(
      {
        Type: "Task",
        ...task,
      }, nameSuggestion);
  }
}