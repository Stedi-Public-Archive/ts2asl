import * as asl from "@ts2asl/asl-lib";

export const replayPrefixer = asl.deploy.asLambda((input: StateMachineInput) => { return [""] });

//option 1: sdk typescript
// export const main = asl.deploy.asStateMachine(async (input: StateMachineInput) => {
//   const result = await replayPrefixer(input);
//   for (const prefix of result) {
//     await asl.sdkSfnStartExecution({
//       parameters: {
//         input: asl.states.format("{}", prefix),
//         stateMachineArn: asl.deploy.getParameter("stateMachineArn"),
//       },
//     });
//   }
// });

//option 2: asl lib typescript
export const main = asl.deploy.asStateMachine(async (input: StateMachineInput) => {
    const result = await replayPrefixer(input);
    await asl.map({
        maxConcurrency: 5,
        items: result,
        iterator: (prefix) => void replayWorker({ prefix })
    });
});

interface StateMachineInput {
    startDate: string;
    endDate?: string;
}


export const replayWorker = asl.deploy.asStateMachine(async (input: ReplayWorkerInput) => {
    const objects = await asl.sdkS3ListObjectsV2({ parameters: { Prefix: input.prefix, Bucket: "preprod-metrics-bucket-us-east-1" } });
    const itemsWithKeys = asl.jsonPathFilter(objects.Contents, (item) => item.Key);
    const keys = asl.jsonPathMap(itemsWithKeys, "Key");
    await asl.map({
        items: keys,
        maxConcurrency: 5,
        iterator: key => {
            const message = asl.pass({
                name: "Assign message",
                parameters: () => ({
                    Records: [
                        {
                            replay: true,
                            eventSource: "aws:s3",
                            awsRegion: "us-east-1",
                            eventName: "ObjectCreated:Put",
                            s3: {
                                s3SchemaVersion: "1.0",
                                bucket: {
                                    name: "preprod-metrics-bucket-us-east-1",
                                    arn: "arn:aws:s3:::preprod-metrics-bucket-us-east-1"
                                },
                                object: {
                                    key: key
                                }
                            }
                        }
                    ]
                }),
                comment: "message = {\n        Records: [\n          {\n            replay: true,\n            eventSource: \"aws:s3\",\n            awsRegion: \"us-east-1\",\n            eventName: \"ObjectCreated:Put\",\n            s3: {\n              s3SchemaVersion: \"1.0\",\n              bucket: {\n                name: \"preprod-metrics-bucket-us-east-1\",\n                arn: \"arn:aws:s3:::preprod-metrics-bucket-us-east-1\"\n              },\n              object: {\n                key: key\n              }\n            }\n          }\n        ]\n      }"
            });
            asl.sdkSNSPublish({
                parameters: {
                    TopicArn: "arn:aws:sns:us-east-1:400780617693:CentralizedMetricsStream-preprod-CentralizedMetricsStreamTopic48052E47-1X7SNV6Y357H6",
                    Subject: "Ingestion Replay S3",
                    Message: asl.states.jsonToString(message)
                }
            });
        }
    });
});

interface ReplayWorkerInput {
    prefix: string;
}
