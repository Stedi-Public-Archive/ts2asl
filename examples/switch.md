
## simple switch
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBjb25zdCBhcnIgPSBbMSwgMiwgM107CiAgbGV0IHJlc3VsdCA9ICIiOwoKICAvLyB1c2UgYSBmb3IgbG9vcCB0byBhcHBlbmQgYWxsIG51bWJlcnMgdG8gYSBzaW5nbGUgc3RyaW5nCiAgZm9yIChjb25zdCBpdGVtIG9mIGFycikgewogICAgc3dpdGNoIChpdGVtKSB7CiAgICAgIGNhc2UgMToKICAgICAgICByZXN1bHQgPSBgJHtyZXN1bHR9b25lYDsKICAgICAgICBicmVhazsKICAgICAgY2FzZSAyOgogICAgICAgIHJlc3VsdCA9IGAke3Jlc3VsdH10d29gOwogICAgICAgIGJyZWFrOwogICAgICBkZWZhdWx0OgogICAgICAgIHJlc3VsdCA9IGAke3Jlc3VsdH10aHJlZWA7CiAgICAgICAgYnJlYWs7CiAgICB9CiAgfQogIHJldHVybiByZXN1bHQ7Cn0pOw==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  const arr = [1, 2, 3];
  let result = "";

  // use a for loop to append all numbers to a single string
  for (const item of arr) {
    switch (item) {
      case 1:
        result = `${result}one`;
        break;
      case 2:
        result = `${result}two`;
        break;
      default:
        result = `${result}three`;
        break;
    }
  }
  return result;
});
```


## create aws account
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBjb25zdCBjcmVhdGVBY2NvdW50ID0gYXdhaXQgYXNsLnNka09yZ2FuaXphdGlvbnNDcmVhdGVBY2NvdW50KHsgcGFyYW1ldGVyczogeyBBY2NvdW50TmFtZTogInRlc3QiLCBFbWFpbDogInNvbWV0aGluZ0BlbWFpbC5jb20iIH0gfSk7CiAgbGV0IGNyZWF0aW9uU3RhdHVzOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7CiAgZG8gewogICAgY29uc3QgZGVzY3JpYmVSZXN1bHQgPSBhd2FpdCBhc2wuc2RrT3JnYW5pemF0aW9uc0Rlc2NyaWJlQ3JlYXRlQWNjb3VudFN0YXR1cyh7IHBhcmFtZXRlcnM6IHsgQ3JlYXRlQWNjb3VudFJlcXVlc3RJZDogY3JlYXRlQWNjb3VudC5DcmVhdGVBY2NvdW50U3RhdHVzLklkIH0gfSk7CiAgICBjcmVhdGlvblN0YXR1cyA9IGRlc2NyaWJlUmVzdWx0LkNyZWF0ZUFjY291bnRTdGF0dXMuU3RhdGU7CiAgICBzd2l0Y2ggKGNyZWF0aW9uU3RhdHVzKSB7CiAgICAgIGNhc2UgIkZBSUxFRCI6IHRocm93IG5ldyBFcnJvcigiYWNjb3VudCBjcmVhdGlvbiBpcyBzdGlsbCBpbiBwcm9ncmVzcyIpOwogICAgICBjYXNlICJJTl9QUk9HUkVTUyI6IGF3YWl0IGFzbC53YWl0KHsgc2Vjb25kczogMSB9KTsKICAgIH0KICB9IHdoaWxlIChjcmVhdGlvblN0YXR1cyAhPT0gIlNVQ0NFRURFRCIpOwoKICBjb25zb2xlLmxvZyhjcmVhdGVBY2NvdW50LkNyZWF0ZUFjY291bnRTdGF0dXMuQWNjb3VudElkKTsKICByZXR1cm4gY3JlYXRlQWNjb3VudC5DcmVhdGVBY2NvdW50U3RhdHVzLkFjY291bnRJZDsKfSk7)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  const createAccount = await asl.sdkOrganizationsCreateAccount({ parameters: { AccountName: "test", Email: "something@email.com" } });
  let creationStatus: string | undefined = undefined;
  do {
    const describeResult = await asl.sdkOrganizationsDescribeCreateAccountStatus({ parameters: { CreateAccountRequestId: createAccount.CreateAccountStatus.Id } });
    creationStatus = describeResult.CreateAccountStatus.State;
    switch (creationStatus) {
      case "FAILED": throw new Error("account creation is still in progress");
      case "IN_PROGRESS": await asl.wait({ seconds: 1 });
    }
  } while (creationStatus !== "SUCCEEDED");

  console.log(createAccount.CreateAccountStatus.AccountId);
  return createAccount.CreateAccountStatus.AccountId;
});
```


