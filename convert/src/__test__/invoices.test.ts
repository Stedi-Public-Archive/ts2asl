import { runConvertForTest } from "./utility";

describe("when converting closures", () => {
  let converted;

  beforeAll(() => {
    converted = runConvertForTest("invoices");
  });

  it("then can be converted to asllib", async () => {
    expect(converted.transformedCode).toMatchInlineSnapshot(`
      "import * as asl from \\"@ts2asl/asl-lib\\";
      const createBillJobHandler = (input: EventInput) => { return {} as unknown as BillJobPayload };
      const createNonEmptyBillsHandler = (input: BillJobPayload) => { return {} as unknown as NonEmptyBillsPayload };
      const ApproveNonEmptyBillHandler = (input: ApproveNonEmptyBillEvent) => { return {} as unknown as ApproveNonEmptyBillPayload };
      const CreateInvoiceHandler = (input: Omit<CreateInvoiceEvent, \\"invoiceId\\">) => { return input as unknown as CreateInvoiceEvent };
      const ValidateInvoiceHandler = (input: Omit<ValidateInvoiceEvent, \\"valid\\" | \\"billable\\" | \\"accountType\\">) => { return input as ValidateInvoiceEvent };
      const CreateGithubIssueHandler = (input: HandleInvalidEvent) => { };
      const FinallizeInvoiceHandler = (input: HandleInvalidEvent) => { };

      export const main = asl.deploy.asStateMachine(
        async (input: EventInput, _context: asl.StateMachineContext<EventInput>) =>{
          const billJob = asl.typescriptInvoke({
              name: \\"13: createBillJob(input)\\",
              resource: createBillJob,
              parameters: () => input,
              comment: \\"createBillJob(input)\\"
          });
          asl.wait({ seconds: 120 });
          let jobResult = asl.typescriptInvoke({
              name: \\"16: createNonEmptyBills(billJob)\\",
              resource: createNonEmptyBills,
              parameters: () => billJob,
              comment: \\"createNonEmptyBills(billJob)\\"
          });
          const billPromises = asl.map({
              name: \\"18: For bill Of jobResult.bil ...\\",
              items: () => jobResult.bills,
              iterator: bill => {
                  const approveNonEmptyBillRequest = asl.pass({
                      name: \\"19: Assign approveNonEmptyBil ...\\",
                      parameters: () => ({ lastDateInBillingPeriod: jobResult.lastDateInBillingPeriod, bill }),
                      comment: \\"approveNonEmptyBillRequest = { lastDateInBillingPeriod: jobResult.lastDateInBillingPeriod, bill }\\"
                  });
                  const approvalResult = asl.typescriptInvoke({
                      name: \\"20: approveNonEmptyBill(appro ...\\",
                      resource: approveNonEmptyBill,
                      parameters: () => approveNonEmptyBillRequest,
                      comment: \\"approveNonEmptyBill(approveNonEmptyBillRequest)\\"
                  });
                  asl.typescriptIf({
                      name: \\"20: If (approvalResult.valid)\\",
                      condition: () => approvalResult.valid,
                      then: async () => {
                          return {
                              valid: approvalResult.valid,
                              billable: approvalResult.billable,
                              billId: approvalResult.billId,
                              accountId: approvalResult.accountId,
                              accountCode: approvalResult.accountCode,
                              accountType: approvalResult.accountType,
                          };
                      },
                      else: async () => {
                          const result = asl.nativeAPIGatewayInvoke({
                              parameters: {
                                  ApiEndpoint: \\"yyyyyyyy\\",
                                  Method: \\"POST\\",
                                  Path: \\"/xxxxxxxx\\",
                                  RequestBody: {
                                      accountName: bill.accountName,
                                      accountId: bill.accountId,
                                      billId: bill.billId,
                                      errors: bill.errors,
                                      stage: bill.stage,
                                  },
                              }
                          });
                          return result;
                      }
                  })
              }
          });
          const bills = asl.pass({
              name: \\"49: Assign bills\\",
              parameters: () => billPromises
          });
          const validBills = asl.jsonPathFilter(bills, (x) => !!x.valid);
          const invoices = asl.map({
              name: \\"52: For x Of validBills.map\\",
              items: () => validBills,
              iterator: x => { asl.typescriptInvoke({
                  name: \\"52: createInvoice(x)\\",
                  resource: createInvoice,
                  parameters: () => x,
                  comment: \\"createInvoice(x)\\"
              }) },
              comment: \\"validBills.map(async x => createInvoice(x))\\"
          });
          const validatedInvoices = asl.map({
              name: \\"53: For x Of invoices.map\\",
              items: () => invoices,
              iterator: x => { asl.typescriptInvoke({
                  name: \\"53: validateInvoice(x)\\",
                  resource: validateInvoice,
                  parameters: () => x,
                  comment: \\"validateInvoice(x)\\"
              }) },
              comment: \\"invoices.map(async x => validateInvoice(x))\\"
          });
          const invalidInvoices = asl.jsonPathFilter(validatedInvoices, (x) => !x.valid);
          asl.typescriptIf({
              name: \\"55: If (invalidInvoices.lengt ...\\",
              condition: () => asl.jsonPathLength(invalidInvoices) > 0,
              then: async () => {
                  asl.typescriptInvoke({
                      name: \\"57: createGithubIssue({ bills ...\\",
                      resource: createGithubIssue,
                      parameters: () => ({ bills: { invalid: invalidInvoices } })
                  });
              }
          })
          const validInvoices = asl.jsonPathFilter(validatedInvoices, (x) => x.valid === true);
          asl.typescriptIf({
              name: \\"60: If (!input.shouldFinalize)\\",
              condition: () => !input.shouldFinalize,
              then: async () => {
                  return;
              },
              comment: \\"if (!input.shouldFinalize) {\\\\n      return;\\\\n    }\\"
          })
          asl.map({
              name: \\"64: For invoice Of validInvoices\\",
              items: () => validInvoices,
              iterator: invoice => {
                  asl.typescriptIf({
                      name: \\"66: If (invoice.billable)\\",
                      condition: () => invoice.billable,
                      then: async () => {
                          asl.typescriptInvoke({
                              name: \\"68: finallizeInvoice(invoice ...\\",
                              resource: finallizeInvoice,
                              parameters: () => invoice
                          });
                      },
                      else: async () => {
                          asl.task({
                              resource: \\"arn::states:::sns:publish.waitForTaskToken\\",
                              parameters: {
                                  TopicArn: \\"BillingManualApproval16216020\\",
                                  Message: {
                                      TaskToken: \\"$$.Task.Token\\",
                                      billId: invoice.billId,
                                      invoiceId: invoice.invoiceId,
                                      stage: \\"olaf\\"
                                  },
                                  Subject: \\"olaf - Billing Approval\\"
                              },
                          });
                      }
                  })
              }
          })
      },
      );

      const createInvoice = asl.deploy.asLambda(CreateInvoiceHandler);
      const validateInvoice = asl.deploy.asLambda(ValidateInvoiceHandler);
      const createGithubIssue = asl.deploy.asLambda(CreateGithubIssueHandler);
      const approveNonEmptyBill = asl.deploy.asLambda(ApproveNonEmptyBillHandler);
      const createNonEmptyBills = asl.deploy.asLambda(createNonEmptyBillsHandler);
      const createBillJob = asl.deploy.asLambda(createBillJobHandler);
      const finallizeInvoice = asl.deploy.asLambda(FinallizeInvoiceHandler);

      interface EventInput {
        lastDateInBillingPeriod?: string;
        shouldFinalize?: boolean;
      }

      export interface BillJobPayload {
        jobId: string;
        lastDateInBillingPeriod: string;
        shouldFinalize: boolean;
      }

      export interface BillInfo {
        billId: string;
        accountCode: string;
        accountId: string;
      }

      export interface NonEmptyBillsPayload extends BillJobPayload {
        bills: BillInfo[];
      }

      export interface ApproveNonEmptyBillEvent {
        bill: BillInfo;
        lastDateInBillingPeriod: string;
      }
      export interface ApproveNonEmptyBillPayload extends BillInfo {
        valid: boolean;
        errors: string[];
        accountName: string;
        stage: string;
        accountType: string;
        billable: boolean;
      }

      export interface CreateInvoiceEvent extends BillInfo {
        invoiceId: string;
      }

      export interface ValidateInvoiceEvent extends CreateInvoiceEvent {
        valid: boolean;
        billable: boolean;
        accountType: string;
      }

      export interface FinalizeInvoiceEvent {
        exists: boolean;
        valid: boolean;
        billId: string;
        invoiceId: string;
        errors: string[];
      }

      export interface InvalidInvoice {
        exists: boolean;
        valid: boolean;
        billable: boolean;
        billId: string;
        invoiceId: string;
        errors: string[];
      }

      export interface HandleInvalidEvent {
        jobId: string;
        lastDateInBillingPeriod: string;
        shouldFinalize: boolean;
        bills: {
          invalid: InvalidInvoice[];
        };
      }
      "
    `);
  });
  it("then can be converted to iasl", async () => {
    expect(converted.iasl).toMatchInlineSnapshot(`
      Object {
        "_syntaxKind": "statemachine",
        "contextArgumentName": Object {
          "_syntaxKind": "identifier",
          "identifier": "_context",
        },
        "inputArgumentName": Object {
          "_syntaxKind": "identifier",
          "identifier": "input",
        },
        "statements": Array [
          Object {
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "asl-task-state",
              "catch": Array [],
              "parameters": Object {
                "_syntaxKind": "identifier",
                "identifier": "input",
                "type": "object",
              },
              "resource": "typescript:createBillJob",
              "retry": Array [],
              "source": "createBillJob(input)",
              "stateName": "13: createBillJob(input)",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "billJob",
              "type": "object",
            },
            "stateName": "12: Assign billJob",
          },
          Object {
            "_syntaxKind": "asl-wait-state",
            "seconds": Object {
              "_syntaxKind": "literal",
              "type": "numeric",
              "value": 120,
            },
          },
          Object {
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "asl-task-state",
              "catch": Array [],
              "parameters": Object {
                "_syntaxKind": "identifier",
                "identifier": "billJob",
                "type": "object",
              },
              "resource": "typescript:createNonEmptyBills",
              "retry": Array [],
              "source": "createNonEmptyBills(billJob)",
              "stateName": "16: createNonEmptyBills(billJob)",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "jobResult",
              "type": "object",
            },
            "stateName": "14: Assign jobResult",
          },
          Object {
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "asl-map-state",
              "catch": Array [],
              "items": Object {
                "_syntaxKind": "identifier",
                "identifier": "jobResult.bills",
                "type": "object",
              },
              "iterator": Object {
                "_syntaxKind": "function",
                "inputArgumentName": Object {
                  "_syntaxKind": "identifier",
                  "identifier": "bill",
                },
                "statements": Array [
                  Object {
                    "_syntaxKind": "variable-assignment",
                    "expression": Object {
                      "_syntaxKind": "asl-pass-state",
                      "parameters": Object {
                        "_syntaxKind": "literal-object",
                        "properties": Object {
                          "bill": Object {
                            "_syntaxKind": "identifier",
                            "identifier": "bill",
                            "type": "object",
                          },
                          "lastDateInBillingPeriod": Object {
                            "_syntaxKind": "identifier",
                            "identifier": "jobResult.lastDateInBillingPeriod",
                            "type": "string",
                          },
                        },
                      },
                      "source": "approveNonEmptyBillRequest = { lastDateInBillingPeriod: jobResult.lastDateInBillingPeriod, bill }",
                      "stateName": "19: Assign approveNonEmptyBil ...",
                    },
                    "name": Object {
                      "_syntaxKind": "identifier",
                      "identifier": "approveNonEmptyBillRequest",
                      "type": "object",
                    },
                    "stateName": "18: Assign approveNonEmptyBil ...",
                  },
                  Object {
                    "_syntaxKind": "variable-assignment",
                    "expression": Object {
                      "_syntaxKind": "asl-task-state",
                      "catch": Array [],
                      "parameters": Object {
                        "_syntaxKind": "identifier",
                        "identifier": "approveNonEmptyBillRequest",
                        "type": "object",
                      },
                      "resource": "typescript:approveNonEmptyBill",
                      "retry": Array [],
                      "source": "approveNonEmptyBill(approveNonEmptyBillRequest)",
                      "stateName": "20: approveNonEmptyBill(appro ...",
                    },
                    "name": Object {
                      "_syntaxKind": "identifier",
                      "identifier": "approvalResult",
                      "type": "object",
                    },
                    "stateName": "19: Assign approvalResult",
                  },
                  Object {
                    "_syntaxKind": "if",
                    "condition": Object {
                      "_syntaxKind": "binary-expression",
                      "operator": "is-present",
                      "rhs": Object {
                        "_syntaxKind": "identifier",
                        "identifier": "approvalResult.valid",
                        "type": "boolean",
                      },
                    },
                    "else": Object {
                      "_syntaxKind": "function",
                      "statements": Array [
                        Object {
                          "_syntaxKind": "variable-assignment",
                          "expression": Object {
                            "_syntaxKind": "asl-task-state",
                            "parameters": Object {
                              "_syntaxKind": "literal-object",
                              "properties": Object {
                                "ApiEndpoint": Object {
                                  "_syntaxKind": "literal",
                                  "type": "string",
                                  "value": "yyyyyyyy",
                                },
                                "Method": Object {
                                  "_syntaxKind": "literal",
                                  "type": "string",
                                  "value": "POST",
                                },
                                "Path": Object {
                                  "_syntaxKind": "literal",
                                  "type": "string",
                                  "value": "/xxxxxxxx",
                                },
                                "RequestBody": Object {
                                  "_syntaxKind": "literal-object",
                                  "properties": Object {
                                    "accountId": Object {
                                      "_syntaxKind": "identifier",
                                      "identifier": "bill.accountId",
                                      "type": "string",
                                    },
                                    "accountName": Object {
                                      "_syntaxKind": "identifier",
                                      "identifier": "bill.accountName",
                                      "type": "unknown",
                                    },
                                    "billId": Object {
                                      "_syntaxKind": "identifier",
                                      "identifier": "bill.billId",
                                      "type": "unknown",
                                    },
                                    "errors": Object {
                                      "_syntaxKind": "identifier",
                                      "identifier": "bill.errors",
                                      "type": "unknown",
                                    },
                                    "stage": Object {
                                      "_syntaxKind": "identifier",
                                      "identifier": "bill.stage",
                                      "type": "unknown",
                                    },
                                  },
                                },
                              },
                            },
                            "resource": "arn:aws:states:::aws-sdk:apigateway:invoke",
                            "source": undefined,
                            "stateName": "Invoke",
                          },
                          "name": Object {
                            "_syntaxKind": "identifier",
                            "identifier": "result",
                            "type": "unknown",
                          },
                          "stateName": "30: Assign result",
                        },
                        Object {
                          "_syntaxKind": "return",
                          "expression": Object {
                            "_syntaxKind": "identifier",
                            "identifier": "result",
                            "type": "unknown",
                          },
                          "stateName": "44: Return result",
                        },
                      ],
                    },
                    "stateName": "20: If (approvalResult.valid)",
                    "then": Object {
                      "_syntaxKind": "function",
                      "statements": Array [
                        Object {
                          "_syntaxKind": "return",
                          "expression": Object {
                            "_syntaxKind": "literal-object",
                            "properties": Object {
                              "accountCode": Object {
                                "_syntaxKind": "identifier",
                                "identifier": "approvalResult.accountCode",
                                "type": "string",
                              },
                              "accountId": Object {
                                "_syntaxKind": "identifier",
                                "identifier": "approvalResult.accountId",
                                "type": "string",
                              },
                              "accountType": Object {
                                "_syntaxKind": "identifier",
                                "identifier": "approvalResult.accountType",
                                "type": "string",
                              },
                              "billId": Object {
                                "_syntaxKind": "identifier",
                                "identifier": "approvalResult.billId",
                                "type": "string",
                              },
                              "billable": Object {
                                "_syntaxKind": "identifier",
                                "identifier": "approvalResult.billable",
                                "type": "boolean",
                              },
                              "valid": Object {
                                "_syntaxKind": "identifier",
                                "identifier": "approvalResult.valid",
                                "type": "unknown",
                              },
                            },
                          },
                          "stateName": "21: Return { valid: ...",
                        },
                      ],
                    },
                  },
                ],
              },
              "maxConcurrency": undefined,
              "retry": Array [],
              "source": undefined,
              "stateName": "18: For bill Of jobResult.bil ...",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "billPromises",
              "type": "object",
            },
            "stateName": "16: Assign billPromises",
          },
          Object {
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "asl-pass-state",
              "parameters": Object {
                "_syntaxKind": "identifier",
                "identifier": "billPromises",
                "type": "object",
              },
              "source": undefined,
              "stateName": "49: Assign bills",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "bills",
              "type": "object",
            },
            "stateName": "47: Assign bills",
          },
          Object {
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "identifier",
              "filterExpression": Object {
                "argument": Object {
                  "_syntaxKind": "identifier",
                  "identifier": "x",
                  "type": "object",
                },
                "expression": Object {
                  "_syntaxKind": "binary-expression",
                  "operator": "not",
                  "rhs": Object {
                    "_syntaxKind": "binary-expression",
                    "operator": "is-present",
                    "rhs": Object {
                      "_syntaxKind": "identifier",
                      "identifier": "x.valid",
                      "type": "boolean",
                    },
                  },
                },
              },
              "identifier": "bills",
              "type": "object",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "validBills",
              "type": "object",
            },
            "stateName": "49: Assign validBills",
          },
          Object {
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "asl-map-state",
              "catch": Array [],
              "items": Object {
                "_syntaxKind": "identifier",
                "identifier": "validBills",
                "type": "object",
              },
              "iterator": Object {
                "_syntaxKind": "function",
                "inputArgumentName": Object {
                  "_syntaxKind": "identifier",
                  "identifier": "x",
                },
                "statements": Array [
                  Object {
                    "_syntaxKind": "asl-task-state",
                    "catch": Array [],
                    "parameters": Object {
                      "_syntaxKind": "identifier",
                      "identifier": "x",
                      "type": "object",
                    },
                    "resource": "typescript:createInvoice",
                    "retry": Array [],
                    "source": "createInvoice(x)",
                    "stateName": "52: createInvoice(x)",
                  },
                ],
              },
              "maxConcurrency": undefined,
              "retry": Array [],
              "source": "validBills.map(async x => createInvoice(x))",
              "stateName": "52: For x Of validBills.map",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "invoices",
              "type": "object",
            },
            "stateName": "50: Assign invoices",
          },
          Object {
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "asl-map-state",
              "catch": Array [],
              "items": Object {
                "_syntaxKind": "identifier",
                "identifier": "invoices",
                "type": "object",
              },
              "iterator": Object {
                "_syntaxKind": "function",
                "inputArgumentName": Object {
                  "_syntaxKind": "identifier",
                  "identifier": "x",
                },
                "statements": Array [
                  Object {
                    "_syntaxKind": "asl-task-state",
                    "catch": Array [],
                    "parameters": Object {
                      "_syntaxKind": "identifier",
                      "identifier": "x",
                      "type": "object",
                    },
                    "resource": "typescript:validateInvoice",
                    "retry": Array [],
                    "source": "validateInvoice(x)",
                    "stateName": "53: validateInvoice(x)",
                  },
                ],
              },
              "maxConcurrency": undefined,
              "retry": Array [],
              "source": "invoices.map(async x => validateInvoice(x))",
              "stateName": "53: For x Of invoices.map",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "validatedInvoices",
              "type": "object",
            },
            "stateName": "52: Assign validatedInvoices",
          },
          Object {
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "identifier",
              "filterExpression": Object {
                "argument": Object {
                  "_syntaxKind": "identifier",
                  "identifier": "x",
                  "type": "object",
                },
                "expression": Object {
                  "_syntaxKind": "binary-expression",
                  "operator": "not",
                  "rhs": Object {
                    "_syntaxKind": "binary-expression",
                    "operator": "is-present",
                    "rhs": Object {
                      "_syntaxKind": "identifier",
                      "identifier": "x.valid",
                      "type": "boolean",
                    },
                  },
                },
              },
              "identifier": "validatedInvoices",
              "type": "object",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "invalidInvoices",
              "type": "object",
            },
            "stateName": "53: Assign invalidInvoices",
          },
          Object {
            "_syntaxKind": "if",
            "condition": Object {
              "_syntaxKind": "binary-expression",
              "lhs": Object {
                "_syntaxKind": "identifier",
                "identifier": "invalidInvoices",
                "jsonPathExpression": ".length()",
                "type": "object",
              },
              "operator": "gt",
              "rhs": Object {
                "_syntaxKind": "literal",
                "type": "numeric",
                "value": 0,
              },
            },
            "stateName": "55: If (invalidInvoices.lengt ...",
            "then": Object {
              "_syntaxKind": "function",
              "statements": Array [
                Object {
                  "_syntaxKind": "asl-task-state",
                  "catch": Array [],
                  "parameters": Object {
                    "_syntaxKind": "literal-object",
                    "properties": Object {
                      "bills": Object {
                        "_syntaxKind": "literal-object",
                        "properties": Object {
                          "invalid": Object {
                            "_syntaxKind": "identifier",
                            "identifier": "invalidInvoices",
                            "type": "object",
                          },
                        },
                      },
                    },
                  },
                  "resource": "typescript:createGithubIssue",
                  "retry": Array [],
                  "stateName": "57: createGithubIssue({ bills ...",
                },
              ],
            },
          },
          Object {
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "identifier",
              "filterExpression": Object {
                "argument": Object {
                  "_syntaxKind": "identifier",
                  "identifier": "x",
                  "type": "object",
                },
                "expression": Object {
                  "_syntaxKind": "binary-expression",
                  "lhs": Object {
                    "_syntaxKind": "identifier",
                    "identifier": "x.valid",
                    "type": "boolean",
                  },
                  "operator": "eq",
                  "rhs": Object {
                    "_syntaxKind": "literal",
                    "type": "boolean",
                    "value": true,
                  },
                },
              },
              "identifier": "validatedInvoices",
              "type": "object",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "validInvoices",
              "type": "object",
            },
            "stateName": "58: Assign validInvoices",
          },
          Object {
            "_syntaxKind": "if",
            "condition": Object {
              "_syntaxKind": "binary-expression",
              "operator": "not",
              "rhs": Object {
                "_syntaxKind": "binary-expression",
                "operator": "is-present",
                "rhs": Object {
                  "_syntaxKind": "identifier",
                  "identifier": "input.shouldFinalize",
                  "type": "boolean",
                },
              },
            },
            "source": "if (!input.shouldFinalize) {
            return;
          }",
            "stateName": "60: If (!input.shouldFinalize)",
            "then": Object {
              "_syntaxKind": "function",
              "statements": Array [
                Object {
                  "_syntaxKind": "return",
                  "stateName": "62: Return undefined",
                },
              ],
            },
          },
          Object {
            "_syntaxKind": "asl-map-state",
            "catch": Array [],
            "items": Object {
              "_syntaxKind": "identifier",
              "identifier": "validInvoices",
              "type": "object",
            },
            "iterator": Object {
              "_syntaxKind": "function",
              "inputArgumentName": Object {
                "_syntaxKind": "identifier",
                "identifier": "invoice",
              },
              "statements": Array [
                Object {
                  "_syntaxKind": "if",
                  "condition": Object {
                    "_syntaxKind": "binary-expression",
                    "operator": "is-present",
                    "rhs": Object {
                      "_syntaxKind": "identifier",
                      "identifier": "invoice.billable",
                      "type": "boolean",
                    },
                  },
                  "else": Object {
                    "_syntaxKind": "function",
                    "statements": Array [
                      Object {
                        "_syntaxKind": "asl-task-state",
                        "catch": Array [],
                        "parameters": Object {
                          "_syntaxKind": "literal-object",
                          "properties": Object {
                            "Message": Object {
                              "_syntaxKind": "literal-object",
                              "properties": Object {
                                "TaskToken": Object {
                                  "_syntaxKind": "literal",
                                  "type": "string",
                                  "value": "$$.Task.Token",
                                },
                                "billId": Object {
                                  "_syntaxKind": "identifier",
                                  "identifier": "invoice.billId",
                                  "type": "string",
                                },
                                "invoiceId": Object {
                                  "_syntaxKind": "identifier",
                                  "identifier": "invoice.invoiceId",
                                  "type": "string",
                                },
                                "stage": Object {
                                  "_syntaxKind": "literal",
                                  "type": "string",
                                  "value": "olaf",
                                },
                              },
                            },
                            "Subject": Object {
                              "_syntaxKind": "literal",
                              "type": "string",
                              "value": "olaf - Billing Approval",
                            },
                            "TopicArn": Object {
                              "_syntaxKind": "literal",
                              "type": "string",
                              "value": "BillingManualApproval16216020",
                            },
                          },
                        },
                        "resource": "arn::states:::sns:publish.waitForTaskToken",
                        "retry": Array [],
                      },
                    ],
                  },
                  "stateName": "66: If (invoice.billable)",
                  "then": Object {
                    "_syntaxKind": "function",
                    "statements": Array [
                      Object {
                        "_syntaxKind": "asl-task-state",
                        "catch": Array [],
                        "parameters": Object {
                          "_syntaxKind": "identifier",
                          "identifier": "invoice",
                          "type": "object",
                        },
                        "resource": "typescript:finallizeInvoice",
                        "retry": Array [],
                        "stateName": "68: finallizeInvoice(invoice ...",
                      },
                    ],
                  },
                },
              ],
            },
            "retry": Array [],
            "stateName": "64: For invoice Of validInvoices",
          },
        ],
      }
    `);
  });
  it("then can be converted to asl", async () => {
    expect(converted.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "13: createBillJob(input)": Object {
            "Catch": Array [],
            "Comment": "source: createBillJob(input)",
            "HeartbeatSeconds": undefined,
            "InputPath": "$.vars",
            "Next": "Wait",
            "Resource": "typescript:createBillJob",
            "ResultPath": "$.vars.billJob",
            "Retry": Array [],
            "TimeoutSeconds": undefined,
            "Type": "Task",
          },
          "16: Assign billPromises": Object {
            "Comment": undefined,
            "ItemsPath": "$.vars.jobResult.bills",
            "Iterator": Object {
              "StartAt": "18: Assign approveNonEmptyBil ...",
              "States": Object {
                "18: Assign approveNonEmptyBil ...": Object {
                  "Comment": "source: approveNonEmptyBillRequest = { lastDateInBilli ...",
                  "Next": "20: approveNonEmptyBill(appro ...",
                  "Parameters": Object {
                    "bill.$": "$.vars.bill",
                    "lastDateInBillingPeriod.$": "$.vars.jobResult.lastDateInBillingPeriod",
                  },
                  "ResultPath": "$.vars.approveNonEmptyBillRequest",
                  "Type": "Pass",
                },
                "20: If (approvalResult.valid)": Object {
                  "Choices": Array [
                    Object {
                      "IsPresent": true,
                      "Next": "Pass",
                      "Variable": "$.vars.approvalResult.valid",
                    },
                  ],
                  "Comment": undefined,
                  "Default": "Pass",
                  "Type": "Choice",
                },
                "20: approveNonEmptyBill(appro ...": Object {
                  "Catch": Array [],
                  "Comment": "source: approveNonEmptyBill(approveNonEmptyBillRequest)",
                  "HeartbeatSeconds": undefined,
                  "InputPath": "$.vars.approveNonEmptyBillRequest",
                  "Next": "20: If (approvalResult.valid)",
                  "Resource": "typescript:approveNonEmptyBill",
                  "ResultPath": "$.vars.approvalResult",
                  "Retry": Array [],
                  "TimeoutSeconds": undefined,
                  "Type": "Task",
                },
                "Pass": Object {
                  "End": true,
                  "Parameters": Object {
                    "accountCode.$": "$.vars.approvalResult.accountCode",
                    "accountId.$": "$.vars.approvalResult.accountId",
                    "accountType.$": "$.vars.approvalResult.accountType",
                    "billId.$": "$.vars.approvalResult.billId",
                    "billable.$": "$.vars.approvalResult.billable",
                    "valid.$": "$.vars.approvalResult.valid",
                  },
                  "Type": "Pass",
                },
              },
            },
            "MaxConcurrency": undefined,
            "Next": "47: Assign bills",
            "Parameters": Object {
              "vars": Object {
                "bill.$": "$$.Map.Item.Value",
                "jobResult.$": "$.vars.jobResult",
              },
            },
            "ResultPath": "$.vars.billPromises",
            "Type": "Map",
          },
          "16: createNonEmptyBills(billJob)": Object {
            "Catch": Array [],
            "Comment": "source: createNonEmptyBills(billJob)",
            "HeartbeatSeconds": undefined,
            "InputPath": "$.vars.billJob",
            "Next": "16: Assign billPromises",
            "Resource": "typescript:createNonEmptyBills",
            "ResultPath": "$.vars.jobResult",
            "Retry": Array [],
            "TimeoutSeconds": undefined,
            "Type": "Task",
          },
          "47: Assign bills": Object {
            "Comment": undefined,
            "InputPath": "$.vars.billPromises",
            "Next": "49: Assign validBills",
            "ResultPath": "$.vars.bills",
            "Type": "Pass",
          },
          "49: Assign validBills": Object {
            "Comment": undefined,
            "InputPath": "$.vars.bills[?(!(@.valid))]",
            "Next": "50: Assign invoices",
            "ResultPath": "$.vars.validBills",
            "Type": "Pass",
          },
          "50: Assign invoices": Object {
            "Comment": "source: validBills.map(async x => createInvoice(x))",
            "ItemsPath": "$.vars.validBills",
            "Iterator": Object {
              "StartAt": "52: createInvoice(x)",
              "States": Object {
                "52: createInvoice(x)": Object {
                  "Catch": Array [],
                  "Comment": "source: createInvoice(x)",
                  "End": true,
                  "HeartbeatSeconds": undefined,
                  "InputPath": "$.vars.x",
                  "Resource": "typescript:createInvoice",
                  "Retry": Array [],
                  "TimeoutSeconds": undefined,
                  "Type": "Task",
                },
              },
            },
            "MaxConcurrency": undefined,
            "Next": "52: Assign validatedInvoices",
            "Parameters": Object {
              "vars": Object {
                "x.$": "$.vars.x",
              },
            },
            "ResultPath": "$.vars.invoices",
            "Type": "Map",
          },
          "52: Assign validatedInvoices": Object {
            "Comment": "source: invoices.map(async x => validateInvoice(x))",
            "ItemsPath": "$.vars.invoices",
            "Iterator": Object {
              "StartAt": "53: validateInvoice(x)",
              "States": Object {
                "53: validateInvoice(x)": Object {
                  "Catch": Array [],
                  "Comment": "source: validateInvoice(x)",
                  "End": true,
                  "HeartbeatSeconds": undefined,
                  "InputPath": "$.vars.x",
                  "Resource": "typescript:validateInvoice",
                  "Retry": Array [],
                  "TimeoutSeconds": undefined,
                  "Type": "Task",
                },
              },
            },
            "MaxConcurrency": undefined,
            "Next": "53: Assign invalidInvoices",
            "Parameters": Object {
              "vars": Object {
                "x.$": "$.vars.x",
              },
            },
            "ResultPath": "$.vars.validatedInvoices",
            "Type": "Map",
          },
          "53: Assign invalidInvoices": Object {
            "Comment": undefined,
            "InputPath": "$.vars.validatedInvoices[?(!(@.valid))]",
            "Next": "55: If (invalidInvoices.lengt ...",
            "ResultPath": "$.vars.invalidInvoices",
            "Type": "Pass",
          },
          "55: If (invalidInvoices.lengt ...": Object {
            "Choices": Array [
              Object {
                "Next": "57: createGithubIssue({ bills ...",
                "StringGreaterThan": 0,
                "Variable": "$.vars.invalidInvoices.length()",
              },
            ],
            "Comment": undefined,
            "Default": "58: Assign validInvoices",
            "Type": "Choice",
          },
          "57: createGithubIssue({ bills ...": Object {
            "Catch": Array [],
            "Comment": undefined,
            "HeartbeatSeconds": undefined,
            "Next": "58: Assign validInvoices",
            "Parameters": Object {
              "bills": Object {
                "invalid.$": "$.vars.invalidInvoices",
              },
            },
            "Resource": "typescript:createGithubIssue",
            "Retry": Array [],
            "TimeoutSeconds": undefined,
            "Type": "Task",
          },
          "58: Assign validInvoices": Object {
            "Comment": undefined,
            "InputPath": "$.vars.validatedInvoices[?(@.valid == true)]",
            "Next": "60: If (!input.shouldFinalize)",
            "ResultPath": "$.vars.validInvoices",
            "Type": "Pass",
          },
          "60: If (!input.shouldFinalize)": Object {
            "Choices": Array [
              Object {
                "IsPresent": false,
                "Next": "Empty",
                "Variable": "$.vars.shouldFinalize",
              },
            ],
            "Comment": "source: if (!input.shouldFinalize) { return; }",
            "Default": "64: For invoice Of validInvoices",
            "Type": "Choice",
          },
          "64: For invoice Of validInvoices": Object {
            "Comment": undefined,
            "End": true,
            "ItemsPath": "$.vars.validInvoices",
            "Iterator": Object {
              "StartAt": "66: If (invoice.billable)",
              "States": Object {
                "66: If (invoice.billable)": Object {
                  "Choices": Array [
                    Object {
                      "IsPresent": true,
                      "Next": "68: finallizeInvoice(invoice ...",
                      "Variable": "$.vars.invoice.billable",
                    },
                  ],
                  "Comment": undefined,
                  "Default": "68: finallizeInvoice(invoice ...",
                  "Type": "Choice",
                },
                "68: finallizeInvoice(invoice ...": Object {
                  "Catch": Array [],
                  "Comment": undefined,
                  "End": true,
                  "HeartbeatSeconds": undefined,
                  "InputPath": "$.vars.invoice",
                  "Resource": "typescript:finallizeInvoice",
                  "Retry": Array [],
                  "TimeoutSeconds": undefined,
                  "Type": "Task",
                },
              },
            },
            "MaxConcurrency": undefined,
            "Parameters": Object {
              "vars": Object {
                "invoice.$": "$$.Map.Item.Value",
              },
            },
            "ResultPath": "$.lastResult",
            "Type": "Map",
          },
          "Empty": Object {
            "Type": "Succeed",
          },
          "Initialize": Object {
            "Next": "13: createBillJob(input)",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Wait": Object {
            "Comment": undefined,
            "Next": "16: createNonEmptyBills(billJob)",
            "Seconds": 120,
            "Type": "Wait",
          },
        },
      }
    `);
  });
});
