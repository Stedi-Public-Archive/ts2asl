
## dynamo db put item if not exists
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICB2b2lkIGFzbC5zZGtEeW5hbW9EQlB1dEl0ZW0oewogICAgY2F0Y2g6IFsKICAgICAgewogICAgICAgIGVycm9yRXF1YWxzOiBbIkR5bmFtb0RiLkNvbmRpdGlvbmFsQ2hlY2tGYWlsZWRFeGNlcHRpb24iXSwKICAgICAgICBibG9jazogKCkgPT4gewogICAgICAgICAgLy9ubyBvcAogICAgICAgIH0sCiAgICAgIH0sCiAgICBdLAogICAgcGFyYW1ldGVyczogewogICAgICBJdGVtOiB7CiAgICAgICAgcGs6IHsgUzogInBrLXZhbHVlIiB9LAogICAgICAgIHNrOiB7IFM6ICJzay12YWx1ZSIgfSwKICAgICAgICBzdHJpbmc6IHsgUzogInZhbHVlIiB9LAogICAgICAgIG51bWJlcjogeyBOOiAiNDIiIH0sCiAgICAgIH0sCiAgICAgIENvbmRpdGlvbkV4cHJlc3Npb246ICJhdHRyaWJ1dGVfbm90X2V4aXN0cyhwaykiLAogICAgICBUYWJsZU5hbWU6IGFzbC5kZXBsb3kuZ2V0UGFyYW1ldGVyKCJhc3NpZ25tZW50c1RhYmxlTmFtZSIpLAogICAgfSwKICB9KTsKfSk7)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
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
        pk: { S: "pk-value" },
        sk: { S: "sk-value" },
        string: { S: "value" },
        number: { N: "42" },
      },
      ConditionExpression: "attribute_not_exists(pk)",
      TableName: asl.deploy.getParameter("assignmentsTableName"),
    },
  });
});
```


## count dynamo db items
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBjb25zdCByZXN1bHQgPSAoYXdhaXQgYXNsLnNka0R5bmFtb0RCUXVlcnkoewogICAgbmFtZTogIkNPVU5UKHdoZXJlIGdzaTFwayA9PT0gJ3Rlc3QnKSIsCiAgICBwYXJhbWV0ZXJzOiB7CiAgICAgIFRhYmxlTmFtZTogYXNsLmRlcGxveS5nZXRQYXJhbWV0ZXIoInRhYmxlTmFtZSIpLAogICAgICBJbmRleE5hbWU6ICJHU0kxIiwKICAgICAgS2V5Q29uZGl0aW9uRXhwcmVzc2lvbjogIiNwayA9IDp2YWwiLAogICAgICBFeHByZXNzaW9uQXR0cmlidXRlTmFtZXM6IHsgIiNwayI6ICJnc2kxcGsiIH0sCiAgICAgIEV4cHJlc3Npb25BdHRyaWJ1dGVWYWx1ZXM6IHsgIjp2YWwiOiB7IFM6ICJ0ZXN0IiB9IH0sCiAgICAgIFNlbGVjdDogIkNPVU5UIiwKICAgIH0sCiAgfSkpIGFzIHsgQ291bnQ6IG51bWJlciB9OwogIHJldHVybiByZXN1bHQuQ291bnQ7Cn0pOw==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  const result = (await asl.sdkDynamoDBQuery({
    name: "COUNT(where gsi1pk === 'test')",
    parameters: {
      TableName: asl.deploy.getParameter("tableName"),
      IndexName: "GSI1",
      KeyConditionExpression: "#pk = :val",
      ExpressionAttributeNames: { "#pk": "gsi1pk" },
      ExpressionAttributeValues: { ":val": { S: "test" } },
      Select: "COUNT",
    },
  })) as { Count: number };
  return result.Count;
});
```


## cloud watch put metric data
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBjb25zdCB2YWx1ZSA9IDQyOwogIGF3YWl0IGFzbC5zZGtDbG91ZFdhdGNoUHV0TWV0cmljRGF0YSh7CiAgICBuYW1lOiAiUHVibGlzaCBNZXRyaWMgRGF0YSIsCiAgICBwYXJhbWV0ZXJzOiB7CiAgICAgIE1ldHJpY0RhdGE6IFsKICAgICAgICB7CiAgICAgICAgICBNZXRyaWNOYW1lOiAiRXhhbXBsZU1ldHJpYyIsCiAgICAgICAgICBWYWx1ZTogdmFsdWUsCiAgICAgICAgfSwKICAgICAgXSwKICAgICAgTmFtZXNwYWNlOiAiRXhhbXBsZU5hbWVzcGFjZSIsCiAgICB9LAogIH0pOwp9KTs=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  const value = 42;
  await asl.sdkCloudWatchPutMetricData({
    name: "Publish Metric Data",
    parameters: {
      MetricData: [
        {
          MetricName: "ExampleMetric",
          Value: value,
        },
      ],
      Namespace: "ExampleNamespace",
    },
  });
});
```


