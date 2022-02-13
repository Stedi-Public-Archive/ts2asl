import { testConvertToIntermediaryAst } from "./test-convert";

describe("when converting typescript invoke to iasl", () => {
  it("then native integrations get converted to task states", () => {
    const code = `
    import * as asl from 'asl-lib';
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:batchGetItem'*/
    asl.typescriptInvoke({
      target: SayHello,
      parameters: () => arg.xxx,
      comment: "SayHello(arg.xxx)"
  });`;
    const result = testConvertToIntermediaryAst(code);
    expect(result).toMatchInlineSnapshot(`
      Array [
        Object {
          "_syntaxKind": "asl-task-state",
          "parameters": Object {
            "_syntaxKind": "identifier",
            "identifier": "arg.xxx",
            "type": "unknown",
          },
          "resource": "arn:aws:lambda:us-east-1:123123123123:function:my-program-SayHello",
          "source": "SayHello(arg.xxx)",
        },
      ]
    `);
  });
});
