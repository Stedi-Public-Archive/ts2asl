
## just if
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBsZXQgdmFsID0geyBhOiAiIiwgYjogIiIsIGM6ICIiLCBkOiAiIiwgZTogIiIsIGY6ICIiLCBnOiAiIiB9OwogIHZhbC5hID0gImJlZm9yZSI7CiAgaWYgKHRydWUpIHsKICAgIHZhbC5iID0gInRydWVfMSI7CiAgICB2YWwuYyA9ICJ0cnVlXzIiOwogIH0KICB2YWwuZCA9ICJhZnRlciI7CiAgcmV0dXJuIHZhbDsKfSk7)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
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
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBsZXQgdmFsID0geyBhOiAiIiwgYjogIiIsIGM6ICIiLCBkOiAiIiwgZTogIiIsIGY6ICIiLCBnOiAiIiB9OwogIHZhbC5hID0gImJlZm9yZSI7CiAgaWYgKHRydWUpIHsKICAgIHZhbC5iID0gInRydWVfMSI7CiAgICB2YWwuYyA9ICJ0cnVlXzIiOwogIH0gZWxzZSB7CiAgICB2YWwuYiA9ICJmYWxzZV8xIjsKICAgIHZhbC5jID0gImZhbHNlXzIiOwogIH0KICB2YWwuZCA9ICJhZnRlciI7CiAgcmV0dXJuIHZhbDsKfSk7)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
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
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBsZXQgdmFsID0geyBhOiAiIiwgYjogIiIsIGM6ICIiLCBkOiAiIiwgZTogIiIsIGY6ICIiLCBnOiAiIiB9OwogIHZhbC5hID0gImJlZm9yZSI7CiAgaWYgKHRydWUpIHsKICAgIHZhbC5iID0gIm91dGVyXzEiOwogICAgdmFsLmMgPSAib3V0ZXJfMiI7CiAgICBpZiAodHJ1ZSkgewogICAgICB2YWwuZCA9ICJpbm5lcl8xIjsKICAgICAgdmFsLmUgPSAiaW5uZXJfMiI7CiAgICB9IGVsc2UgewogICAgICB2YWwuZSA9ICJpbm5lcl9lbHNlXzIiOwogICAgfQogIH0gZWxzZSB7CiAgICB2YWwuZiA9ICJvdXRlcl9lbHNlXzIiOwogIH0KICB2YWwuZyA9ICJhZnRlciI7CiAgcmV0dXJuIHZhbDsKfSk7)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
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
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBsZXQgZW5jbG9zZWRWYXIgPSAiYmVmb3JlIjsKICBpZiAodHJ1ZSkgewogICAgZW5jbG9zZWRWYXIgPSAib3V0ZXIgaWYiOwogICAgaWYgKHRydWUpIHsKICAgICAgZW5jbG9zZWRWYXIgPSAiaW5uZXIgaWYiOwogICAgfSBlbHNlIHsKICAgICAgZW5jbG9zZWRWYXIgPSAiZWxzZSBpZiI7CiAgICB9CiAgfSBlbHNlIHsKICAgIGVuY2xvc2VkVmFyID0gIm91dGVyIGVsc2UgaWYiOwogIH0KICByZXR1cm4gZW5jbG9zZWRWYXI7Cn0pOw==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
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


