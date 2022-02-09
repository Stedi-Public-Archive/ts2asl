import { testConvertToIntermediaryAst } from "./test-convert";

describe("when converting typescript invoke to iasl", () => {
  it("then native integrations get converted to task states", () => {
    const code = `
    import * as asl from 'asl-lib';
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
          "comment": "SayHello(arg.xxx)",
          "parameters": Object {
            "_syntaxKind": "identifier",
            "identifier": "arg.xxx",
            "type": "unknown",
          },
          "resource": "typeof:SayHello",
        },
      ]
    `);
  });
});
