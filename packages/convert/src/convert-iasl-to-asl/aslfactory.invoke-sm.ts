
import * as asl from "asl-types";
import * as iasl from "../convert-asllib-to-iasl/ast";
import { AslIntrinsicFunctionFactory, IdentifierFactory, LiteralObjectFactory } from "../convert-asllib-to-iasl/iaslfactory";
import { AslWriter } from "./asl-writer";
import { AslFactory } from "./aslfactory";
import { AslPassFactory } from "./aslfactory.pass";
import { AslRhsFactory, PathExpressionOrLiteral } from "./aslfactory.rhs";

export class AslInvokeStateMachineFactory {
  static appendIaslInvoke(expression: iasl.InvokeStateMachineState, scopes: Record<string, iasl.Scope>, context: AslWriter, resultPath: string | null, nameSuggestion: string | undefined) {
    
    const additionalParameters = LiteralObjectFactory.create({
      properties: {
        AWS_STEP_FUNCTIONS_STARTED_BY_EXECUTION_ID: IdentifierFactory.create({
            identifier: "$$.Execution.Id",
            type: "string"
        })
      }
    });

    let rhs = AslRhsFactory.appendIasl(expression.parameters, scopes, context, true);
    rhs = AslRhsFactory.modifyMergeWith(rhs, additionalParameters, scopes, context);

    const task = {
      Resource: expression.integrationPattern === "sync" ? "arn:aws:states:::states:startExecution.sync" : "arn:aws:states:::states:startExecution",
      Parameters: {
        StateMachineArn: expression.stateMachineArn,
        ...("path" in rhs ? { "Input.$" : rhs.path } : { Input : rhs.value })
      },
      Comment: expression.source,
      ResultPath: resultPath as any,
    } as Omit<asl.Task, "Type">

    this.appendAsl(task, scopes, expression.retry, context, nameSuggestion ?? "Invoke State Machine");
    if (expression.integrationPattern === "sync" && resultPath !== null) {

      const fn = AslIntrinsicFunctionFactory.create({
        arguments: [
          IdentifierFactory.create({
            identifier: resultPath + ".Output",
            type: "unknown"
          })
        ],
        function: "asl.states.stringToJson",
        type: "unknown"
      });
      
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