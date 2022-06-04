
## dynamo db put item if not exists
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgdm9pZCBhc2wuc2RrRHluYW1vREJQdXRJdGVtKHsKICAgIGNhdGNoOiBbCiAgICAgIHsKICAgICAgICBlcnJvckVxdWFsczogWyJEeW5hbW9EYi5Db25kaXRpb25hbENoZWNrRmFpbGVkRXhjZXB0aW9uIl0sCiAgICAgICAgYmxvY2s6ICgpID0+IHsKICAgICAgICAgIC8vbm8gb3AKICAgICAgICB9LAogICAgICB9LAogICAgXSwKICAgIHBhcmFtZXRlcnM6IHsKICAgICAgSXRlbTogewogICAgICAgIHBrOiB7IFM6ICJway12YWx1ZSIgfSwKICAgICAgICBzazogeyBTOiAic2stdmFsdWUiIH0sCiAgICAgICAgc3RyaW5nOiB7IFM6ICJ2YWx1ZSIgfSwKICAgICAgICBudW1iZXI6IHsgTjogIjQyIiB9LAogICAgICB9LAogICAgICBDb25kaXRpb25FeHByZXNzaW9uOiAiYXR0cmlidXRlX25vdF9leGlzdHMocGspIiwKICAgICAgVGFibGVOYW1lOiBhc2wuZGVwbG95LmdldFBhcmFtZXRlcigiYXNzaWdubWVudHNUYWJsZU5hbWUiKSwKICAgIH0sCiAgfSk7Cn0pOwo=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
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
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgY29uc3QgcmVzdWx0ID0gKGF3YWl0IGFzbC5zZGtEeW5hbW9EQlF1ZXJ5KHsKICAgIG5hbWU6ICJDT1VOVCh3aGVyZSBnc2kxcGsgPT09ICd0ZXN0JykiLAogICAgcGFyYW1ldGVyczogewogICAgICBUYWJsZU5hbWU6IGFzbC5kZXBsb3kuZ2V0UGFyYW1ldGVyKCJ0YWJsZU5hbWUiKSwKICAgICAgSW5kZXhOYW1lOiAiR1NJMSIsCiAgICAgIEtleUNvbmRpdGlvbkV4cHJlc3Npb246ICIjcGsgPSA6dmFsIiwKICAgICAgRXhwcmVzc2lvbkF0dHJpYnV0ZU5hbWVzOiB7ICIjcGsiOiAiZ3NpMXBrIiB9LAogICAgICBFeHByZXNzaW9uQXR0cmlidXRlVmFsdWVzOiB7ICI6dmFsIjogeyBTOiAidGVzdCIgfSB9LAogICAgICBTZWxlY3Q6ICJDT1VOVCIsCiAgICB9LAogIH0pKSBhcyB7IENvdW50OiBudW1iZXIgfTsKICByZXR1cm4gcmVzdWx0LkNvdW50Owp9KTsK)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
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
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgY29uc3QgdmFsdWUgPSA0MjsKICBhd2FpdCBhc2wuc2RrQ2xvdWRXYXRjaFB1dE1ldHJpY0RhdGEoewogICAgbmFtZTogIlB1Ymxpc2ggTWV0cmljIERhdGEiLAogICAgcGFyYW1ldGVyczogewogICAgICBNZXRyaWNEYXRhOiBbCiAgICAgICAgewogICAgICAgICAgTWV0cmljTmFtZTogIkV4YW1wbGVNZXRyaWMiLAogICAgICAgICAgVmFsdWU6IHZhbHVlLAogICAgICAgIH0sCiAgICAgIF0sCiAgICAgIE5hbWVzcGFjZTogIkV4YW1wbGVOYW1lc3BhY2UiLAogICAgfSwKICB9KTsKfSk7Cg==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
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


