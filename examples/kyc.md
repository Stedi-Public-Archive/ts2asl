
## main
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBjb25zdCByZXN1bHQgPSBhd2FpdCBQcm9taXNlLmFsbChbCiAgICBwZXJmb3JtSWRlbnRpZnlDaGVjaygpLAogICAgUHJvbWlzZS5yZXNvbHZlKHsgYWdlbmN5Q2hlY2tlZDogdHJ1ZSB9KSwKICBdKQoKICBhd2FpdCBhc2wuc2RrRXZlbnRCcmlkZ2VQdXRFdmVudHMoewogICAgcGFyYW1ldGVyczogewogICAgICBFbnRyaWVzOiBbCiAgICAgICAgewogICAgICAgICAgRGV0YWlsOiBhc2wuc3RhdGVzLmpzb25Ub1N0cmluZyhyZXN1bHQpLAogICAgICAgICAgRGV0YWlsVHlwZTogIklkZW50aXR5IGNoZWNrIGNvbXBsZXRlZCIsCiAgICAgICAgICBFdmVudEJ1c05hbWU6ICJldmVudGJ1c25hbWUiLAogICAgICAgICAgU291cmNlOiAiY29tLmF3cy5reWMiCiAgICAgICAgfQogICAgICBdCiAgICB9CiAgfSk7CgogIGNvbnN0IGNoZWNrc1Bhc3NlZCA9IHRydWU7CiAgaWYgKGNoZWNrc1Bhc3NlZCkgewogICAgLy9uby1vcCB1cGRhdGUgcmlzayBwcm9maWxlCiAgICBhd2FpdCBhc2wuc2RrRXZlbnRCcmlkZ2VQdXRFdmVudHMoewogICAgICBwYXJhbWV0ZXJzOiB7CiAgICAgICAgRW50cmllczogWwogICAgICAgICAgewogICAgICAgICAgICBEZXRhaWw6IGFzbC5zdGF0ZXMuanNvblRvU3RyaW5nKHJlc3VsdCksCiAgICAgICAgICAgIERldGFpbFR5cGU6ICJBY2NvdW50QXBwcm92ZWQiLAogICAgICAgICAgICBFdmVudEJ1c05hbWU6ICJldmVudGJ1c25hbWUiLAogICAgICAgICAgICBTb3VyY2U6ICJjb20uYXdzLmt5YyIKICAgICAgICAgIH0KICAgICAgICBdCiAgICAgIH0KICAgIH0pOwogIH0gZWxzZSB7CiAgICBhd2FpdCBhc2wuc2RrRXZlbnRCcmlkZ2VQdXRFdmVudHMoewogICAgICBwYXJhbWV0ZXJzOiB7CiAgICAgICAgRW50cmllczogWwogICAgICAgICAgewogICAgICAgICAgICBEZXRhaWw6IGFzbC5zdGF0ZXMuanNvblRvU3RyaW5nKHJlc3VsdCksCiAgICAgICAgICAgIERldGFpbFR5cGU6ICJBY2NvdW50RGVjbGluZWQiLAogICAgICAgICAgICBFdmVudEJ1c05hbWU6ICJldmVudGJ1c25hbWUiLAogICAgICAgICAgICBTb3VyY2U6ICJjb20uYXdzLmt5YyIKICAgICAgICAgIH0KICAgICAgICBdCiAgICAgIH0KICAgIH0pOwogIH0KfSk7Cgo=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  const result = await Promise.all([
    performIdentifyCheck(),
    Promise.resolve({ agencyChecked: true }),
  ])

  await asl.sdkEventBridgePutEvents({
    parameters: {
      Entries: [
        {
          Detail: asl.states.jsonToString(result),
          DetailType: "Identity check completed",
          EventBusName: "eventbusname",
          Source: "com.aws.kyc"
        }
      ]
    }
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
            Source: "com.aws.kyc"
          }
        ]
      }
    });
  } else {
    await asl.sdkEventBridgePutEvents({
      parameters: {
        Entries: [
          {
            Detail: asl.states.jsonToString(result),
            DetailType: "AccountDeclined",
            EventBusName: "eventbusname",
            Source: "com.aws.kyc"
          }
        ]
      }
    });
  }
});


```


