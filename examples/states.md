
## wait for task token
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZSgKICBhc3luYyAoaW5wdXQ6IHt9LCBjb250ZXh0OiBhc2wuU3RhdGVNYWNoaW5lQ29udGV4dDx7fT4pID0+IHsKICAgIGNvbnN0IHJlc3VsdDogeyBhY3Rpb246ICJhcHByb3ZlIiB8ICJyZWplY3QiIH0gPSBhd2FpdCBhc2wudGFzayh7CiAgICAgIG5hbWU6ICJIdW1hbiBBcHByb3ZhbCIsCiAgICAgIHJlc291cmNlOiAiYXJuOmF3czpzdGF0ZXM6OjpsYW1iZGE6aW52b2tlLndhaXRGb3JUYXNrVG9rZW4iLAogICAgICBwYXJhbWV0ZXJzOiB7CiAgICAgICAgRnVuY3Rpb25OYW1lOiAic2VuZEFwcHJvdmFsRW1haWwiLCAvLyBvciBhc2wuZGVwbG95LmdldExhbWJkYU5hbWUoc2VuZEFwcHJvdmFsRW1haWwpCiAgICAgICAgUGF5bG9hZDogewogICAgICAgICAgdGFza1Rva2VuOiBjb250ZXh0LnRhc2sudG9rZW4sCiAgICAgICAgICByZXF1ZXN0OiBpbnB1dCwKICAgICAgICB9LAogICAgICB9LAogICAgfSk7CiAgfQopOwo=)

``` typescript
export const main = asl.deploy.asStateMachine(
  async (input: {}, context: asl.StateMachineContext<{}>) => {
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
  }
);

```


