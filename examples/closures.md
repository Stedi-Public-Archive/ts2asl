
## main
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBjb25zdCBudW1iZXJzID0gWzAsIDEsIDIsIDNdOwogIGNvbnN0IGxldHRlcnMgPSBbImEiLCAiYiIsICJjIiwgImQiXTsKICBjb25zdCBnbG9iYWwgPSAicHJlZml4IjsKICBjb25zdCBvdXRlciA9IHsgbWlkZGxlOiB7IGlubmVyOiAzIH0gfQogIG51bWJlcnMubWFwKG51bWJlciA9PiB7CiAgICBsZXR0ZXJzLm1hcChsZXR0ZXIgPT4gewogICAgICBjb25zdCBjb21iaW5lZCA9IHsgbnVtYmVyLCBsZXR0ZXIsIGdsb2JhbCwgaW5uZXI6IG91dGVyLm1pZGRsZS5pbm5lciB9OwogICAgICBkb1NvbWV0aGluZyhjb21iaW5lZCk7CiAgICB9KTsKICB9KTsKfSk7)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  const numbers = [0, 1, 2, 3];
  const letters = ["a", "b", "c", "d"];
  const global = "prefix";
  const outer = { middle: { inner: 3 } }
  numbers.map(number => {
    letters.map(letter => {
      const combined = { number, letter, global, inner: outer.middle.inner };
      doSomething(combined);
    });
  });
});
```


