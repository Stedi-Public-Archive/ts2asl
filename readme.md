# TS to ASL

Converts typescript code to Amazon State Language. This allows for local development/debugging/testing and deployment as an AWS Step Function.


## ASL Lib

Not all ASL constructs can be easily represented in Typescript. A Retry block with specified back-off rate is something that does not exists in Typescript natively. The ASL Lib bridges this gap by providing a Typescript library. The Typescript library can be used for local debugging and testing of the program and can be 1:1 converted to AWS ASL.

ASL Lib code:

``` typescript
ASL.Wait({ Seconds: 2 });
ASL.Task({
  Resource: "arn:aws:123123123:lambda:function:my-func",
  Retry: [{
    ErrorEquals: ["States.Timeout"],
    IntervalSeconds: 3,
    MaxAttempts: 2,
    BackoffRate: 1.5
  }]
});
```

ASL Lib code can be mixed with Typescript code:

``` typescript
if (pwd !== "password" ) {
  throw new Error("wrong password")
} else {
  ASL.Wait({ Seconds: 2 });
  performWork();
}

```

The above will be converted to ASL Lib code prior to being deployed to ASL

``` typescript
ASL.Choice({
  Choices: [{
    Variable: "$.password",
    Not: { StringEquals: "pwd" },
    NextInvoke: () => { 
      ASL.Failed({ Error: 'Error', Cause: 'wrong password'  });
  }]
  DefaultInvoke: () => {
    ASL.Wait({ Seconds: 2 });
    ASL.Invoke({ Resource: performWork });
  }
});

```

## Typescript language support

These language constructs translate the ASL Lib code and are implemented as AST transformations. The source code for these transformations can be found in the [./lang-support](./lang-support) folder.

The typescript language constructs that are supported are listed below:

###  Variable Assignment

``` typescript
let abc = 'hello';
let abc = 43;
let abc = { number: 43; text: 'hello' };
```

<details>
  <summary>ASL Lib Typescript code</summary>

``` typescript
let abc = ASL.Pass({ Result: 'hello' });
let abc = ASL.Pass({ Result: 43 });
let abc = ASL.Pass({ Result: { number: 43, text: 'hello' } });
```

</details>

<details>
  <summary>ASL output</summary>

``` json
    {
      "StartAt": "Assign_abc",
      "States": {
        "Assign_abc": { "Type": "Pass",  "ResultPath": "$.abc", "Result": "hello" },
        "Assign_abc_1": { "Type": "Pass",  "ResultPath": "$.abc", "Result": 43 },
        "Assign_abc_2": { "Type": "Pass", "ResultPath": "$.abc", 
          "Result": {
            "number": 43,
            "text": "hello"
          }
        }
      }
    }
```

</details>
current limitations:

- only literals can be used, e.g. references to other variables are not supported
&nbsp;
&nbsp;

### Throw Statement

``` typescript
throw new Error();
throw new Error("bad luck");
throw new SpecialError("bad luck");
```

<details>
  <summary>ASL Lib Typescript code</summary>

``` typescript
ASL.Failed({ Error: 'Error' })
ASL.Failed({ Error: 'Error', Cause: 'bad luck' })
ASL.Failed({ Error: 'SpecialError', Cause: 'bad luck' })
```

</details>
<details>
  <summary>ASL output</summary>

``` json
 {
    "StartAt": "Failed",
    "States": {
      "Failed": { "Type": "Failed", "Error": "Error" },
      "Failed_1": { "Type": "Failed", "Error": "Error", "Cause": "bad luck" },
      "Failed_2": { "Type": "Failed", "Error": "SpecialError", "Cause": "bad luck" }
    }
  }
```

</details>
&nbsp;
&nbsp;

### If Statement

```typescript
if (password !== 'pwd') throw new Error('wrong password');
if (age < 18) throw new Error('minor') else proceed();
```

<details>
  <summary>ASL Lib Typescript code</summary>

``` typescript
ASL.Choice({
  Choices: [{
      Variable: "$.password",
      Not: { StringEquals: "pwd" },
      NextInvoke: () => { ASL.Failed({ Error: 'Error', Cause: 'wrong password' }) }
    }]
});

ASL.Choice({
  Choices: [{
      Variable: "$.age",
      NumericLessThan: "18",
      NextInvoke: () => { ASL.Failed({ Error: 'Error', Cause: 'minor' }) }
  }],
  DefaultInvoke: () => { 
    ASL.Task({ TypescriptInvoke: proceed }); 
  }
});
```

</details>
<details>
  <summary>ASL output</summary>

``` json
 {
  "StartAt": "Choice",
  "States": {
    "Choice": {
      "Type": "Choice",
      "Choices": [
        {
          "Variable": "$.password",
          "Not": { "StringEquals": "pwd" },
          "Next": "Failed"
        }
      ]
    },
    "Failed": {
      "Type": "Failed",
      "Error": "Error",
      "Cause": "wrong password",
    },
    "Choice_1": {
      "Type": "Choice",
      "Choices": [
        {
          "Variable": "$.age",
          "NumericLessThan": "18",
          "Next": "Failed_1"
        }
      ],
      "Default": "Task",
    },
    "Failed_1": {
      "Type": "Failed",
      "Error": "Error",
      "Cause": "minor",
    },
    "Task": {
      "Resource": "typescript:proceed",
      "Type": "Task",
    }
  }
}
```

</details>
current limitations:

- else is not supported
- complex boolean expressions are not supported

&nbsp;
&nbsp;

### Switch Statement

``` typescript
switch (color) {
  case "red":
    doRed();
    break;

  default:
    somethingElse();
    break;
}
```

<details>
  <summary>ASL Lib Typescript code</summary>

``` typescript
ASL.Choice({ 
  Choices: [{ 
    Variable: "$.color", 
    StringEquals: "red", 
    NextInvoke: () => {
      ASL.Task({ TypescriptInvoke: doRed });
    } 
  }], 
  DefaultInvoke: () => {
    ASL.Task({ TypescriptInvoke: somethingElse });
  } 
});
"
```

</details>
<details>
  <summary>ASL output</summary>

``` json
{
  "StartAt": "Choice",
  "States": {
    "Choice": {
      "Type": "Choice",
      "Choices": [
        {
          "Variable": "$.color",
          "StringEquals": "red",
          "Next": "Task"
        }
      ],
      "Default": "Task_1"
    },
    "Task_1": {
      "Type": "Task",
      "Resource": "typescript:somethingElse"
    },
    "Task": {
      "Type": "Task",
      "Resource": "typescript:doRed"
    }
  }
}
```

</details>
&nbsp;
&nbsp;

### Call Statement

``` typescript
sayHello(arg);
await sayHello();
const z = await sayHello();
```

<details>
  <summary>ASL Lib Typescript code</summary>

``` typescript
ASL.Task({
  TypescriptInvoke: sayHello,
  InputPath: \\"$.arg\\"
});
await ASL.Task({
  TypescriptInvoke: sayHello
});
const z = await ASL.Task({
  TypescriptInvoke: sayHello
});
```

</details>
<details>
  <summary>ASL output</summary>

``` json
{
  "StartAt": "Task",
  "States": {
    "Task": {
      "Type": "Task",
      "Resource": "typescript:sayHello",
      "InputPath": "$.arg"
    },
    "Task_1": {
      "Type": "Task",
      "Resource": "typescript:sayHello"
    },
    "Assign_z": {
      "Type": "Task",
      "Resource": "typescript:sayHello",
      "ResultPath": "$.z"
    }
  }
}
```

</details>
&nbsp;
&nbsp;

### Promise.all Statement

```typescript
await Promise.all([
  () => { spinLeft(); },
  () => { spinRight(); }
]);
```

<details>
  <summary>ASL Lib Typescript code</summary>

``` typescript
await ASL.Parallel({
  Branches: [{
    BlockInvoke: () => { 
      ASL.Task({ TypescriptInvoke: spinLeft }); }
    }, {
    BlockInvoke: () => { 
        ASL.Task({ TypescriptInvoke: spinRight }); }
    }]
});
```

</details>
<details>
  <summary>ASL output</summary>

``` json
 {
  "StartAt": "Parallel",
  "States": {
    "Parallel": {
      "Type": "Parallel",
      "Branches": [
        {
          "StartAt": "Task",
          "States": {
            "Task": {
              "Type": "Task",
              "Resource": "typescript:spinLeft"
            }
          }
        },
        {
          "StartAt": "Task",
          "States": {
            "Task": {
              "Type": "Task",
              "Resource": "typescript:spinRight"
            }
          }
        }
      ]
    }
  }
}
```

</details>
&nbsp;
&nbsp;

### Try Statement

```typescript
try { doWork(); } catch { revert(); }
```


<details>
  <summary>ASL Lib Typescript code</summary>

``` typescript
ASL.Parallel({
  Branches: [{
    BlockInvoke: () => { 
      ASL.Task({ TypescriptInvoke: doWork }); 
    }
  }],
  Catch: [{
    ErrorEquals: ["States.All"],
    NextInvoke: () => { ASL.Task({
        TypescriptInvoke: revert
    }); 
  }
  }]
});
```

</details>
<details>
  <summary>ASL output</summary>

``` json
 {
  "StartAt": "Parallel",
  "States": {
    "Parallel": {
      "Type": "Parallel",
      "Branches": [
        {
          "StartAt": "Task",
          "States": {
            "Task": {
              "Type": "Task",
              "Resource": "typescript:doWork"
            }
          }
        }
      ],
      "Catch": [
        {
          "ErrorEquals": ["States.All"],
          "Next": "Task"
        }
      ]
    },
    "Task": {
      "Type": "Task",
      "Resource": "typescript:revert"
    }
  }
}
```

</details>
&nbsp;
&nbsp;

### Return Statement

```typescript
return;
```

<details>
  <summary>ASL Lib Typescript code</summary>

``` typescript
ASL.Succeed();
```

</details>
<details>
  <summary>ASL output</summary>

``` json
 {
  "StartAt": "Succeed",
  "States": {
    "Succeed": {
      "Type": "Succeed"
    }
  }
}
```
<detail>