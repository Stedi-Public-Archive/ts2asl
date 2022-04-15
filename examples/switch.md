
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


## switch case falls through
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBjb25zdCBhcnIgPSBbMSwgMiwgM107CiAgbGV0IHJlc3VsdCA9ICIiOwoKICAvLyB1c2UgYSBmb3IgbG9vcCB0byBhcHBlbmQgYWxsIG51bWJlcnMgdG8gYSBzaW5nbGUgc3RyaW5nCiAgZm9yIChjb25zdCBpdGVtIG9mIGFycikgewogICAgc3dpdGNoIChpdGVtKSB7CiAgICAgIGNhc2UgMToKICAgICAgY2FzZSAyOgogICAgICAgIHJlc3VsdCA9IGAke3Jlc3VsdH1ub3QtdGhyZWVgOwogICAgICAgIGJyZWFrOwogICAgICBkZWZhdWx0OgogICAgICAgIHJlc3VsdCA9IGAke3Jlc3VsdH10aHJlZWA7CiAgICAgICAgYnJlYWs7CiAgICB9CiAgfQogIHJldHVybiByZXN1bHQ7Cn0pOw==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  const arr = [1, 2, 3];
  let result = "";

  // use a for loop to append all numbers to a single string
  for (const item of arr) {
    switch (item) {
      case 1:
      case 2:
        result = `${result}not-three`;
        break;
      default:
        result = `${result}three`;
        break;
    }
  }
  return result;
});
```


## switch case non empty fall through
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBjb25zdCBhcnIgPSBbMSwgMiwgM107CiAgbGV0IHJlc3VsdCA9ICIiOwoKICAvLyB1c2UgYSBmb3IgbG9vcCB0byBhcHBlbmQgYWxsIG51bWJlcnMgdG8gYSBzaW5nbGUgc3RyaW5nCiAgZm9yIChjb25zdCBpdGVtIG9mIGFycikgewogICAgc3dpdGNoIChpdGVtKSB7CiAgICAgIGNhc2UgMToKICAgICAgICByZXN1bHQgPSBgJHtyZXN1bHR9MWA7CiAgICAgIGNhc2UgMjoKICAgICAgICByZXN1bHQgPSBgJHtyZXN1bHR9MW9yMmA7CiAgICAgIGRlZmF1bHQ6CiAgICAgICAgcmVzdWx0ID0gYCR7cmVzdWx0fTFvcjJvcjNgOwogICAgfQogICAgcmVzdWx0ID0gYCR7cmVzdWx0fXxgCiAgfQogIHJldHVybiByZXN1bHQ7Cn0pOw==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  const arr = [1, 2, 3];
  let result = "";

  // use a for loop to append all numbers to a single string
  for (const item of arr) {
    switch (item) {
      case 1:
        result = `${result}1`;
      case 2:
        result = `${result}1or2`;
      default:
        result = `${result}1or2or3`;
    }
    result = `${result}|`
  }
  return result;
});
```


## switch case falls through to default
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBjb25zdCBhcnIgPSBbMSwgMiwgM107CiAgbGV0IHJlc3VsdCA9ICIiOwoKICAvLyB1c2UgYSBmb3IgbG9vcCB0byBhcHBlbmQgYWxsIG51bWJlcnMgdG8gYSBzaW5nbGUgc3RyaW5nCiAgZm9yIChjb25zdCBpdGVtIG9mIGFycikgewogICAgc3dpdGNoIChpdGVtKSB7CiAgICAgIGNhc2UgMToKICAgICAgICByZXN1bHQgPSBgJHtyZXN1bHR9b25lYDsKICAgICAgICBicmVhazsKICAgICAgY2FzZSAyOgogICAgICBkZWZhdWx0OgogICAgICAgIHJlc3VsdCA9IGAke3Jlc3VsdH1ub3Qtb25lYDsKICAgICAgICBicmVhazsKICAgIH0KICB9CiAgcmV0dXJuIHJlc3VsdDsKfSk7)

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
      default:
        result = `${result}not-one`;
        break;
    }
  }
  return result;
});
```


## switch default falls through
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBjb25zdCBhcnIgPSBbMSwgMiwgM107CiAgbGV0IHJlc3VsdCA9ICIiOwoKICAvLyB1c2UgYSBmb3IgbG9vcCB0byBhcHBlbmQgYWxsIG51bWJlcnMgdG8gYSBzaW5nbGUgc3RyaW5nCiAgZm9yIChjb25zdCBpdGVtIG9mIGFycikgewogICAgc3dpdGNoIChpdGVtKSB7CiAgICAgIGRlZmF1bHQ6CiAgICAgIGNhc2UgMToKICAgICAgICByZXN1bHQgPSBgJHtyZXN1bHR9bm90LXRocmVlYDsKICAgICAgICBicmVhazsKICAgICAgY2FzZSAzOgogICAgICAgIHJlc3VsdCA9IGAke3Jlc3VsdH10aHJlZWA7CiAgICAgICAgYnJlYWs7CiAgICB9CiAgfQogIHJldHVybiByZXN1bHQ7Cn0pOw==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  const arr = [1, 2, 3];
  let result = "";

  // use a for loop to append all numbers to a single string
  for (const item of arr) {
    switch (item) {
      default:
      case 1:
        result = `${result}not-three`;
        break;
      case 3:
        result = `${result}three`;
        break;
    }
  }
  return result;
});
```


## create aws account
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBjb25zdCBjcmVhdGVBY2NvdW50ID0gYXdhaXQgYXNsLnNka09yZ2FuaXphdGlvbnNDcmVhdGVBY2NvdW50KHsgcGFyYW1ldGVyczogeyBBY2NvdW50TmFtZTogInRlc3QiLCBFbWFpbDogInNvbWV0aGluZ0BlbWFpbC5jb20iIH0gfSk7CiAgbGV0IGNyZWF0aW9uU3RhdHVzOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7CiAgZG8gewogICAgY29uc3QgZGVzY3JpYmVSZXN1bHQgPSBhd2FpdCBhc2wuc2RrT3JnYW5pemF0aW9uc0Rlc2NyaWJlQ3JlYXRlQWNjb3VudFN0YXR1cyh7IHBhcmFtZXRlcnM6IHsgQ3JlYXRlQWNjb3VudFJlcXVlc3RJZDogY3JlYXRlQWNjb3VudC5DcmVhdGVBY2NvdW50U3RhdHVzIS5JZCB9IH0pOwogICAgY3JlYXRpb25TdGF0dXMgPSBkZXNjcmliZVJlc3VsdC5DcmVhdGVBY2NvdW50U3RhdHVzPy5TdGF0ZTsKICAgIHN3aXRjaCAoY3JlYXRpb25TdGF0dXMpIHsKICAgICAgY2FzZSAiRkFJTEVEIjogdGhyb3cgbmV3IEVycm9yKCJhY2NvdW50IGNyZWF0aW9uIGZhaWxlZCIpOwogICAgICBjYXNlICJJTl9QUk9HUkVTUyI6IGF3YWl0IGFzbC53YWl0KHsgc2Vjb25kczogMSB9KTsKICAgIH0KICB9IHdoaWxlIChjcmVhdGlvblN0YXR1cyAhPT0gIlNVQ0NFRURFRCIpOwoKICBjb25zb2xlLmxvZyhjcmVhdGVBY2NvdW50LkNyZWF0ZUFjY291bnRTdGF0dXM/LkFjY291bnRJZCk7CiAgcmV0dXJuIGNyZWF0ZUFjY291bnQuQ3JlYXRlQWNjb3VudFN0YXR1cz8uQWNjb3VudElkOwp9KTs=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  const createAccount = await asl.sdkOrganizationsCreateAccount({ parameters: { AccountName: "test", Email: "something@email.com" } });
  let creationStatus: string | undefined = undefined;
  do {
    const describeResult = await asl.sdkOrganizationsDescribeCreateAccountStatus({ parameters: { CreateAccountRequestId: createAccount.CreateAccountStatus!.Id } });
    creationStatus = describeResult.CreateAccountStatus?.State;
    switch (creationStatus) {
      case "FAILED": throw new Error("account creation failed");
      case "IN_PROGRESS": await asl.wait({ seconds: 1 });
    }
  } while (creationStatus !== "SUCCEEDED");

  console.log(createAccount.CreateAccountStatus?.AccountId);
  return createAccount.CreateAccountStatus?.AccountId;
});
```


