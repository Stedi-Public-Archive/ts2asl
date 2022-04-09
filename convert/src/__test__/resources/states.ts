import * as asl from "@ts2asl/asl-lib";

export const waitForTaskToken = asl.deploy.asStateMachine(async (input: {}, context: asl.StateMachineContext<{}>) => {
  const result: { action: "approve" | "reject" } = await asl.task({
    name: "Human Approval",
    resource: "arn:aws:states:::lambda:invoke.waitForTaskToken",
    parameters: {
      FunctionName: "sendApprovalEmail", // or asl.deploy.getLambdaName(sendApprovalEmail)
      Payload: {
        taskToken: context.task.token,
        request: input,
      },
    },
  });
});
