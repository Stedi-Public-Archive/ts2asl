{
    let thresholds = asl.pass({
        parameters: () => [
            {
                "metric": "mappings.requests",
                "ceiling": 100
            },
            {
                "metric": "mappings.requests",
                "ceiling": 1000
            }
        ],
        comment: "thresholds = [\n    {\n      \"metric\": \"mappings.requests\",\n      \"ceiling\": 100\n    },\n    {\n      \"metric\": \"mappings.requests\",\n      \"ceiling\": 1000\n    }\n  ]"
    });
    let lastEvaluatedKey = asl.pass({
        parameters: () => undefined,
        comment: "lastEvaluatedKey: any | undefined = undefined"
    }); //$.variables.lastEvaluatedKey
    asl.typescriptDoWhile({
        condition: () => lastEvaluatedKey,
        block: async () => {
            let scan = await asl.nativeDynamoDBScan({ TableName: "MyStorage", Limit: 1, ExclusiveStartKey: lastEvaluatedKey });
            asl.map({
                items: () => (scan.Items as unknown as Item[]),
                iterator: item => {
                    asl.map({
                        items: () => thresholds,
                        iterator: threshold => {
                            let numericLastSentOnValue = asl.pass({
                                parameters: () => asl.states.stringToJson(item.lastSentOnValue.N) as number,
                                comment: "numericLastSentOnValue = asl.states.stringToJson(item.lastSentOnValue.N) as number"
                            });
                            let numericTotal = asl.pass({
                                parameters: () => asl.states.stringToJson(item.total.N) as number,
                                comment: "numericTotal = asl.states.stringToJson(item.total.N) as number"
                            });
                            asl.typescriptIf({
                                condition: () => (item.sk.S === threshold.metric && threshold.ceiling <= numericTotal && threshold.ceiling > numericLastSentOnValue && (!item.lastBeginDateValue.S || item.beginDate.S === item.lastBeginDateValue.S))
                                    || (item.sk.S === threshold.metric && threshold.ceiling <= numericTotal && (!item.lastBeginDateValue.S || item.beginDate.S === item.lastBeginDateValue.S)),
                                then: async () => {
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
                                },
                                comment: "if ((item.sk.S === threshold.metric && threshold.ceiling <= numericTotal && threshold.ceiling > numericLastSentOnValue && (!item.lastBeginDateValue.S || item.beginDate.S === item.lastBeginDateValue.S))\n          || (item.sk.S === threshold.metric && threshold.ceiling <= numericTotal && (!item.lastBeginDateValue.S || item.beginDate.S === item.lastBeginDateValue.S))) {\n\n          await asl.nativeEventBridgePutEvents({\n            Entries: [\n              {\n                Detail: asl.states.jsonToString({\n                  account_id: item.pk,\n                  threshold: threshold\n                }),\n                DetailType: \"xxx.detail.type\",\n                EventBusName: \"default\",\n                Source: \"zzz.my.source\"\n              }\n            ]\n          });\n          await asl.nativeDynamoDBUpdateItem({\n            TableName: \"MyStorage\",\n            Key: {\n              pk: item.pk,\n              sk: item.sk\n            },\n            ConditionExpression: \"lastSentOnValue < :newLastSentOnValue OR lastBeginDateValue <> :newLastBeginDateValue\",\n            UpdateExpression: \"SET lastSentOnValue = :newLastSentOnValue, lastBeginDateValue = :newLastBeginDateValue\",\n            ExpressionAttributeValues: {\n              \":newLastSentOnValue\": {\n                N: item.total.N as any\n              },\n              \":newLastBeginDateValue\": {\n                S: item.beginDate.S\n              }\n            }\n          });\n        }"
                            })
                        }
                    })
                }
            })
            lastEvaluatedKey = scan.LastEvaluatedKey;
        }
    })
}