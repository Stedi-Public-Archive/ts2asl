import { createChoiceOperator } from "../choice-utility";
import * as iasl from "../../convert-asllib-to-iasl/ast";
import {
  IdentifierFactory,
  LiteralFactory
} from "../../convert-asllib-to-iasl/iaslfactory";

describe("when transpiling simple statements", () => {
  it("then current type operand is used", () => {
    const binaryExpression = {
      lhs: IdentifierFactory.create({
        identifier: "something",
        type: "numeric"
      }),
      operator: "eq",
      rhs: LiteralFactory.createFromRuntime(23),
      _syntaxKind: iasl.SyntaxKind.BinaryExpression
    } as iasl.BinaryExpression;

    const result = createChoiceOperator(binaryExpression, {}, {} as any);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "NumericEquals": 23,
        "Variable": "$.vars.something",
      }
    `);
  });

  it("then not is-truthy is optimized to is-preset: false", () => {
    const binaryExpression = {
      operator: "not",
      rhs: {
        operator: "is-truthy",
        rhs: IdentifierFactory.create({
          identifier: "something",
          type: "numeric"
        }),
        _syntaxKind: iasl.SyntaxKind.BinaryExpression
      } as iasl.BinaryExpression,
      _syntaxKind: iasl.SyntaxKind.BinaryExpression
    } as iasl.BinaryExpression;

    const result = createChoiceOperator(binaryExpression, {}, {} as any);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "Or": Array [
          Object {
            "IsPresent": false,
            "Variable": "$.vars.something",
          },
          Object {
            "IsNull": true,
            "Variable": "$.vars.something",
          },
          Object {
            "NumericEquals": 0,
            "Variable": "$.vars.something",
          },
        ],
      }
    `);
  });
});

it("then not typeof is optimized to typeof: false", () => {
  const binaryExpression = {
    operator: "not",
    rhs: {
      lhs: {
        operand: IdentifierFactory.create({
          identifier: "number",
          type: "unknown"
        }),
        _syntaxKind: iasl.SyntaxKind.TypeOfExpression
      } as iasl.TypeOfExpression,
      operator: "eq",
      rhs: LiteralFactory.createFromRuntime("number"),
      _syntaxKind: iasl.SyntaxKind.BinaryExpression
    } as iasl.BinaryExpression,
    _syntaxKind: iasl.SyntaxKind.BinaryExpression
  } as iasl.BinaryExpression;

  const result = createChoiceOperator(binaryExpression, {}, {} as any);
  expect(result).toMatchInlineSnapshot(`
    Object {
      "Not": Object {
        "And": Array [
          Object {
            "IsPresent": true,
            "Variable": "$.vars.number",
          },
          Object {
            "IsNumeric": true,
            "Variable": "$.vars.number",
          },
        ],
      },
    }
  `);
});

describe("when transpiling complex statements", () => {
  it("then assignment ends up in result path", () => {
    const binaryExpression = {
      lhs: {
        lhs: {
          lhs: {
            lhs: {
              lhs: {
                identifier: "item.sk.S",
                _syntaxKind: "identifier"
              },
              operator: "eq",
              rhs: {
                identifier: "threshold.metric",
                _syntaxKind: "identifier"
              },
              _syntaxKind: "binary-expression"
            },
            operator: "and",
            rhs: {
              lhs: {
                identifier: "threshold.ceiling",
                _syntaxKind: "identifier"
              },
              operator: "lte",
              rhs: {
                identifier: "numericTotal",
                _syntaxKind: "identifier"
              },
              _syntaxKind: "binary-expression"
            },
            _syntaxKind: "binary-expression"
          },
          operator: "and",
          rhs: {
            lhs: {
              identifier: "threshold.ceiling",
              _syntaxKind: "identifier"
            },
            operator: "gt",
            rhs: {
              identifier: "numericLastSentOnValue",
              _syntaxKind: "identifier"
            },
            _syntaxKind: "binary-expression"
          },
          _syntaxKind: "binary-expression"
        },
        operator: "and",
        rhs: {
          lhs: {
            operator: "not",
            rhs: {
              operator: "is-truthy",
              rhs: {
                identifier: "item.lastBeginDateValue.S",
                _syntaxKind: "identifier"
              },
              _syntaxKind: "binary-expression"
            },
            _syntaxKind: "binary-expression"
          },
          operator: "or",
          rhs: {
            lhs: {
              identifier: "item.beginDate.S",
              _syntaxKind: "identifier"
            },
            operator: "eq",
            rhs: {
              identifier: "item.lastBeginDateValue.S",
              _syntaxKind: "identifier"
            },
            _syntaxKind: "binary-expression"
          },
          _syntaxKind: "binary-expression"
        },
        _syntaxKind: "binary-expression"
      },
      operator: "or",
      rhs: {
        lhs: {
          lhs: {
            lhs: {
              identifier: "item.sk.S",
              _syntaxKind: "identifier"
            },
            operator: "eq",
            rhs: {
              identifier: "threshold.metric",
              _syntaxKind: "identifier"
            },
            _syntaxKind: "binary-expression"
          },
          operator: "and",
          rhs: {
            lhs: {
              identifier: "threshold.ceiling",
              _syntaxKind: "identifier"
            },
            operator: "lte",
            rhs: {
              identifier: "numericTotal",
              _syntaxKind: "identifier"
            },
            _syntaxKind: "binary-expression"
          },
          _syntaxKind: "binary-expression"
        },
        operator: "and",
        rhs: {
          lhs: {
            operator: "not",
            rhs: {
              operator: "is-truthy",
              rhs: {
                identifier: "item.lastBeginDateValue.S",
                _syntaxKind: "identifier"
              },
              _syntaxKind: "binary-expression"
            },
            _syntaxKind: "binary-expression"
          },
          operator: "or",
          rhs: {
            lhs: {
              identifier: "item.beginDate.S",
              _syntaxKind: "identifier"
            },
            operator: "eq",
            rhs: {
              identifier: "item.lastBeginDateValue.S",
              _syntaxKind: "identifier"
            },
            _syntaxKind: "binary-expression"
          },
          _syntaxKind: "binary-expression"
        },
        _syntaxKind: "binary-expression"
      },
      _syntaxKind: "binary-expression"
    } as iasl.BinaryExpression;

    const result = createChoiceOperator(binaryExpression, {}, {} as any);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "Or": Array [
          Object {
            "And": Array [
              Object {
                "And": Array [
                  Object {
                    "And": Array [
                      Object {
                        "StringEqualsPath": "$.vars.threshold.metric",
                        "Variable": "$.vars.item.sk.S",
                      },
                      Object {
                        "StringLessThanEqualsPath": "$.vars.numericTotal",
                        "Variable": "$.vars.threshold.ceiling",
                      },
                    ],
                  },
                  Object {
                    "StringGreaterThanPath": "$.vars.numericLastSentOnValue",
                    "Variable": "$.vars.threshold.ceiling",
                  },
                ],
              },
              Object {
                "Or": Array [
                  Object {
                    "IsPresent": false,
                    "Variable": "$.vars.item.lastBeginDateValue.S",
                  },
                  Object {
                    "IsNull": true,
                    "Variable": "$.vars.item.lastBeginDateValue.S",
                  },
                  Object {
                    "BooleanEquals": false,
                    "Variable": "$.vars.item.lastBeginDateValue.S",
                  },
                  Object {
                    "StringEquals": "",
                    "Variable": "$.vars.item.lastBeginDateValue.S",
                  },
                  Object {
                    "StringEquals": "false",
                    "Variable": "$.vars.item.lastBeginDateValue.S",
                  },
                  Object {
                    "StringEquals": "0",
                    "Variable": "$.vars.item.lastBeginDateValue.S",
                  },
                  Object {
                    "NumericEquals": 0,
                    "Variable": "$.vars.item.lastBeginDateValue.S",
                  },
                  Object {
                    "StringEqualsPath": "$.vars.item.lastBeginDateValue.S",
                    "Variable": "$.vars.item.beginDate.S",
                  },
                ],
              },
            ],
          },
          Object {
            "And": Array [
              Object {
                "And": Array [
                  Object {
                    "StringEqualsPath": "$.vars.threshold.metric",
                    "Variable": "$.vars.item.sk.S",
                  },
                  Object {
                    "StringLessThanEqualsPath": "$.vars.numericTotal",
                    "Variable": "$.vars.threshold.ceiling",
                  },
                ],
              },
              Object {
                "Or": Array [
                  Object {
                    "IsPresent": false,
                    "Variable": "$.vars.item.lastBeginDateValue.S",
                  },
                  Object {
                    "IsNull": true,
                    "Variable": "$.vars.item.lastBeginDateValue.S",
                  },
                  Object {
                    "BooleanEquals": false,
                    "Variable": "$.vars.item.lastBeginDateValue.S",
                  },
                  Object {
                    "StringEquals": "",
                    "Variable": "$.vars.item.lastBeginDateValue.S",
                  },
                  Object {
                    "StringEquals": "false",
                    "Variable": "$.vars.item.lastBeginDateValue.S",
                  },
                  Object {
                    "StringEquals": "0",
                    "Variable": "$.vars.item.lastBeginDateValue.S",
                  },
                  Object {
                    "NumericEquals": 0,
                    "Variable": "$.vars.item.lastBeginDateValue.S",
                  },
                  Object {
                    "StringEqualsPath": "$.vars.item.lastBeginDateValue.S",
                    "Variable": "$.vars.item.beginDate.S",
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
