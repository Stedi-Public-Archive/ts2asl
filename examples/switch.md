
## simple switch
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgY29uc3QgYXJyID0gWzEsIDIsIDNdOwogIGxldCByZXN1bHQgPSAiIjsKCiAgLy8gdXNlIGEgZm9yIGxvb3AgdG8gYXBwZW5kIGFsbCBudW1iZXJzIHRvIGEgc2luZ2xlIHN0cmluZwogIGZvciAoY29uc3QgaXRlbSBvZiBhcnIpIHsKICAgIHN3aXRjaCAoaXRlbSkgewogICAgICBjYXNlIDE6CiAgICAgICAgcmVzdWx0ID0gYCR7cmVzdWx0fW9uZWA7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgMjoKICAgICAgICByZXN1bHQgPSBgJHtyZXN1bHR9dHdvYDsKICAgICAgICBicmVhazsKICAgICAgZGVmYXVsdDoKICAgICAgICByZXN1bHQgPSBgJHtyZXN1bHR9dGhyZWVgOwogICAgICAgIGJyZWFrOwogICAgfQogIH0KICByZXR1cm4gcmVzdWx0Owp9KTsK)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
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
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgY29uc3QgYXJyID0gWzEsIDIsIDNdOwogIGxldCByZXN1bHQgPSAiIjsKCiAgLy8gdXNlIGEgZm9yIGxvb3AgdG8gYXBwZW5kIGFsbCBudW1iZXJzIHRvIGEgc2luZ2xlIHN0cmluZwogIGZvciAoY29uc3QgaXRlbSBvZiBhcnIpIHsKICAgIHN3aXRjaCAoaXRlbSkgewogICAgICBjYXNlIDE6CiAgICAgIGNhc2UgMjoKICAgICAgICByZXN1bHQgPSBgJHtyZXN1bHR9bm90LXRocmVlYDsKICAgICAgICBicmVhazsKICAgICAgZGVmYXVsdDoKICAgICAgICByZXN1bHQgPSBgJHtyZXN1bHR9dGhyZWVgOwogICAgICAgIGJyZWFrOwogICAgfQogIH0KICByZXR1cm4gcmVzdWx0Owp9KTsK)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
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
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgY29uc3QgYXJyID0gWzEsIDIsIDNdOwogIGxldCByZXN1bHQgPSAiIjsKCiAgLy8gdXNlIGEgZm9yIGxvb3AgdG8gYXBwZW5kIGFsbCBudW1iZXJzIHRvIGEgc2luZ2xlIHN0cmluZwogIGZvciAoY29uc3QgaXRlbSBvZiBhcnIpIHsKICAgIHN3aXRjaCAoaXRlbSkgewogICAgICBjYXNlIDE6CiAgICAgICAgcmVzdWx0ID0gYCR7cmVzdWx0fTFgOwogICAgICBjYXNlIDI6CiAgICAgICAgcmVzdWx0ID0gYCR7cmVzdWx0fTFvcjJgOwogICAgICBkZWZhdWx0OgogICAgICAgIHJlc3VsdCA9IGAke3Jlc3VsdH0xb3Iyb3IzYDsKICAgIH0KICAgIHJlc3VsdCA9IGAke3Jlc3VsdH18YDsKICB9CiAgcmV0dXJuIHJlc3VsdDsKfSk7Cg==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
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
    result = `${result}|`;
  }
  return result;
});

```


## switch case falls through to default
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgY29uc3QgYXJyID0gWzEsIDIsIDNdOwogIGxldCByZXN1bHQgPSAiIjsKCiAgLy8gdXNlIGEgZm9yIGxvb3AgdG8gYXBwZW5kIGFsbCBudW1iZXJzIHRvIGEgc2luZ2xlIHN0cmluZwogIGZvciAoY29uc3QgaXRlbSBvZiBhcnIpIHsKICAgIHN3aXRjaCAoaXRlbSkgewogICAgICBjYXNlIDE6CiAgICAgICAgcmVzdWx0ID0gYCR7cmVzdWx0fW9uZWA7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgMjoKICAgICAgZGVmYXVsdDoKICAgICAgICByZXN1bHQgPSBgJHtyZXN1bHR9bm90LW9uZWA7CiAgICAgICAgYnJlYWs7CiAgICB9CiAgfQogIHJldHVybiByZXN1bHQ7Cn0pOwo=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
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
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgY29uc3QgYXJyID0gWzEsIDIsIDNdOwogIGxldCByZXN1bHQgPSAiIjsKCiAgLy8gdXNlIGEgZm9yIGxvb3AgdG8gYXBwZW5kIGFsbCBudW1iZXJzIHRvIGEgc2luZ2xlIHN0cmluZwogIGZvciAoY29uc3QgaXRlbSBvZiBhcnIpIHsKICAgIHN3aXRjaCAoaXRlbSkgewogICAgICBkZWZhdWx0OgogICAgICBjYXNlIDE6CiAgICAgICAgcmVzdWx0ID0gYCR7cmVzdWx0fW5vdC10aHJlZWA7CiAgICAgICAgYnJlYWs7CiAgICAgIGNhc2UgMzoKICAgICAgICByZXN1bHQgPSBgJHtyZXN1bHR9dGhyZWVgOwogICAgICAgIGJyZWFrOwogICAgfQogIH0KICByZXR1cm4gcmVzdWx0Owp9KTsK)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
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
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgY29uc3QgY3JlYXRlQWNjb3VudCA9IGF3YWl0IGFzbAogICAgLnNkayhPcmdhbml6YXRpb25zKQogICAgLmNyZWF0ZUFjY291bnQoewogICAgICBwYXJhbWV0ZXJzOiB7IEFjY291bnROYW1lOiAidGVzdCIsIEVtYWlsOiAic29tZXRoaW5nQGVtYWlsLmNvbSIgfSwKICAgIH0pOwogIGxldCBjcmVhdGlvblN0YXR1czogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkOwogIGRvIHsKICAgIGNvbnN0IGRlc2NyaWJlUmVzdWx0ID0gYXdhaXQgYXNsCiAgICAgIC5zZGsoT3JnYW5pemF0aW9ucykKICAgICAgLmRlc2NyaWJlQ3JlYXRlQWNjb3VudFN0YXR1cyh7CiAgICAgICAgcGFyYW1ldGVyczogewogICAgICAgICAgQ3JlYXRlQWNjb3VudFJlcXVlc3RJZDogY3JlYXRlQWNjb3VudC5DcmVhdGVBY2NvdW50U3RhdHVzIS5JZCwKICAgICAgICB9LAogICAgICB9KTsKICAgIGNyZWF0aW9uU3RhdHVzID0gZGVzY3JpYmVSZXN1bHQuQ3JlYXRlQWNjb3VudFN0YXR1cz8uU3RhdGU7CiAgICBzd2l0Y2ggKGNyZWF0aW9uU3RhdHVzKSB7CiAgICAgIGNhc2UgIkZBSUxFRCI6CiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCJhY2NvdW50IGNyZWF0aW9uIGZhaWxlZCIpOwogICAgICBjYXNlICJJTl9QUk9HUkVTUyI6CiAgICAgICAgYXdhaXQgYXNsLndhaXQoeyBzZWNvbmRzOiAxIH0pOwogICAgfQogIH0gd2hpbGUgKGNyZWF0aW9uU3RhdHVzICE9PSAiU1VDQ0VFREVEIik7CgogIGNvbnNvbGUubG9nKGNyZWF0ZUFjY291bnQuQ3JlYXRlQWNjb3VudFN0YXR1cz8uQWNjb3VudElkKTsKICByZXR1cm4gY3JlYXRlQWNjb3VudC5DcmVhdGVBY2NvdW50U3RhdHVzPy5BY2NvdW50SWQ7Cn0pOwo=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  const createAccount = await asl
    .sdk(Organizations)
    .createAccount({
      parameters: { AccountName: "test", Email: "something@email.com" },
    });
  let creationStatus: string | undefined = undefined;
  do {
    const describeResult = await asl
      .sdk(Organizations)
      .describeCreateAccountStatus({
        parameters: {
          CreateAccountRequestId: createAccount.CreateAccountStatus!.Id,
        },
      });
    creationStatus = describeResult.CreateAccountStatus?.State;
    switch (creationStatus) {
      case "FAILED":
        throw new Error("account creation failed");
      case "IN_PROGRESS":
        await asl.wait({ seconds: 1 });
    }
  } while (creationStatus !== "SUCCEEDED");

  console.log(createAccount.CreateAccountStatus?.AccountId);
  return createAccount.CreateAccountStatus?.AccountId;
});

```


