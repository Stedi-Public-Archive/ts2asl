import * as asl from "@ts2asl/asl-lib";

export const main = asl.deploy.asStateMachine(async (input: ReplayWorkerInput) => {
  const objects = await asl.nativeS3ListObjectsV2({ parameters: { Prefix: input.prefix, Bucket: "preprod-metrics-bucket-us-east-1" } });
  const itemsWithKeys = objects.Contents!.filter((item) => item.Key);

  //this would be nice, but...
  //  currently generates an asl.map(), 
  //  should instead be optimized to json-path expression
  //const keys = itemsWithKeys.map(x => x.Key); 

  await asl.map({
    items: itemsWithKeys,
    maxConcurrency: 5,
    iterator: item => {
      const message = {
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
      };
      asl.nativeSNSPublish({
        parameters: {
          TopicArn: "arn:aws:sns:us-east-1:400780617693:CentralizedMetricsStream-preprod-CentralizedMetricsStreamTopic48052E47-1X7SNV6Y357H6",
          Subject: "Ingestion Replay S3",
          Message: asl.states.jsonToString(message)
        }
      })
    }
  });
});

interface ReplayWorkerInput {
  prefix: string;
}
