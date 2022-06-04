
## choice
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZSgKICBhc3luYyAoCiAgICBpbnB1dDogewogICAgICBjb25kaXRpb24/OiBhbnk7CiAgICB9ID0ge30KICApID0+IHsKICAgIGxldCB2YWwgPSB7IGE6ICIiLCBiOiAiIiwgYzogIiIsIGQ6ICIiLCBlOiAiIiwgZjogIiIsIGc6ICIiIH07CiAgICB2YWwuYSA9ICJiZWZvcmUgY2hvaWNlIjsKCiAgICBhc2wuY2hvaWNlKHsKICAgICAgY2hvaWNlczogWwogICAgICAgIHsKICAgICAgICAgIGNvbmRpdGlvbjogKCkgPT4gaW5wdXQuY29uZGl0aW9uLAogICAgICAgICAgYmxvY2s6ICgpID0+IHsKICAgICAgICAgICAgdmFsLmIgPSAidmFsIGlzIG5vdCBhbiBlbXB0eSBzdHJpbmciOwogICAgICAgICAgICB2YWwuYyA9ICJ2YWwgaXMgYWxzbyBub3QgZmFsc2Ugb3IgMCI7CiAgICAgICAgICB9LAogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgY29uZGl0aW9uOiAoKSA9PiAhaW5wdXQuY29uZGl0aW9uLAogICAgICAgICAgYmxvY2s6ICgpID0+IHsKICAgICAgICAgICAgdmFsLmQgPSAidmFsIGlzIGVtcHR5IHN0cmluZyI7CiAgICAgICAgICAgIHZhbC5lID0gIm9yIGZhbHNlIG9yIDAiOwogICAgICAgICAgfSwKICAgICAgICB9LAogICAgICBdLAogICAgICBkZWZhdWx0OiAoKSA9PiB7CiAgICAgICAgdmFsLmYgPSAidGhpcyBzaG91bGQgbm90IGhhcHBlbiI7CiAgICAgIH0sCiAgICB9KTsKICAgIHZhbC5nID0gImFmdGVyIGNob2ljZSI7CiAgICByZXR1cm4gdmFsOwogIH0KKTsK)

``` typescript
export const main = asl.deploy.asStateMachine(
  async (
    input: {
      condition?: any;
    } = {}
  ) => {
    let val = { a: "", b: "", c: "", d: "", e: "", f: "", g: "" };
    val.a = "before choice";

    asl.choice({
      choices: [
        {
          condition: () => input.condition,
          block: () => {
            val.b = "val is not an empty string";
            val.c = "val is also not false or 0";
          },
        },
        {
          condition: () => !input.condition,
          block: () => {
            val.d = "val is empty string";
            val.e = "or false or 0";
          },
        },
      ],
      default: () => {
        val.f = "this should not happen";
      },
    });
    val.g = "after choice";
    return val;
  }
);

```


## choice with single statements
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZSgKICBhc3luYyAoCiAgICBpbnB1dDogewogICAgICBjb25kaXRpb24/OiBhbnk7CiAgICB9ID0ge30KICApID0+IHsKICAgIGxldCB2YWwgPSB7IGE6ICIiLCBiOiAiIiwgYzogIiIsIGQ6ICIiLCBlOiAiIiwgZjogIiIsIGc6ICIiIH07CiAgICBhc2wuY2hvaWNlKHsKICAgICAgY2hvaWNlczogWwogICAgICAgIHsKICAgICAgICAgIGNvbmRpdGlvbjogKCkgPT4gISFpbnB1dC5jb25kaXRpb24sCiAgICAgICAgICBibG9jazogKCkgPT4gewogICAgICAgICAgICB2YWwuYSA9ICJ2YWwgaXMgdHJ1dGh5IjsKICAgICAgICAgIH0sCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICBjb25kaXRpb246ICgpID0+ICFpbnB1dC5jb25kaXRpb24sCiAgICAgICAgICBibG9jazogKCkgPT4gewogICAgICAgICAgICB2YWwuYiA9ICJ2YWwgaXMgZmFsc3kiOwogICAgICAgICAgfSwKICAgICAgICB9LAogICAgICBdLAogICAgICBkZWZhdWx0OiAoKSA9PiB7CiAgICAgICAgdmFsLmMgPSAidmFsIGlzIG5vdCB0cnV0aHkgYW5kIG5vdCBmYWxzeSI7CiAgICAgIH0sCiAgICB9KTsKICAgIHJldHVybiB2YWw7CiAgfQopOwo=)

``` typescript
export const main = asl.deploy.asStateMachine(
  async (
    input: {
      condition?: any;
    } = {}
  ) => {
    let val = { a: "", b: "", c: "", d: "", e: "", f: "", g: "" };
    asl.choice({
      choices: [
        {
          condition: () => !!input.condition,
          block: () => {
            val.a = "val is truthy";
          },
        },
        {
          condition: () => !input.condition,
          block: () => {
            val.b = "val is falsy";
          },
        },
      ],
      default: () => {
        val.c = "val is not truthy and not falsy";
      },
    });
    return val;
  }
);

```


## choice with shorthand
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZSgKICBhc3luYyAoCiAgICBpbnB1dDogewogICAgICBjb25kaXRpb24/OiBhbnk7CiAgICB9ID0ge30KICApID0+IHsKICAgIGxldCB2YWwgPSB7IGE6ICIiLCBiOiAiIiwgYzogIiIsIGQ6ICIiLCBlOiAiIiwgZjogIiIsIGc6ICIiIH07CiAgICBhc2wuY2hvaWNlKHsKICAgICAgY2hvaWNlczogWwogICAgICAgIHsKICAgICAgICAgIGNvbmRpdGlvbjogKCkgPT4gISFpbnB1dC5jb25kaXRpb24sCiAgICAgICAgICBibG9jazogKCkgPT4gKHZhbC5hID0gInZhbCBpcyB0cnV0aHkiKSwKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgIGNvbmRpdGlvbjogKCkgPT4gIWlucHV0LmNvbmRpdGlvbiwKICAgICAgICAgIGJsb2NrOiAoKSA9PiAodmFsLmIgPSAidmFsIGlzIGZhbHN5IiksCiAgICAgICAgfSwKICAgICAgXSwKICAgICAgZGVmYXVsdDogKCkgPT4gKHZhbC5jID0gInZhbCBpcyBub3QgdHJ1dGh5IGFuZCBub3QgZmFsc3kiKSwKICAgIH0pOwogICAgcmV0dXJuIHZhbDsKICB9Cik7Cg==)

``` typescript
export const main = asl.deploy.asStateMachine(
  async (
    input: {
      condition?: any;
    } = {}
  ) => {
    let val = { a: "", b: "", c: "", d: "", e: "", f: "", g: "" };
    asl.choice({
      choices: [
        {
          condition: () => !!input.condition,
          block: () => (val.a = "val is truthy"),
        },
        {
          condition: () => !input.condition,
          block: () => (val.b = "val is falsy"),
        },
      ],
      default: () => (val.c = "val is not truthy and not falsy"),
    });
    return val;
  }
);

```


