
## main
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhc2wub3B0aW1pemVkLmFwaUdhdGV3YXlJbnZva2UoewogICAgcGFyYW1ldGVyczogewogICAgICBhcGlFbmRwb2ludDogImFhYmJjY2RkZWUuZXhlY3V0ZS1hcGkudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20iLAogICAgICBtZXRob2Q6ICJHRVQiLAogICAgfSwKICB9KTsKCiAgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgPT09IDIwMCkgewogICAgcmV0dXJuICJvayI7CiAgfQoKICByZXR1cm4gIm5vdC1vayI7Cn0pOwo=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  const response = await asl.optimized.apiGatewayInvoke({
    parameters: {
      apiEndpoint: "aabbccddee.execute-api.us-east-1.amazonaws.com",
      method: "GET",
    },
  });

  if (response.statusCode === 200) {
    return "ok";
  }

  return "not-ok";
});

```


