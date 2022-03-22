import * as asl from "@ts2asl/asl-lib"

export const main = asl.deploy.asStateMachine(async () => {
  const allAccountIds = [];
  await asl.map({
    items: allAccountIds,
    iterator: (accountId: string) =>
      void asl.nativeDynamoDBPutItem({
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
            pk: { S: "assingments" },
            sk: { S: `acc#${accountId}` },
            status: { S: "available" },
          },
          ConditionExpression: "attribute_not_exists(:sk)",
          TableName: asl.deploy.getParameter("assignmentsTableName"),
        },
      }),
  });
});
