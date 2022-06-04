
## just if
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgbGV0IHZhbCA9IHsgYTogIiIsIGI6ICIiLCBjOiAiIiwgZDogIiIsIGU6ICIiLCBmOiAiIiwgZzogIiIgfTsKICB2YWwuYSA9ICJiZWZvcmUiOwogIGlmICh0cnVlKSB7CiAgICB2YWwuYiA9ICJ0cnVlXzEiOwogICAgdmFsLmMgPSAidHJ1ZV8yIjsKICB9CiAgdmFsLmQgPSAiYWZ0ZXIiOwogIHJldHVybiB2YWw7Cn0pOwo=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  let val = { a: "", b: "", c: "", d: "", e: "", f: "", g: "" };
  val.a = "before";
  if (true) {
    val.b = "true_1";
    val.c = "true_2";
  }
  val.d = "after";
  return val;
});

```


## if else
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgbGV0IHZhbCA9IHsgYTogIiIsIGI6ICIiLCBjOiAiIiwgZDogIiIsIGU6ICIiLCBmOiAiIiwgZzogIiIgfTsKICB2YWwuYSA9ICJiZWZvcmUiOwogIGlmICh0cnVlKSB7CiAgICB2YWwuYiA9ICJ0cnVlXzEiOwogICAgdmFsLmMgPSAidHJ1ZV8yIjsKICB9IGVsc2UgewogICAgdmFsLmIgPSAiZmFsc2VfMSI7CiAgICB2YWwuYyA9ICJmYWxzZV8yIjsKICB9CiAgdmFsLmQgPSAiYWZ0ZXIiOwogIHJldHVybiB2YWw7Cn0pOwo=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  let val = { a: "", b: "", c: "", d: "", e: "", f: "", g: "" };
  val.a = "before";
  if (true) {
    val.b = "true_1";
    val.c = "true_2";
  } else {
    val.b = "false_1";
    val.c = "false_2";
  }
  val.d = "after";
  return val;
});

```


## nested ifs
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgbGV0IHZhbCA9IHsgYTogIiIsIGI6ICIiLCBjOiAiIiwgZDogIiIsIGU6ICIiLCBmOiAiIiwgZzogIiIgfTsKICB2YWwuYSA9ICJiZWZvcmUiOwogIGlmICh0cnVlKSB7CiAgICB2YWwuYiA9ICJvdXRlcl8xIjsKICAgIHZhbC5jID0gIm91dGVyXzIiOwogICAgaWYgKHRydWUpIHsKICAgICAgdmFsLmQgPSAiaW5uZXJfMSI7CiAgICAgIHZhbC5lID0gImlubmVyXzIiOwogICAgfSBlbHNlIHsKICAgICAgdmFsLmUgPSAiaW5uZXJfZWxzZV8yIjsKICAgIH0KICB9IGVsc2UgewogICAgdmFsLmYgPSAib3V0ZXJfZWxzZV8yIjsKICB9CiAgdmFsLmcgPSAiYWZ0ZXIiOwogIHJldHVybiB2YWw7Cn0pOwo=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  let val = { a: "", b: "", c: "", d: "", e: "", f: "", g: "" };
  val.a = "before";
  if (true) {
    val.b = "outer_1";
    val.c = "outer_2";
    if (true) {
      val.d = "inner_1";
      val.e = "inner_2";
    } else {
      val.e = "inner_else_2";
    }
  } else {
    val.f = "outer_else_2";
  }
  val.g = "after";
  return val;
});

```


## enclosed vars
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgbGV0IGVuY2xvc2VkVmFyID0gImJlZm9yZSI7CiAgaWYgKHRydWUpIHsKICAgIGVuY2xvc2VkVmFyID0gIm91dGVyIGlmIjsKICAgIGlmICh0cnVlKSB7CiAgICAgIGVuY2xvc2VkVmFyID0gImlubmVyIGlmIjsKICAgIH0gZWxzZSB7CiAgICAgIGVuY2xvc2VkVmFyID0gImVsc2UgaWYiOwogICAgfQogIH0gZWxzZSB7CiAgICBlbmNsb3NlZFZhciA9ICJvdXRlciBlbHNlIGlmIjsKICB9CiAgcmV0dXJuIGVuY2xvc2VkVmFyOwp9KTsK)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  let enclosedVar = "before";
  if (true) {
    enclosedVar = "outer if";
    if (true) {
      enclosedVar = "inner if";
    } else {
      enclosedVar = "else if";
    }
  } else {
    enclosedVar = "outer else if";
  }
  return enclosedVar;
});

```


