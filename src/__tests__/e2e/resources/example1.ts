import * as asl from "../../../../lib/src"


export const main = asl.Deploy.asStateMachine(async () => {

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
  let lastEvaluatedKey: any | undefined = undefined;

  do {
    let scan = await asl.nativeDynamoDBScan({ TableName: "MyStorage", Limit: 1, ExclusiveStartKey: lastEvaluatedKey });

    for (const item of ((scan.Items || []) as unknown as Item[])) {
      for (const threshold of thresholds) {
        let numericLastSentOnValue = item.lastSentOnValue.N;
        // unsure why the following happens in ASL
        // numericLastSentOnValue = asl.states.jsonToString(item.lastSentOnValue.N)
        let numericTotal = item.total.N;
        // numericTotal = asl.states.jsonToString(item.total.N)

        if ((item.sk.S === threshold.metric && threshold.ceiling <= numericTotal && threshold.ceiling > numericLastSentOnValue && (!item.lastBeginDateValue.S || item.beginDate.S === item.lastBeginDateValue.S))
          || (item.sk.S === threshold.metric && threshold.ceiling <= numericTotal && (!item.lastBeginDateValue.S || item.beginDate.S === item.lastBeginDateValue.S))) {

          await asl.nativeEventBridgePutEvents({
            Entries: [
              {
                Detail: JSON.stringify({
                  account_id: item.pk,
                  threshold: threshold
                }),
                DetailType: "accounts.thresholds.breached",
                EventBusName: "default",
                Source: "com.stedi.billing"
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
  total: { N: number };
  lastSentOnValue: { N: number };
  beginDate: { S: string };
  lastBeginDateValue: { S: string };
}