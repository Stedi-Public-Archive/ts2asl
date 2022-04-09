# Typescript 2 ASL Transpiler

⚠️ notice: this project is a research project, its implementation is still highly experimental and is provided under the MIT opensource license (without any form of warrenty or liability) ⚠️

Typescript 2 ASL allows developers to define their AWS Step Functions using the Typescript programming language. Using Typescript allows developers to benefit from: a familiar syntax, type safety and mature ecosystem of tools for linting, editing and automated testing.MIT License

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
Typescript 2 ASL converts native typescript code to ASL. The following Typescript langauge features are supported:
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

## ASL Typescript library runtime support
Typescript 2 ASL is integrated with the `@ts2asl/asl-lib` module. This module can be used to integrate ASL features such as states and JsonPath with native typescript.

* ASL States (Pass, Wait, Choice, Parallel, Map, etc.)
* tasks with sync invocations, [waitForTaskToken](./examples/states.md#wait-for-task-token)
* [typesafe SDK Integrations](./examples/sdk-states.md)
* [intrinsic functions](./examples/variable-assignments.md#functions)
* [type conversions](./examples/ts-lib-convert.md)
* [jsonPath expressions](./examples/arrays.md#json-path-expressions)
* deploytime configuration & integration with CDK

As asl-lib implements the same behavior as AWS Step Functions would, it is possible to take a program and execute it locally (using `ts-node`) or write unit tests against that execute using `ts-jest` within having to deploy anything to AWS.

## Differences between Typescript and ASL
There are some differences between Typescript and ASL that a compiler wont be able to solve (fully):
-  object references in typescript are passed **by reference**, object references in asl references are passed **by value**.  

## Uefull patterns & examples
- [example project](./cdk-example/) containing a [simple program](./cdk-example/src/program.ts), [CDK for deployment](./cdk-example/lib/cdk-example-stack.ts) and [Jest for testing](./cdk-example/test/program.test.ts)
- Waiting for completion of SDK state, example: [organizations.createAccount](./examples/switch.md#create-aws-account).
<!-- 
- Using sdk integrations to page over data in DanamoDB
- Using a lambda to page over data (in memory)
- Writing data to DynamoDB ensuring it will not overwrite existing data 
-->
