# ts2asl: A TypeScript to Amazon States Language ([ASL]) transpiler

⚠️ **All internal and external interfaces are considered unstable and subject to change without notice.** ⚠️

`ts2asl` allows developers to define [AWS Step Functions](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html) using the TypeScript programming language. It allows developers to benefit from a familiar syntax, type safety, and mature ecosystem of tools for linting, editing, and automated testing.

## Example

The following code example can be **executed and tested locally**. The output is ASL, which can be deployed to your AWS account to create a [Standard or Express](https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html#welcome-workflows) Step Function. 

You can also explore the TypeScript code and the corresponding ASL it generates in the [interactive playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCi8vbWFpbiB3aWxsIGJlIGNvbnZlcnRlZCB0byBBU0wgYW5kIGRlcGxveWVkIGFzIGEgc3RhdGUgbWFjaGluZQpleHBvcnQgY29uc3QgbWFpbiA9IGFzbC5kZXBsb3kuYXNTdGF0ZU1hY2hpbmUoYXN5bmMgKGlucHV0OiBJSW5wdXQpID0+IHsKICBpZiAodHlwZW9mIGlucHV0Lm5hbWUgIT09ICJzdHJpbmciKSB7CiAgICBpbnB1dC5uYW1lID0gIldvcmxkIjsKICB9CiAgY29uc3Qgcm5kID0gYXdhaXQgcmFuZG9tKCk7CiAgcmV0dXJuIHsKICAgIGdyZWV0aW5nOiBgSGVsbG8gJHtpbnB1dC5uYW1lfWAsCiAgICBsdWNreU51bWJlcjogcm5kCiAgfQp9KTsKCi8vcmFuZG9tIHdpbGwgYmUgZGVwbG95ZWQgYXMgYSBsYW1iZGEgZnVuY3Rpb24KZXhwb3J0IGNvbnN0IHJhbmRvbSA9IGFzbC5kZXBsb3kuYXNMYW1iZGEoYXN5bmMgKGlucHV0OiB7IG1pbj86IG51bWJlcjsgbWF4PzogbnVtYmVyIH0gPSB7fSkgPT4gewogIGNvbnN0IG1pbiA9IGlucHV0Lm1pbiA/PyAwOwogIGNvbnN0IG1heCA9IGlucHV0Lm1heCA/PyAxMDA7CiAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTsKfSk7CgppbnRlcmZhY2UgSUlucHV0IHsKICBuYW1lOiBzdHJpbmc7Cn0K).
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

## TypeScript language support
`ts2asl` converts native TypeScript code to ASL. The following TypeScript langauge features are supported:
* [variable assignments](./examples/variable-assignments.md)
* [throwing errors](./examples/throw.md)
* [input validation](./examples/input-validation.md)
* [enclosed variables](./examples/closures.md)
* [enum literals](./examples/enums.md)
* [in keyword](./examples/in-keyword.md)
* [conditional expression](./examples/conditional-expression.md)
* [optional property chaining](./examples/optional-property-chain.md)
* [null coalescing](./examples/null-coalescing.md)
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
* [state machines invoking state machines](./examples/nested-stepfunctions.md)

## ASL TypeScript library runtime support
`ts2asl` is integrated with the `@ts2asl/asl-lib` module. This module can be used to integrate ASL features such as states and JsonPath with native TypeScript.

* [ASL States](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-states.html) (Pass, Wait, Choice, Parallel, Map, etc.)
* tasks with sync invocations, [waitForTaskToken](./examples/states.md#wait-for-task-token)
* [typesafe SDK Integrations](./examples/sdk-states.md)
* [intrinsic functions](./examples/variable-assignments.md#functions)
* [type conversions](./examples/ts-lib-convert.md)
* [jsonPath expressions](./examples/arrays.md#json-path-expressions)
* deploytime configuration & integration with CDK

`asl-lib` implements the same behavior as AWS Step Functions, so you can execute your TypeScript code locally (using `ts-node`) or write unit tests (using `ts-jest`) without having to deploy anything to AWS.

## Differences between TypeScript and ASL
There are some differences between TypeScript and ASL that a compiler won't be able to solve (fully):
-  object references in TypeScript are passed **by reference**; object references in ASL references are passed **by value**.  

## Deployment using the AWS Cloud Development Kit ([CDK])
`ts2asl` features a CDK Construct that allows developers to integrate the TypeScript -> ASL conversion process into existing CI/CD pipelines. An example stack can be found in [this repository](cdk-example/lib/cdk-example-stack.ts).

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

## Using the CLI
`ts2asl` also features a CLI that can be used to transpile TypeScript code to ASL.

use the following example to get started:
``` bash
echo "import * as asl from '@ts2asl/asl-lib'

export const main = asl.deploy.asStateMachine(async (input: unknown) => {
  console.log(input);
  return 'hello world'
});" > test.ts

npx ts2asl compile test.ts
```

## Useful patterns & examples
- [example project](./cdk-v2-example/) containing a [simple program](./cdk-v2-example/src/program.ts), [CDK for deployment](./cdk-v2-example/lib/cdk-v2-example-stack.ts) and [Jest for testing](./cdk-v2-example/test/cdk-v2-example.test.ts)
- waiting for completion of SDK state: [organizations.createAccount](./examples/switch.md#create-aws-account).
- pagination over list: [iam.listUsers](./examples/pagination.md#list-users).
<!-- 
- Using sdk integrations to page over data in DynamoDB
- Using a Lambda to page over data (in memory)
- Writing data to DynamoDB ensuring it will not overwrite existing data 
-->

[ASL]: https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html
[CDK]: https://docs.aws.amazon.com/cdk/v2/guide/home.html
