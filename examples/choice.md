
## choice
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoaW5wdXQ6IHsKICAgIGNvbmRpdGlvbj86IGFueTsKfSA9IHt9KSA9PiAKIHsKICBsZXQgdmFsID0geyBhOiAiIiwgYjogIiIsIGM6ICIiLCBkOiAiIiwgZTogIiIsIGY6ICIiLCBnOiAiIiB9OwogIHZhbC5hID0gImJlZm9yZSBjaG9pY2UiOwoKICBhc2wuY2hvaWNlKHsKICAgIGNob2ljZXM6IFsKICAgICAgewogICAgICAgIGNvbmRpdGlvbjogKCkgPT4gaW5wdXQuY29uZGl0aW9uLAogICAgICAgIGJsb2NrOiAoKSA9PiB7CiAgICAgICAgICB2YWwuYiA9ICJ2YWwgaXMgbm90IGFuIGVtcHR5IHN0cmluZyI7CiAgICAgICAgICB2YWwuYyA9ICJ2YWwgaXMgYWxzbyBub3QgZmFsc2Ugb3IgMCI7CiAgICAgICAgfQogICAgICB9LCB7CiAgICAgICAgY29uZGl0aW9uOiAoKSA9PiAhaW5wdXQuY29uZGl0aW9uLAogICAgICAgIGJsb2NrOiAoKSA9PiB7CiAgICAgICAgICB2YWwuZCA9ICJ2YWwgaXMgZW1wdHkgc3RyaW5nIjsKICAgICAgICAgIHZhbC5lID0gIm9yIGZhbHNlIG9yIDAiOwogICAgICAgIH0KICAgICAgfQogICAgXSwKICAgIGRlZmF1bHQ6ICgpID0+IHsKICAgICAgdmFsLmYgPSAidGhpcyBzaG91bGQgbm90IGhhcHBlbiI7CiAgICB9CiAgfSk7CiAgdmFsLmcgPSAiYWZ0ZXIgY2hvaWNlIjsKICByZXR1cm4gdmFsOwp9KTs=)

``` typescript
export const main = asl.deploy.asStateMachine(async (input: {
    condition?: any;
} = {}) => 
 {
  let val = { a: "", b: "", c: "", d: "", e: "", f: "", g: "" };
  val.a = "before choice";

  asl.choice({
    choices: [
      {
        condition: () => input.condition,
        block: () => {
          val.b = "val is not an empty string";
          val.c = "val is also not false or 0";
        }
      }, {
        condition: () => !input.condition,
        block: () => {
          val.d = "val is empty string";
          val.e = "or false or 0";
        }
      }
    ],
    default: () => {
      val.f = "this should not happen";
    }
  });
  val.g = "after choice";
  return val;
});
```


## choice with single statements
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoaW5wdXQ6IHsKICAgIGNvbmRpdGlvbj86IGFueTsKfSA9IHt9KSA9PiAKIHsKICBsZXQgdmFsID0geyBhOiAiIiwgYjogIiIsIGM6ICIiLCBkOiAiIiwgZTogIiIsIGY6ICIiLCBnOiAiIiB9OwogIGFzbC5jaG9pY2UoewogICAgY2hvaWNlczogWwogICAgICB7CiAgICAgICAgY29uZGl0aW9uOiAoKSA9PiAhIWlucHV0LmNvbmRpdGlvbiwKICAgICAgICBibG9jazogKCkgPT4gewogICAgICAgICAgdmFsLmEgPSAidmFsIGlzIHRydXRoeSI7CiAgICAgICAgfQogICAgICB9LCB7CiAgICAgICAgY29uZGl0aW9uOiAoKSA9PiAhaW5wdXQuY29uZGl0aW9uLAogICAgICAgIGJsb2NrOiAoKSA9PiB7CiAgICAgICAgICB2YWwuYiA9ICJ2YWwgaXMgZmFsc3kiOwogICAgICAgIH0KICAgICAgfQogICAgXSwKICAgIGRlZmF1bHQ6ICgpID0+IHsKICAgICAgdmFsLmMgPSAidmFsIGlzIG5vdCB0cnV0aHkgYW5kIG5vdCBmYWxzeSI7CiAgICB9CiAgfSk7CiAgcmV0dXJuIHZhbDsKfSk7)

``` typescript
export const main = asl.deploy.asStateMachine(async (input: {
    condition?: any;
} = {}) => 
 {
  let val = { a: "", b: "", c: "", d: "", e: "", f: "", g: "" };
  asl.choice({
    choices: [
      {
        condition: () => !!input.condition,
        block: () => {
          val.a = "val is truthy";
        }
      }, {
        condition: () => !input.condition,
        block: () => {
          val.b = "val is falsy";
        }
      }
    ],
    default: () => {
      val.c = "val is not truthy and not falsy";
    }
  });
  return val;
});
```


## choice with shorthand
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoaW5wdXQ6IHsKICAgIGNvbmRpdGlvbj86IGFueTsKfSA9IHt9KSA9PiAKIHsKICBsZXQgdmFsID0geyBhOiAiIiwgYjogIiIsIGM6ICIiLCBkOiAiIiwgZTogIiIsIGY6ICIiLCBnOiAiIiB9OwogIGFzbC5jaG9pY2UoewogICAgY2hvaWNlczogWwogICAgICB7CiAgICAgICAgY29uZGl0aW9uOiAoKSA9PiAhIWlucHV0LmNvbmRpdGlvbiwKICAgICAgICBibG9jazogKCkgPT4gdmFsLmEgPSAidmFsIGlzIHRydXRoeSIsCiAgICAgIH0sIHsKICAgICAgICBjb25kaXRpb246ICgpID0+ICFpbnB1dC5jb25kaXRpb24sCiAgICAgICAgYmxvY2s6ICgpID0+IHZhbC5iID0gInZhbCBpcyBmYWxzeSIsCiAgICAgIH0KICAgIF0sCiAgICBkZWZhdWx0OiAoKSA9PiB2YWwuYyA9ICJ2YWwgaXMgbm90IHRydXRoeSBhbmQgbm90IGZhbHN5IiwKICB9CiAgKTsKICByZXR1cm4gdmFsOwp9KTs=)

``` typescript
export const main = asl.deploy.asStateMachine(async (input: {
    condition?: any;
} = {}) => 
 {
  let val = { a: "", b: "", c: "", d: "", e: "", f: "", g: "" };
  asl.choice({
    choices: [
      {
        condition: () => !!input.condition,
        block: () => val.a = "val is truthy",
      }, {
        condition: () => !input.condition,
        block: () => val.b = "val is falsy",
      }
    ],
    default: () => val.c = "val is not truthy and not falsy",
  }
  );
  return val;
});
```


