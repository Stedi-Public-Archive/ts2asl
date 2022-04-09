import * as asl from "@ts2asl/asl-lib";

export const dynamoDBPutItemIfNotExists = asl.deploy.asStateMachine(async () => {
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

export const countDynamoDBItems = asl.deploy.asStateMachine(async () =>{
    const result = await asl.sdkDynamoDBQuery({
        name: "COUNT(where gsi1pk === 'test')",
        parameters: {
            TableName: "[!parameter[tableName]]",
            IndexName: "GSI1",
            KeyConditionExpression: "#pk = :val",
            ExpressionAttributeNames: { "#pk": "gsi1pk" },
            ExpressionAttributeValues: { ":val": { S: "test" } },
            Select: "COUNT",
        },
    });
    return result.Count;
});

export const cloudWatchPutMetricData = asl.deploy.asStateMachine(async () => {
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