# Typescript 2 ASL Transpiler

Typescript 2 ASL allows developers to define their AWS Step Functions using the Typescript programming language. Using Typescript allows developers to benefit from: a familiar syntax, type safety and mature ecosystem of tools for linting, editing and automated testing.

The following program can be executed and tested locally. When deployed to your AWS Cloud this program will execute using as a Step Function State Machine. How the Typescript code gets converted to ASL can be seen in the [interactive playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCi8vbWFpbiB3aWxsIGJlIGNvbnZlcnRlZCB0byBBU0wgYW5kIGRlcGxveWVkIGFzIGEgc3RhdGUgbWFjaGluZQpleHBvcnQgY29uc3QgbWFpbiA9IGFzbC5kZXBsb3kuYXNTdGF0ZU1hY2hpbmUoYXN5bmMgKGlucHV0OiBJSW5wdXQpID0+IHsKICBpZiAodHlwZW9mIGlucHV0Lm5hbWUgIT09ICJzdHJpbmciKSB7CiAgICBpbnB1dC5uYW1lID0gIldvcmxkIjsKICB9CiAgY29uc3Qgcm5kID0gYXdhaXQgcmFuZG9tKCk7CiAgcmV0dXJuIHsKICAgIGdyZWV0aW5nOiBgSGVsbG8gJHtpbnB1dC5uYW1lfWAsCiAgICBsdWNreU51bWJlcjogcm5kCiAgfQp9KTsKCi8vcmFuZG9tIHdpbGwgYmUgZGVwbG95ZWQgYXMgYSBsYW1iZGEgZnVuY3Rpb24KZXhwb3J0IGNvbnN0IHJhbmRvbSA9IGFzbC5kZXBsb3kuYXNMYW1iZGEoYXN5bmMgKGlucHV0OiB7IG1pbj86IG51bWJlcjsgbWF4PzogbnVtYmVyIH0gPSB7fSkgPT4gewogIGNvbnN0IG1pbiA9IGlucHV0Lm1pbiA/PyAwOwogIGNvbnN0IG1heCA9IGlucHV0Lm1heCA/PyAxMDA7CiAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTsKfSk7CgppbnRlcmZhY2UgSUlucHV0IHsKICBuYW1lOiBzdHJpbmc7Cn0K).
``` typescript
import * as asl from "@ts2asl/asl-lib"

//main will be converted to ASL and deployed as a state machine
export const main = asl.deploy.asStateMachine(async (input: IInput) => {
  if (typeof input.name !== "string") {
    input.name = "World";
  }
  const rnd = await random();
  return {
    greeting: `Hello ${input.name}`,
    luckyNumber: rnd
  }
});

//random will be deployed as a lambda function
export const random = asl.deploy.asLambda(async (input: { min?: number; max?: number } = {}) => {
  const min = input.min ?? 0;
  const max = input.max ?? 100;
  return Math.round(Math.random() * (max - min) + min);
});

interface IInput {
  name: string;
}

```

## Deployment using the CDK
Typescript 2 ASL features a CDK construct that allows developers to integrate the Typescript to ASL conversion process into existing CI/CD pipelines. An example stack can be found in [this repository](cdk-example/lib/cdk-example-stack.ts).

``` typescript
import * as ts2asl from '@ts2asl/cdk-typescript-statemachine';

new ts2asl.TypescriptStateMachine(this, "TypescriptStateMachine", {
  programName: "hello-world",
  defaultFunctionProps: {},
  defaultStepFunctionProps: {
    stateMachineType: "EXPRESS",
    roleArn: executionRole.roleArn
  },
  sourceFile: "./src/program.ts",
});
```

## Typescript language support
The following Typescript langauge features are supported:
* [variable assingments](./examples/variable-assignments.md)
* [throwing errors](./examples/throw.md)
* [input validation](./examples/input-validation.md)
* [enclosed variables](./examples/closures.md)
* [if statements](./examples/if.md)
* [for ... of statements](./examples/for-each.md)
* [do while statements](./examples/do-while.md)
* [switch statements](./examples/switch.md)
* [try/catch/finally statements](./examples/try-catch.md)
* [boolean evaluation logic](./examples/boolean-evalation.md)
* [promise.all](./examples/parallel.md)
* [array.map](./examples/arrays.md)
* [array.filter](./examples/arrays.md)
* console.log
* [evaluation of literal expressions](./examples/expressions.md)
* [string templates](./examples/string-templates.md)

Additionally there is typescript library support for
* ASL States (Pass, Wait, Choice, Parallel, Map, etc.)
* SDK Integrations 
