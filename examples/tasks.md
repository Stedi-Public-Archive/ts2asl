
## count s3buckets
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBsZXQgYnVja2V0cyA9IGF3YWl0IGFzbC5zZGtTM0xpc3RCdWNrZXRzKHsgcGFyYW1ldGVyczoge30gfSkKICBsZXQgY291bnQgPSBidWNrZXRzLkJ1Y2tldHM/Lmxlbmd0aDsKICByZXR1cm4gY291bnQ7Cn0pOw==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  let buckets = await asl.sdkS3ListBuckets({ parameters: {} })
  let count = buckets.Buckets?.length;
  return count;
});
```


