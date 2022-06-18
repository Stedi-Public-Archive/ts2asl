
## main
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoaW5wdXQ6IGFueSkgPT4gewogIHZhciBtYXJrZXI6IHN0cmluZyB8IHVuZGVmaW5lZDsKICBkbyB7CiAgICB2YXIgcmVzcG9uc2UgPSBhd2FpdCBhc2wuc2RrSUFNTGlzdFVzZXJzKHsKICAgICAgbmFtZTogIkxpc3QgVXNlcnMiLAogICAgICBwYXJhbWV0ZXJzOiB7CiAgICAgICAgUGF0aFByZWZpeDogIi9wYXRoIiwKICAgICAgICBNYXJrZXI6IG1hcmtlciwKICAgICAgfSwKICAgIH0pOwoKICAgIGZvciAoY29uc3QgdXNlciBvZiByZXNwb25zZS5Vc2VycyB8fCBbXSkgewogICAgICAvL3B1dCB5b3VyIGxvZ2ljIGhlcmUKICAgICAgYXdhaXQgZG9Tb21ldGhpbmcodXNlcik7CiAgICB9CiAgICBtYXJrZXIgPSByZXNwb25zZS5Jc1RydW5jYXRlZCA/IHJlc3BvbnNlLk1hcmtlciA6IHVuZGVmaW5lZDsKICB9IHdoaWxlIChtYXJrZXIpOwp9KTsK)

``` typescript
export const main = asl.deploy.asStateMachine(async (input: any) => {
  var marker: string | undefined;
  do {
    var response = await asl.sdkIAMListUsers({
      name: "List Users",
      parameters: {
        PathPrefix: "/path",
        Marker: marker,
      },
    });

    for (const user of response.Users || []) {
      //put your logic here
      await doSomething(user);
    }
    marker = response.IsTruncated ? response.Marker : undefined;
  } while (marker);
});

```


## do something
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoaW5wdXQ6IFVzZXIpID0+IHsKICBjb25zb2xlLmxvZyhpbnB1dCk7Cn0pOwo=)

``` typescript
export const main = asl.deploy.asStateMachine(async (input: User) => {
  console.log(input);
});

```


