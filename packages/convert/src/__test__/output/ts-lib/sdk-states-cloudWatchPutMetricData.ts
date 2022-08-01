import * as asl from "@ts2asl/asl-lib";
import { DynamoDB } from "@aws-sdk/client-dynamodb"
import { CloudWatch } from "@aws-sdk/client-cloudwatch"
import { EventBridge } from "@aws-sdk/client-eventbridge"

export const dynamoDBPutItemIfNotExists = asl.deploy.asStateMachine(async () => {
  void asl.sdk(DynamoDB).putItem({
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

export const countDynamoDBItems = asl.deploy.asStateMachine(async () => {
  const result = (await asl.sdk(DynamoDB).query({
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

export const cloudWatchPutMetricData = asl.deploy.asStateMachine(async () =>{
    const value = 42;
    await asl.sdk(CloudWatch).putMetricData({
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