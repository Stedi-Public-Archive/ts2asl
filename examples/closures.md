
## main
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgY29uc3QgbnVtYmVycyA9IFswLCAxLCAyLCAzXTsKICBjb25zdCBsZXR0ZXJzID0gWyJhIiwgImIiLCAiYyIsICJkIl07CiAgY29uc3QgZ2xvYmFsID0gInByZWZpeCI7CiAgY29uc3Qgb3V0ZXIgPSB7IG1pZGRsZTogeyBpbm5lcjogMyB9IH07CiAgbnVtYmVycy5tYXAoKG51bWJlcikgPT4gewogICAgbGV0dGVycy5tYXAoKGxldHRlcikgPT4gewogICAgICBjb25zdCBjb21iaW5lZCA9IHsgbnVtYmVyLCBsZXR0ZXIsIGdsb2JhbCwgaW5uZXI6IG91dGVyLm1pZGRsZS5pbm5lciB9OwogICAgICBkb1NvbWV0aGluZyhjb21iaW5lZCk7CiAgICB9KTsKICB9KTsKfSk7Cg==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  const numbers = [0, 1, 2, 3];
  const letters = ["a", "b", "c", "d"];
  const global = "prefix";
  const outer = { middle: { inner: 3 } };
  numbers.map((number) => {
    letters.map((letter) => {
      const combined = { number, letter, global, inner: outer.middle.inner };
      doSomething(combined);
    });
  });
});

```


