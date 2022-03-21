
## main
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoaW5wdXQ6IFN0YXRlTWFjaGluZUlucHV0KSA9PiAKIHsKICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXBsYXlQcmVmaXhlcihpbnB1dCk7CiAgYXdhaXQgYXNsLm1hcCh7CiAgICBtYXhDb25jdXJyZW5jeTogNSwKICAgIGl0ZW1zOiByZXN1bHQsCiAgICBpdGVyYXRvcjogKHByZWZpeCkgPT4gdm9pZCByZXBsYXlXb3JrZXIoeyBwcmVmaXggfSkKICB9KTsKfSk7)

``` typescript
export const main = asl.deploy.asStateMachine(async (input: StateMachineInput) => 
 {
  const result = await replayPrefixer(input);
  await asl.map({
    maxConcurrency: 5,
    items: result,
    iterator: (prefix) => void replayWorker({ prefix })
  });
});
```


## replay worker
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoaW5wdXQ6IFJlcGxheVdvcmtlcklucHV0KSA9PiAKIHsKICBjb25zdCBvYmplY3RzID0gYXdhaXQgYXNsLm5hdGl2ZVMzTGlzdE9iamVjdHNWMih7IHBhcmFtZXRlcnM6IHsgUHJlZml4OiBpbnB1dC5wcmVmaXgsIEJ1Y2tldDogInByZXByb2QtbWV0cmljcy1idWNrZXQtdXMtZWFzdC0xIiB9IH0pOwogIGNvbnN0IGl0ZW1zV2l0aEtleXMgPSBvYmplY3RzLkNvbnRlbnRzIS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uS2V5KTsKICBjb25zdCBrZXlzID0gaXRlbXNXaXRoS2V5cy5tYXAoeCA9PiB4LktleSk7CgogIGF3YWl0IGFzbC5tYXAoewogICAgaXRlbXM6IGtleXMsCiAgICBtYXhDb25jdXJyZW5jeTogNSwKICAgIGl0ZXJhdG9yOiBrZXkgPT4gewogICAgICBjb25zdCBtZXNzYWdlID0gewogICAgICAgIFJlY29yZHM6IFsKICAgICAgICAgIHsKICAgICAgICAgICAgcmVwbGF5OiB0cnVlLAogICAgICAgICAgICBldmVudFNvdXJjZTogImF3czpzMyIsCiAgICAgICAgICAgIGF3c1JlZ2lvbjogInVzLWVhc3QtMSIsCiAgICAgICAgICAgIGV2ZW50TmFtZTogIk9iamVjdENyZWF0ZWQ6UHV0IiwKICAgICAgICAgICAgczM6IHsKICAgICAgICAgICAgICBzM1NjaGVtYVZlcnNpb246ICIxLjAiLAogICAgICAgICAgICAgIGJ1Y2tldDogewogICAgICAgICAgICAgICAgbmFtZTogInByZXByb2QtbWV0cmljcy1idWNrZXQtdXMtZWFzdC0xIiwKICAgICAgICAgICAgICAgIGFybjogImFybjphd3M6czM6OjpwcmVwcm9kLW1ldHJpY3MtYnVja2V0LXVzLWVhc3QtMSIKICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgIG9iamVjdDogewogICAgICAgICAgICAgICAga2V5OiBrZXkKICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KICAgICAgICAgIH0KICAgICAgICBdCiAgICAgIH07CiAgICAgIGFzbC5uYXRpdmVTTlNQdWJsaXNoKHsKICAgICAgICBwYXJhbWV0ZXJzOiB7CiAgICAgICAgICBUb3BpY0FybjogImFybjphd3M6c25zOnVzLWVhc3QtMTo0MDA3ODA2MTc2OTM6Q2VudHJhbGl6ZWRNZXRyaWNzU3RyZWFtLXByZXByb2QtQ2VudHJhbGl6ZWRNZXRyaWNzU3RyZWFtVG9waWM0ODA1MkU0Ny0xWDdTTlY2WTM1N0g2IiwKICAgICAgICAgIFN1YmplY3Q6ICJJbmdlc3Rpb24gUmVwbGF5IFMzIiwKICAgICAgICAgIE1lc3NhZ2U6IGFzbC5zdGF0ZXMuanNvblRvU3RyaW5nKG1lc3NhZ2UpCiAgICAgICAgfQogICAgICB9KQogICAgfQogIH0pOwp9KTs=)

``` typescript
export const main = asl.deploy.asStateMachine(async (input: ReplayWorkerInput) => 
 {
  const objects = await asl.nativeS3ListObjectsV2({ parameters: { Prefix: input.prefix, Bucket: "preprod-metrics-bucket-us-east-1" } });
  const itemsWithKeys = objects.Contents!.filter((item) => item.Key);
  const keys = itemsWithKeys.map(x => x.Key);

  await asl.map({
    items: keys,
    maxConcurrency: 5,
    iterator: key => {
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
                key: key
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
```


