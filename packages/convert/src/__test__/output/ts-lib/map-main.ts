import * as asl from "@ts2asl/asl-lib"
import { DynamoDB } from "@aws-sdk/client-dynamodb"
 
export const main = asl.deploy.asStateMachine(async () =>{
    const entries = await asl.typescriptInvoke({
        name: "getEntries()",
        resource: getEntries,
        comment: "getEntries()"
    });
    await asl.map({
        items: entries,
        iterator: (entry: string) => asl.sdk(DynamoDB).putItem({
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
                    sk: { S: asl.states.format("sk#{}", entry) },
                    status: { S: "available" },
                },
                ConditionExpression: "attribute_not_exists(:sk)",
                TableName: "[!parameter[tableName]]",
            },
        }),
    });
});

export const getEntries = asl.deploy.asLambda(async () => {
  return ["1", "2", "3", "4"]
});