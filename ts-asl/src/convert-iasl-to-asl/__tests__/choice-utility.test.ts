import { convertToASl } from "..";
import { createChoiceOperator } from "../choice-utility";
import * as iasl from "../../convert-asllib-to-iasl/ast";

describe("when transpiling simple statements", () => {
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
              operator: "is-present",
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
              operator: "is-present",
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

    const result = createChoiceOperator(binaryExpression);
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
                        "StringEqualsPath": "$.threshold.metric",
                        "Variable": "$.item.sk.S",
                      },
                      Object {
                        "StringLessThanEqualsPath": "$.numericTotal",
                        "Variable": "$.threshold.ceiling",
                      },
                    ],
                  },
                  Object {
                    "StringGreaterThanPath": "$.numericLastSentOnValue",
                    "Variable": "$.threshold.ceiling",
                  },
                ],
              },
              Object {
                "Or": Array [
                  Object {
                    "Not": Object {
                      "IsPresent": true,
                      "Variable": "item.lastBeginDateValue.S",
                    },
                  },
                  Object {
                    "StringEqualsPath": "$.item.lastBeginDateValue.S",
                    "Variable": "$.item.beginDate.S",
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
                    "StringEqualsPath": "$.threshold.metric",
                    "Variable": "$.item.sk.S",
                  },
                  Object {
                    "StringLessThanEqualsPath": "$.numericTotal",
                    "Variable": "$.threshold.ceiling",
                  },
                ],
              },
              Object {
                "Or": Array [
                  Object {
                    "Not": Object {
                      "IsPresent": true,
                      "Variable": "item.lastBeginDateValue.S",
                    },
                  },
                  Object {
                    "StringEqualsPath": "$.item.lastBeginDateValue.S",
                    "Variable": "$.item.beginDate.S",
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
