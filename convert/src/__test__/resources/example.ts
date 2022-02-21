import * as asl from "@cloudscript/asl-lib"

export const main = asl.deploy.asStateMachine(async (_input: {}, _context: asl.StateMachineContext<{}>) => {

  let thresholds = [
    {
      "metric": "mappings.requests",
      "ceiling": 100
    },
    {
      "metric": "mappings.requests",
      "ceiling": 1000
    }
  ];
  let lastEvaluatedKey: any | undefined = undefined; //$.variables.lastEvaluatedKey
  do {
    let scan = await asl.nativeDynamoDBScan({ TableName: "MyStorage", Limit: 1, ExclusiveStartKey: lastEvaluatedKey });

    for (const item of ((scan.Items || []) as unknown as Item[])) {//$.variables.item, $.enclosed.lastEvaluatedKey
      for (const threshold of thresholds) { //$.variables.threshold, $.enclosed.item, .lastEvaluatedKey
        let numericLastSentOnValue = asl.states.stringToJson(item.lastSentOnValue.N) as number;
        let numericTotal = asl.states.stringToJson(item.total.N) as number;

        if ((item.sk.S === threshold.metric && threshold.ceiling <= numericTotal && threshold.ceiling > numericLastSentOnValue && (!item.lastBeginDateValue.S || item.beginDate.S === item.lastBeginDateValue.S))
          || (item.sk.S === threshold.metric && threshold.ceiling <= numericTotal && (!item.lastBeginDateValue.S || item.beginDate.S === item.lastBeginDateValue.S))) {

          await asl.nativeEventBridgePutEvents({
            Entries: [
              {
                Detail: asl.states.jsonToString({
                  account_id: item.pk,
                  threshold: threshold
                }),
                DetailType: "xxx.detail.type",
                EventBusName: "default",
                Source: "zzz.my.source"
              }
            ]
          });
          await asl.nativeDynamoDBUpdateItem({
            TableName: "MyStorage",
            Key: {
              pk: item.pk,
              sk: item.sk
            },
            ConditionExpression: "lastSentOnValue < :newLastSentOnValue OR lastBeginDateValue <> :newLastBeginDateValue",
            UpdateExpression: "SET lastSentOnValue = :newLastSentOnValue, lastBeginDateValue = :newLastBeginDateValue",
            ExpressionAttributeValues: {
              ":newLastSentOnValue": {
                N: item.total.N as any
              },
              ":newLastBeginDateValue": {
                S: item.beginDate.S
              }
            }
          });
        }
      }
    }
    lastEvaluatedKey = scan.LastEvaluatedKey;
  } while (lastEvaluatedKey)
});

interface Item {
  pk: { S: string };
  sk: { S: string };
  total: { N: string };
  lastSentOnValue: { N: string };
  beginDate: { S: string };
  lastBeginDateValue: { S: string };
}