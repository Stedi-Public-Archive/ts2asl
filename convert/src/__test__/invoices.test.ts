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
              name: \\"createBillJob(input)\\",
              target: createBillJob,
              parameters: () => input,
              comment: \\"createBillJob(input)\\"
          });
          asl.wait({ seconds: 120 });
          let jobResult = asl.typescriptInvoke({
              name: \\"createNonEmptyBills(billJob)\\",
              target: createNonEmptyBills,
              parameters: () => billJob,
              comment: \\"createNonEmptyBills(billJob)\\"
          });
          const billPromises = asl.map({
              name: \\"For bill Of jobResult.bil ...\\",
              items: () => jobResult.bills,
              iterator: bill => {
                  const approveNonEmptyBillRequest = asl.pass({
                      parameters: () => ({ lastDateInBillingPeriod: jobResult.lastDateInBillingPeriod, bill }),
                      comment: \\"approveNonEmptyBillRequest = { lastDateInBillingPeriod: jobResult.lastDateInBillingPeriod, bill }\\"
                  });
                  const approvalResult = asl.typescriptInvoke({
                      name: \\"approveNonEmptyBill(appro ...\\",
                      target: approveNonEmptyBill,
                      parameters: () => approveNonEmptyBillRequest,
                      comment: \\"approveNonEmptyBill(approveNonEmptyBillRequest)\\"
                  });
                  asl.typescriptIf({
                      name: \\"If (approvalResult.valid)\\",
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
                          });
                          return result;
                      }
                  })
              }
          });
          const bills = asl.pass({
              parameters: () => billPromises
          });
          const validBills = asl.jsonPathFilter(bills, (x) => !!x.valid);
          const invoices = asl.map({
              name: \\"For x Of validBills.map\\",
              items: () => validBills,
              iterator: x => { asl.typescriptInvoke({
                  name: \\"createInvoice(x)\\",
                  target: createInvoice,
                  parameters: () => x,
                  comment: \\"createInvoice(x)\\"
              }) },
              comment: \\"validBills.map(async x => createInvoice(x))\\"
          });
          const validatedInvoices = asl.map({
              name: \\"For x Of invoices.map\\",
              items: () => invoices,
              iterator: x => { asl.typescriptInvoke({
                  name: \\"validateInvoice(x)\\",
                  target: validateInvoice,
                  parameters: () => x,
                  comment: \\"validateInvoice(x)\\"
              }) },
              comment: \\"invoices.map(async x => validateInvoice(x))\\"
          });
          const invalidInvoices = asl.jsonPathFilter(validatedInvoices, (x) => !x.valid);
          asl.typescriptIf({
              name: \\"If (invalidInvoices.lengt ...\\",
              condition: () => asl.jsonPathLength(invalidInvoices) > 0,
              then: async () => {
                  asl.typescriptInvoke({
                      name: \\"createGithubIssue({ bills ...\\",
                      target: createGithubIssue,
                      parameters: () => ({ bills: { invalid: invalidInvoices } }),
                      comment: \\"createGithubIssue({ bills: { invalid: invalidInvoices } })\\"
                  });
              }
          })
          const validInvoices = asl.jsonPathFilter(validatedInvoices, (x) => x.valid === true);
          asl.typescriptIf({
              name: \\"If (!input.shouldFinalize)\\",
              condition: () => !input.shouldFinalize,
              then: async () => {
                  return;
              },
              comment: \\"if (!input.shouldFinalize) {\\\\n      return;\\\\n    }\\"
          })
          asl.map({
              name: \\"For invoice Of validInvoices\\",
              items: () => validInvoices,
              iterator: invoice => {
                  asl.typescriptIf({
                      name: \\"If (invoice.billable)\\",
                      condition: () => invoice.billable,
                      then: async () => {
                          asl.typescriptInvoke({
                              name: \\"finallizeInvoice(invoice  ...\\",
                              target: finallizeInvoice,
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
              "parameters": Object {
                "_syntaxKind": "identifier",
                "identifier": "input",
                "type": "object",
              },
              "resource": "typescript:createBillJob",
              "source": "createBillJob(input)",
              "stateName": "createBillJob(input)",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "billJob",
              "type": "object",
            },
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
              "parameters": Object {
                "_syntaxKind": "identifier",
                "identifier": "billJob",
                "type": "object",
              },
              "resource": "typescript:createNonEmptyBills",
              "source": "createNonEmptyBills(billJob)",
              "stateName": "createNonEmptyBills(billJob)",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "jobResult",
              "type": "object",
            },
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
                      "stateName": undefined,
                    },
                    "name": Object {
                      "_syntaxKind": "identifier",
                      "identifier": "approveNonEmptyBillRequest",
                      "type": "object",
                    },
                  },
                  Object {
                    "_syntaxKind": "variable-assignment",
                    "expression": Object {
                      "_syntaxKind": "asl-task-state",
                      "parameters": Object {
                        "_syntaxKind": "identifier",
                        "identifier": "approveNonEmptyBillRequest",
                        "type": "object",
                      },
                      "resource": "typescript:approveNonEmptyBill",
                      "source": "approveNonEmptyBill(approveNonEmptyBillRequest)",
                      "stateName": "approveNonEmptyBill(appro ...",
                    },
                    "name": Object {
                      "_syntaxKind": "identifier",
                      "identifier": "approvalResult",
                      "type": "object",
                    },
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
                        },
                        Object {
                          "_syntaxKind": "return",
                          "expression": Object {
                            "_syntaxKind": "identifier",
                            "identifier": "result",
                            "type": "unknown",
                          },
                        },
                      ],
                    },
                    "stateName": "If (approvalResult.valid)",
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
                        },
                      ],
                    },
                  },
                ],
              },
              "retry": Array [],
              "source": undefined,
              "stateName": "For bill Of jobResult.bil ...",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "billPromises",
              "type": "object",
            },
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
              "stateName": undefined,
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "bills",
              "type": "object",
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
                    "parameters": Object {
                      "_syntaxKind": "identifier",
                      "identifier": "x",
                      "type": "object",
                    },
                    "resource": "typescript:createInvoice",
                    "source": "createInvoice(x)",
                    "stateName": "createInvoice(x)",
                  },
                ],
              },
              "retry": Array [],
              "source": "validBills.map(async x => createInvoice(x))",
              "stateName": "For x Of validBills.map",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "invoices",
              "type": "object",
            },
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
                    "parameters": Object {
                      "_syntaxKind": "identifier",
                      "identifier": "x",
                      "type": "object",
                    },
                    "resource": "typescript:validateInvoice",
                    "source": "validateInvoice(x)",
                    "stateName": "validateInvoice(x)",
                  },
                ],
              },
              "retry": Array [],
              "source": "invoices.map(async x => validateInvoice(x))",
              "stateName": "For x Of invoices.map",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "validatedInvoices",
              "type": "object",
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
            "stateName": "If (invalidInvoices.lengt ...",
            "then": Object {
              "_syntaxKind": "function",
              "statements": Array [
                Object {
                  "_syntaxKind": "asl-task-state",
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
                  "source": "createGithubIssue({ bills: { invalid: invalidInvoices } })",
                  "stateName": "createGithubIssue({ bills ...",
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
            "stateName": "If (!input.shouldFinalize)",
            "then": Object {
              "_syntaxKind": "function",
              "statements": Array [
                Object {
                  "_syntaxKind": "return",
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
                  "stateName": "If (invoice.billable)",
                  "then": Object {
                    "_syntaxKind": "function",
                    "statements": Array [
                      Object {
                        "_syntaxKind": "asl-task-state",
                        "parameters": Object {
                          "_syntaxKind": "identifier",
                          "identifier": "invoice",
                          "type": "object",
                        },
                        "resource": "typescript:finallizeInvoice",
                        "stateName": "finallizeInvoice(invoice  ...",
                      },
                    ],
                  },
                },
              ],
            },
            "retry": Array [],
            "stateName": "For invoice Of validInvoices",
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
          "Assign BillJob": Object {
            "Catch": undefined,
            "Comment": "source: createBillJob(input)",
            "HeartbeatSeconds": undefined,
            "InputPath": "$.vars",
            "Next": "Wait",
            "Resource": "typescript:createBillJob",
            "ResultPath": "$.vars.billJob",
            "Retry": undefined,
            "TimeoutSeconds": undefined,
            "Type": "Task",
          },
          "Assign BillPromises": Object {
            "Comment": undefined,
            "ItemsPath": "$.vars.jobResult.bills",
            "Iterator": Object {
              "StartAt": "Assign ApproveNonEmptyBillRequest",
              "States": Object {
                "Assign ApprovalResult": Object {
                  "Catch": undefined,
                  "Comment": "source: approveNonEmptyBill(approveNonEmptyBillRequest)",
                  "HeartbeatSeconds": undefined,
                  "InputPath": "$.vars.approveNonEmptyBillRequest",
                  "Next": "If (approvalResult.valid)",
                  "Resource": "typescript:approveNonEmptyBill",
                  "ResultPath": "$.vars.approvalResult",
                  "Retry": undefined,
                  "TimeoutSeconds": undefined,
                  "Type": "Task",
                },
                "Assign ApproveNonEmptyBillRequest": Object {
                  "Comment": "source: approveNonEmptyBillRequest = { lastDateInBilli ...",
                  "Next": "Assign ApprovalResult",
                  "Parameters": Object {
                    "bill.$": "$.vars.bill",
                    "lastDateInBillingPeriod.$": "$.vars.jobResult.lastDateInBillingPeriod",
                  },
                  "ResultPath": "$.vars.approveNonEmptyBillRequest",
                  "Type": "Pass",
                },
                "If (approvalResult.valid)": Object {
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
                "Pass": Object {
                  "Next": "Succeed",
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
                "Succeed": Object {
                  "Comment": undefined,
                  "Type": "Succeed",
                },
              },
            },
            "MaxConcurrency": undefined,
            "Next": "Assign Bills",
            "Parameters": Object {
              "vars": Object {
                "bill.$": "$$.Map.Item.Value",
                "jobResult.$": "$.vars.jobResult",
              },
            },
            "ResultPath": "$.vars.billPromises",
            "Type": "Map",
          },
          "Assign Bills": Object {
            "Comment": undefined,
            "InputPath": "$.vars.billPromises",
            "Next": "Assign ValidBills",
            "ResultPath": "$.vars.bills",
            "Type": "Pass",
          },
          "Assign InvalidInvoices": Object {
            "Comment": undefined,
            "InputPath": "$.vars.validatedInvoices[?(!(@.valid))]",
            "Next": "If (invalidInvoices.lengt ...",
            "ResultPath": "$.vars.invalidInvoices",
            "Type": "Pass",
          },
          "Assign Invoices": Object {
            "Comment": "source: validBills.map(async x => createInvoice(x))",
            "ItemsPath": "$.vars.validBills",
            "Iterator": Object {
              "StartAt": "createInvoice(x)",
              "States": Object {
                "createInvoice(x)": Object {
                  "Catch": undefined,
                  "Comment": "source: createInvoice(x)",
                  "End": true,
                  "HeartbeatSeconds": undefined,
                  "InputPath": "$.vars.x",
                  "Resource": "typescript:createInvoice",
                  "Retry": undefined,
                  "TimeoutSeconds": undefined,
                  "Type": "Task",
                },
              },
            },
            "MaxConcurrency": undefined,
            "Next": "Assign ValidatedInvoices",
            "Parameters": Object {
              "vars": Object {
                "validBills.$": "$.vars.validBills",
                "x.$": "$.vars.x",
              },
            },
            "ResultPath": "$.vars.invoices",
            "Type": "Map",
          },
          "Assign JobResult": Object {
            "Catch": undefined,
            "Comment": "source: createNonEmptyBills(billJob)",
            "HeartbeatSeconds": undefined,
            "InputPath": "$.vars.billJob",
            "Next": "Assign BillPromises",
            "Resource": "typescript:createNonEmptyBills",
            "ResultPath": "$.vars.jobResult",
            "Retry": undefined,
            "TimeoutSeconds": undefined,
            "Type": "Task",
          },
          "Assign ValidBills": Object {
            "Comment": undefined,
            "InputPath": "$.vars.bills[?(!(@.valid))]",
            "Next": "Assign Invoices",
            "ResultPath": "$.vars.validBills",
            "Type": "Pass",
          },
          "Assign ValidInvoices": Object {
            "Comment": undefined,
            "InputPath": "$.vars.validatedInvoices[?(@.valid == true)]",
            "Next": "If (!input.shouldFinalize)",
            "ResultPath": "$.vars.validInvoices",
            "Type": "Pass",
          },
          "Assign ValidatedInvoices": Object {
            "Comment": "source: invoices.map(async x => validateInvoice(x))",
            "ItemsPath": "$.vars.invoices",
            "Iterator": Object {
              "StartAt": "validateInvoice(x)",
              "States": Object {
                "validateInvoice(x)": Object {
                  "Catch": undefined,
                  "Comment": "source: validateInvoice(x)",
                  "End": true,
                  "HeartbeatSeconds": undefined,
                  "InputPath": "$.vars.x",
                  "Resource": "typescript:validateInvoice",
                  "Retry": undefined,
                  "TimeoutSeconds": undefined,
                  "Type": "Task",
                },
              },
            },
            "MaxConcurrency": undefined,
            "Next": "Assign InvalidInvoices",
            "Parameters": Object {
              "vars": Object {
                "invoices.$": "$.vars.invoices",
                "x.$": "$.vars.x",
              },
            },
            "ResultPath": "$.vars.validatedInvoices",
            "Type": "Map",
          },
          "For invoice Of validInvoices": Object {
            "Comment": undefined,
            "End": true,
            "ItemsPath": "$.vars.validInvoices",
            "Iterator": Object {
              "StartAt": "If (invoice.billable)",
              "States": Object {
                "If (invoice.billable)": Object {
                  "Choices": Array [
                    Object {
                      "IsPresent": true,
                      "Next": "finallizeInvoice(invoice  ...",
                      "Variable": "$.vars.invoice.billable",
                    },
                  ],
                  "Comment": undefined,
                  "Default": "finallizeInvoice(invoice  ...",
                  "Type": "Choice",
                },
                "finallizeInvoice(invoice  ...": Object {
                  "Catch": undefined,
                  "Comment": undefined,
                  "End": true,
                  "HeartbeatSeconds": undefined,
                  "InputPath": "$.vars.invoice",
                  "Resource": "typescript:finallizeInvoice",
                  "Retry": undefined,
                  "TimeoutSeconds": undefined,
                  "Type": "Task",
                },
              },
            },
            "MaxConcurrency": undefined,
            "Parameters": Object {
              "vars": Object {
                "invoice.$": "$$.Map.Item.Value",
                "validInvoices.$": "$.vars.validInvoices",
              },
            },
            "ResultPath": "$.lastResult",
            "Type": "Map",
          },
          "If (!input.shouldFinalize)": Object {
            "Choices": Array [
              Object {
                "IsPresent": false,
                "Next": "Succeed_2",
                "Variable": "$.vars.shouldFinalize",
              },
            ],
            "Comment": "source: if (!input.shouldFinalize) { return; }",
            "Default": "For invoice Of validInvoices",
            "Type": "Choice",
          },
          "If (invalidInvoices.lengt ...": Object {
            "Choices": Array [
              Object {
                "Next": "createGithubIssue({ bills ...",
                "StringGreaterThan": 0,
                "Variable": "$.vars.invalidInvoices.length()",
              },
            ],
            "Comment": undefined,
            "Default": "Assign ValidInvoices",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "Assign BillJob",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Succeed_2": Object {
            "Comment": undefined,
            "Type": "Succeed",
          },
          "Wait": Object {
            "Comment": undefined,
            "Next": "Assign JobResult",
            "Seconds": 120,
            "Type": "Wait",
          },
          "createGithubIssue({ bills ...": Object {
            "Catch": undefined,
            "Comment": "source: createGithubIssue({ bills: { invalid: invalidI ...",
            "HeartbeatSeconds": undefined,
            "Next": "Assign ValidInvoices",
            "Parameters": Object {
              "bills": Object {
                "invalid.$": "$.vars.invalidInvoices",
              },
            },
            "Resource": "typescript:createGithubIssue",
            "Retry": undefined,
            "TimeoutSeconds": undefined,
            "Type": "Task",
          },
        },
      }
    `);
  });
});
