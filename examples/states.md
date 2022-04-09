
## wait for task token
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoaW5wdXQ6IHt9LCBjb250ZXh0OiBhc2wuU3RhdGVNYWNoaW5lQ29udGV4dDx7fT4pID0+IAogewogIGNvbnN0IHJlc3VsdDogeyBhY3Rpb246ICJhcHByb3ZlIiB8ICJyZWplY3QiIH0gPSBhd2FpdCBhc2wudGFzayh7CiAgICBuYW1lOiAiSHVtYW4gQXBwcm92YWwiLAogICAgcmVzb3VyY2U6ICJhcm46YXdzOnN0YXRlczo6OmxhbWJkYTppbnZva2Uud2FpdEZvclRhc2tUb2tlbiIsCiAgICBwYXJhbWV0ZXJzOiB7CiAgICAgIEZ1bmN0aW9uTmFtZTogInNlbmRBcHByb3ZhbEVtYWlsIiwgLy8gb3IgYXNsLmRlcGxveS5nZXRMYW1iZGFOYW1lKHNlbmRBcHByb3ZhbEVtYWlsKQogICAgICBQYXlsb2FkOiB7CiAgICAgICAgdGFza1Rva2VuOiBjb250ZXh0LnRhc2sudG9rZW4sCiAgICAgICAgcmVxdWVzdDogaW5wdXQsCiAgICAgIH0sCiAgICB9LAogIH0pOwp9KTs=)

``` typescript
export const main = asl.deploy.asStateMachine(async (input: {}, context: asl.StateMachineContext<{}>) => 
 {
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
```


