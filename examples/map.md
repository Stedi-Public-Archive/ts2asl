
## main
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBjb25zdCBlbnRyaWVzID0gYXdhaXQgZ2V0RW50cmllcygpOwogIGF3YWl0IGFzbC5tYXAoewogICAgaXRlbXM6IGVudHJpZXMsCiAgICBpdGVyYXRvcjogKGVudHJ5OiBzdHJpbmcpID0+CiAgICAgIHZvaWQgYXNsLnNka0R5bmFtb0RCUHV0SXRlbSh7CiAgICAgICAgY2F0Y2g6IFsKICAgICAgICAgIHsKICAgICAgICAgICAgZXJyb3JFcXVhbHM6IFsiRHluYW1vRGIuQ29uZGl0aW9uYWxDaGVja0ZhaWxlZEV4Y2VwdGlvbiJdLAogICAgICAgICAgICBibG9jazogKCkgPT4gewogICAgICAgICAgICAgIC8vbm8gb3AKICAgICAgICAgICAgfSwKICAgICAgICAgIH0sCiAgICAgICAgXSwKICAgICAgICBwYXJhbWV0ZXJzOiB7CiAgICAgICAgICBJdGVtOiB7CiAgICAgICAgICAgIHBrOiB7IFM6ICJwayIgfSwKICAgICAgICAgICAgc2s6IHsgUzogYHNrIyR7ZW50cnl9YCB9LAogICAgICAgICAgICBzdGF0dXM6IHsgUzogImF2YWlsYWJsZSIgfSwKICAgICAgICAgIH0sCiAgICAgICAgICBDb25kaXRpb25FeHByZXNzaW9uOiAiYXR0cmlidXRlX25vdF9leGlzdHMoOnNrKSIsCiAgICAgICAgICBUYWJsZU5hbWU6IGFzbC5kZXBsb3kuZ2V0UGFyYW1ldGVyKCJ0YWJsZU5hbWUiKSwKICAgICAgICB9LAogICAgICB9KSwKICB9KTsKfSk7)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  const entries = await getEntries();
  await asl.map({
    items: entries,
    iterator: (entry: string) =>
      void asl.sdkDynamoDBPutItem({
        catch: [
          {
            errorEquals: ["DynamoDb.ConditionalCheckFailedException"],
            block: () => {
              //no op
            },
          },
        ],
        parameters: {
          Item: {
            pk: { S: "pk" },
            sk: { S: `sk#${entry}` },
            status: { S: "available" },
          },
          ConditionExpression: "attribute_not_exists(:sk)",
          TableName: asl.deploy.getParameter("tableName"),
        },
      }),
  });
});
```


