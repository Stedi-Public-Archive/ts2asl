
## main
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBjb25zdCBjcmVhdGVBY2NvdW50ID0gYXdhaXQgYXNsLnNka09yZ2FuaXphdGlvbnNDcmVhdGVBY2NvdW50KHsgcGFyYW1ldGVyczogeyBBY2NvdW50TmFtZTogInRlc3QiLCBFbWFpbDogInNvbWV0aGluZ0BlbWFpbC5jb20iIH0gfSk7CiAgYXNsLnBhcmFsbGVsKHsKICAgIGJyYW5jaGVzOiBbYXN5bmMgKCkgPT4gewogICAgICBjb25zdCBkZXNjcmliZVJlc3VsdCA9IGF3YWl0IGFzbC5zZGtPcmdhbml6YXRpb25zRGVzY3JpYmVDcmVhdGVBY2NvdW50U3RhdHVzKHsgcGFyYW1ldGVyczogeyBDcmVhdGVBY2NvdW50UmVxdWVzdElkOiBjcmVhdGVBY2NvdW50LkNyZWF0ZUFjY291bnRTdGF0dXMuSWQgfSB9KTsKICAgICAgc3dpdGNoIChkZXNjcmliZVJlc3VsdC5DcmVhdGVBY2NvdW50U3RhdHVzKSB7CiAgICAgICAgY2FzZSAiU1VDQ0VFREVEIjogcmV0dXJuIGRlc2NyaWJlUmVzdWx0OwogICAgICAgIGNhc2UgIklOX1BST0dSRVNTIjogdGhyb3cgbmV3IEFjY291bnRDcmVhdGlvbkluUHJvZ3Jlc3MoImFjY291bnQgY3JlYXRpb24gaXMgc3RpbGwgaW4gcHJvZ3Jlc3MiKTsKICAgICAgICBkZWZhdWx0OiB0aHJvdyBuZXcgQWNjb3VudENyZWF0aW9uRmFpbGVkKCJhY2NvdW50IGNyZWF0aW9uIGlzIHN0aWxsIGluIHByb2dyZXNzIik7CiAgICAgIH0KICAgIH1dLAogIH0pOwp9KTs=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  const createAccount = await asl.sdkOrganizationsCreateAccount({ parameters: { AccountName: "test", Email: "something@email.com" } });
  asl.parallel({
    branches: [async () => {
      const describeResult = await asl.sdkOrganizationsDescribeCreateAccountStatus({ parameters: { CreateAccountRequestId: createAccount.CreateAccountStatus.Id } });
      switch (describeResult.CreateAccountStatus) {
        case "SUCCEEDED": return describeResult;
        case "IN_PROGRESS": throw new AccountCreationInProgress("account creation is still in progress");
        default: throw new AccountCreationFailed("account creation is still in progress");
      }
    }],
  });
});
```


