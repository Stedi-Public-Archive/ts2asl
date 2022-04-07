
## main
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBjb25zdCBjcmVhdGVBY2NvdW50ID0gYXdhaXQgYXNsLnNka09yZ2FuaXphdGlvbnNDcmVhdGVBY2NvdW50KHsgcGFyYW1ldGVyczogeyBBY2NvdW50TmFtZTogInRlc3QiLCBFbWFpbDogInNvbWV0aGluZ0BlbWFpbC5jb20iIH0gfSk7CiAgbGV0IGNyZWF0aW9uU3RhdHVzOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7CiAgZG8gewogICAgY29uc3QgZGVzY3JpYmVSZXN1bHQgPSBhd2FpdCBhc2wuc2RrT3JnYW5pemF0aW9uc0Rlc2NyaWJlQ3JlYXRlQWNjb3VudFN0YXR1cyh7IHBhcmFtZXRlcnM6IHsgQ3JlYXRlQWNjb3VudFJlcXVlc3RJZDogY3JlYXRlQWNjb3VudC5DcmVhdGVBY2NvdW50U3RhdHVzLklkIH0gfSk7CiAgICBjcmVhdGlvblN0YXR1cyA9IGRlc2NyaWJlUmVzdWx0LkNyZWF0ZUFjY291bnRTdGF0dXMuU3RhdGU7CiAgICBzd2l0Y2ggKGNyZWF0aW9uU3RhdHVzKSB7CiAgICAgIGNhc2UgIkZBSUxFRCI6IHRocm93IG5ldyBBY2NvdW50Q3JlYXRpb25GYWlsZWQoImFjY291bnQgY3JlYXRpb24gaXMgc3RpbGwgaW4gcHJvZ3Jlc3MiKTsKICAgICAgY2FzZSAiSU5fUFJPR1JFU1MiOiBhd2FpdCBhc2wud2FpdCh7IHNlY29uZHM6IDEgfSk7CiAgICB9CiAgfSB3aGlsZSAoY3JlYXRpb25TdGF0dXMgIT09ICJTVUNDRUVERUQiKTsKCiAgY29uc29sZS5sb2coY3JlYXRlQWNjb3VudC5DcmVhdGVBY2NvdW50U3RhdHVzLkFjY291bnRJZCk7CiAgcmV0dXJuIGNyZWF0ZUFjY291bnQuQ3JlYXRlQWNjb3VudFN0YXR1cy5BY2NvdW50SWQ7Cn0pOw==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  const createAccount = await asl.sdkOrganizationsCreateAccount({ parameters: { AccountName: "test", Email: "something@email.com" } });
  let creationStatus: string | undefined = undefined;
  do {
    const describeResult = await asl.sdkOrganizationsDescribeCreateAccountStatus({ parameters: { CreateAccountRequestId: createAccount.CreateAccountStatus.Id } });
    creationStatus = describeResult.CreateAccountStatus.State;
    switch (creationStatus) {
      case "FAILED": throw new AccountCreationFailed("account creation is still in progress");
      case "IN_PROGRESS": await asl.wait({ seconds: 1 });
    }
  } while (creationStatus !== "SUCCEEDED");

  console.log(createAccount.CreateAccountStatus.AccountId);
  return createAccount.CreateAccountStatus.AccountId;
});
```


