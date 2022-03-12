import { testConvertToIntermediaryAst } from "./test-convert";

describe("when converting choice statement to iasl", () => {
  it("then native integrations get converted to map states", () => {
    const code = `
    import * as asl from 'asl-lib';

    await asl.parallel({
      branches: [
          () => { return; },
          () => { asl.fail() }
      ],
  });`;
    const result = testConvertToIntermediaryAst(code);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "_syntaxKind": "statemachine",
        "contextArgumentName": undefined,
        "inputArgumentName": undefined,
        "statements": Array [
          Object {
            "_syntaxKind": "asl-parallel-state",
            "branches": Array [
              Object {
                "_syntaxKind": "function",
                "statements": Array [
                  Object {
                    "_syntaxKind": "return",
                    "stateName": "Return undefined",
                  },
                ],
              },
              Object {
                "_syntaxKind": "function",
                "statements": Array [
                  Object {
                    "_syntaxKind": "asl-fail-state",
                  },
                ],
              },
            ],
          },
        ],
      }
    `);
  });
});
