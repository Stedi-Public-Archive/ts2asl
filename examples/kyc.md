
## main
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgUHJvbWlzZS5hbGwoWwogICAgcGVyZm9ybUlkZW50aWZ5Q2hlY2soKSwKICAgIFByb21pc2UucmVzb2x2ZSh7IGFnZW5jeUNoZWNrZWQ6IHRydWUgfSksCiAgXSk7CgogIGF3YWl0IGFzbC5zZGtFdmVudEJyaWRnZVB1dEV2ZW50cyh7CiAgICBwYXJhbWV0ZXJzOiB7CiAgICAgIEVudHJpZXM6IFsKICAgICAgICB7CiAgICAgICAgICBEZXRhaWw6IGFzbC5zdGF0ZXMuanNvblRvU3RyaW5nKHJlc3VsdCksCiAgICAgICAgICBEZXRhaWxUeXBlOiAiSWRlbnRpdHkgY2hlY2sgY29tcGxldGVkIiwKICAgICAgICAgIEV2ZW50QnVzTmFtZTogImV2ZW50YnVzbmFtZSIsCiAgICAgICAgICBTb3VyY2U6ICJjb20uYXdzLmt5YyIsCiAgICAgICAgfSwKICAgICAgXSwKICAgIH0sCiAgfSk7CgogIGNvbnN0IGNoZWNrc1Bhc3NlZCA9IHRydWU7CiAgaWYgKGNoZWNrc1Bhc3NlZCkgewogICAgLy9uby1vcCB1cGRhdGUgcmlzayBwcm9maWxlCiAgICBhd2FpdCBhc2wuc2RrRXZlbnRCcmlkZ2VQdXRFdmVudHMoewogICAgICBwYXJhbWV0ZXJzOiB7CiAgICAgICAgRW50cmllczogWwogICAgICAgICAgewogICAgICAgICAgICBEZXRhaWw6IGFzbC5zdGF0ZXMuanNvblRvU3RyaW5nKHJlc3VsdCksCiAgICAgICAgICAgIERldGFpbFR5cGU6ICJBY2NvdW50QXBwcm92ZWQiLAogICAgICAgICAgICBFdmVudEJ1c05hbWU6ICJldmVudGJ1c25hbWUiLAogICAgICAgICAgICBTb3VyY2U6ICJjb20uYXdzLmt5YyIsCiAgICAgICAgICB9LAogICAgICAgIF0sCiAgICAgIH0sCiAgICB9KTsKICB9IGVsc2UgewogICAgYXdhaXQgYXNsLnNka0V2ZW50QnJpZGdlUHV0RXZlbnRzKHsKICAgICAgcGFyYW1ldGVyczogewogICAgICAgIEVudHJpZXM6IFsKICAgICAgICAgIHsKICAgICAgICAgICAgRGV0YWlsOiBhc2wuc3RhdGVzLmpzb25Ub1N0cmluZyhyZXN1bHQpLAogICAgICAgICAgICBEZXRhaWxUeXBlOiAiQWNjb3VudERlY2xpbmVkIiwKICAgICAgICAgICAgRXZlbnRCdXNOYW1lOiAiZXZlbnRidXNuYW1lIiwKICAgICAgICAgICAgU291cmNlOiAiY29tLmF3cy5reWMiLAogICAgICAgICAgfSwKICAgICAgICBdLAogICAgICB9LAogICAgfSk7CiAgfQp9KTsK)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  const result = await Promise.all([
    performIdentifyCheck(),
    Promise.resolve({ agencyChecked: true }),
  ]);

  await asl.sdkEventBridgePutEvents({
    parameters: {
      Entries: [
        {
          Detail: asl.states.jsonToString(result),
          DetailType: "Identity check completed",
          EventBusName: "eventbusname",
          Source: "com.aws.kyc",
        },
      ],
    },
  });

  const checksPassed = true;
  if (checksPassed) {
    //no-op update risk profile
    await asl.sdkEventBridgePutEvents({
      parameters: {
        Entries: [
          {
            Detail: asl.states.jsonToString(result),
            DetailType: "AccountApproved",
            EventBusName: "eventbusname",
            Source: "com.aws.kyc",
          },
        ],
      },
    });
  } else {
    await asl.sdkEventBridgePutEvents({
      parameters: {
        Entries: [
          {
            Detail: asl.states.jsonToString(result),
            DetailType: "AccountDeclined",
            EventBusName: "eventbusname",
            Source: "com.aws.kyc",
          },
        ],
      },
    });
  }
});

```


