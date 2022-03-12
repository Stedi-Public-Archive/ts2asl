import * as asl from "@ts2asl/asl-lib";

export const main = asl.deploy.asStateMachine(async (input: ReplayWorkerInput) =>{
    const objects = asl.nativeS3ListObjectsV2({ parameters: { Prefix: input.prefix, Bucket: "preprod-metrics-bucket-us-east-1" } });
    const itemsWithKeys = asl.jsonPathFilter(objects.Contents, (item) => item.Key);
    //this would be nice, but...
    //  currently generates an asl.map(), 
    //  should instead be optimized to json-path expression
    //const keys = itemsWithKeys.map(x => x.Key); 
    asl.map({
        items: itemsWithKeys,
        maxConcurrency: 5,
        iterator: item => {
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
                                    key: item.Key
                                }
                            }
                        }
                    ]
                }),
                comment: "message = {\n        Records: [\n          {\n            replay: true,\n            eventSource: \"aws:s3\",\n            awsRegion: \"us-east-1\",\n            eventName: \"ObjectCreated:Put\",\n            s3: {\n              s3SchemaVersion: \"1.0\",\n              bucket: {\n                name: \"preprod-metrics-bucket-us-east-1\",\n                arn: \"arn:aws:s3:::preprod-metrics-bucket-us-east-1\"\n              },\n              object: {\n                key: item.Key\n              }\n            }\n          }\n        ]\n      }"
            });
            asl.nativeSNSPublish({
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
