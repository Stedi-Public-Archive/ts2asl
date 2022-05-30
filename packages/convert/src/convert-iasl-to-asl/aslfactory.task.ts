
import * as asl from "asl-types";
import * as iasl from "../convert-asllib-to-iasl/ast";
import { AslWriter } from "./asl-writer";
import { AslFactory } from "./aslfactory";
import { AslRhsFactory } from "./aslfactory.rhs";

export class AslTaskFactory {
  static appendIaslTask(expression: iasl.TaskState, scopes: Record<string, iasl.Scope>, context: AslWriter, resultPath: string | null, nameSuggestion: string | undefined) {
    
    const parameters = expression.parameters ? AslRhsFactory.appendIasl(expression.parameters, scopes, context) : undefined;

    const task = {
      ResultPath: resultPath,
      Resource: expression.resource,
      ...(parameters && parameters.path !== undefined ? { InputPath: parameters.path } : parameters ? { Parameters: parameters.value as { [k: string]: any; } } : {}),
      TimeoutSeconds: expression.timeoutSeconds,
      HeartbeatSeconds: expression.heartbeatSeconds,
      Comment: expression.source,
    };

    this.appendAsl(
      task,
      expression.catch,
      expression.retry,
      scopes,
      context,
      nameSuggestion ?? "Parallel");
  }

  static appendAsl(task: Omit<asl.Task, "Type">, catchConfiguration: iasl.CatchConfiguration | undefined, retryConfiguration: iasl.RetryConfiguration | undefined, scopes: Record<string, iasl.Scope>, context: AslWriter, nameSuggestion: string) {
    AslFactory.appendRetryConfiguration(task as asl.Task, retryConfiguration);
    const result = AslFactory.appendCatchConfiguration([task as asl.Task], catchConfiguration, scopes, context);
    context.appendNextState(
      {
        Type: "Task",
        ...task,
      }, nameSuggestion);

   context.appendTails(result.trailingStates);   
  }
}