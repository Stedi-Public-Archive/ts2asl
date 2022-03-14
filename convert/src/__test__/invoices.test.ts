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
              resource: createBillJob,
              parameters: () => input,
              comment: \\"createBillJob(input)\\"
          });
          asl.wait({ seconds: 120 });
          let jobResult = asl.typescriptInvoke({
              name: \\"createNonEmptyBills(billJob)\\",
              resource: createNonEmptyBills,
              parameters: () => billJob,
              comment: \\"createNonEmptyBills(billJob)\\"
          });
          const billPromises = asl.map({
              name: \\"For bill Of jobResult.bil ...\\",
              items: () => jobResult.bills,
              iterator: bill => {
                  const approveNonEmptyBillRequest = asl.pass({
                      name: \\"Assign approveNonEmptyBil ...\\",
                      parameters: () => ({ lastDateInBillingPeriod: jobResult.lastDateInBillingPeriod, bill }),
                      comment: \\"approveNonEmptyBillRequest = { lastDateInBillingPeriod: jobResult.lastDateInBillingPeriod, bill }\\"
                  });
                  const approvalResult = asl.typescriptInvoke({
                      name: \\"approveNonEmptyBill(appro ...\\",
                      resource: approveNonEmptyBill,
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
              name: \\"Assign bills\\",
              parameters: () => billPromises
          });
          const validBills = asl.jsonPathFilter(bills, (x) => !!x.valid);
          const invoices = asl.map({
              name: \\"For x Of validBills.map\\",
              items: () => validBills,
              iterator: x => { let return_var = asl.typescriptInvoke({
                  name: \\"createInvoice(x)\\",
                  resource: createInvoice,
                  parameters: () => x,
                  comment: \\"createInvoice(x)\\"
              }); return return_var; },
              comment: \\"validBills.map(async x => createInvoice(x))\\"
          });
          const validatedInvoices = asl.map({
              name: \\"For x Of invoices.map\\",
              items: () => invoices,
              iterator: x => { let return_var = asl.typescriptInvoke({
                  name: \\"validateInvoice(x)\\",
                  resource: validateInvoice,
                  parameters: () => x,
                  comment: \\"validateInvoice(x)\\"
              }); return return_var; },
              comment: \\"invoices.map(async x => validateInvoice(x))\\"
          });
          const invalidInvoices = asl.jsonPathFilter(validatedInvoices, (x) => !x.valid);
          asl.typescriptIf({
              name: \\"If (invalidInvoices.lengt ...\\",
              condition: () => asl.jsonPathLength(invalidInvoices) > 0,
              then: async () => {
                  asl.typescriptInvoke({
                      name: \\"createGithubIssue({ bills ...\\",
                      resource: createGithubIssue,
                      parameters: () => ({ bills: { invalid: invalidInvoices } })
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
                              name: \\"finallizeInvoice(invoice ...\\",
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

      export const createInvoice = asl.deploy.asLambda(CreateInvoiceHandler);
      export const validateInvoice = asl.deploy.asLambda(ValidateInvoiceHandler);
      export const createGithubIssue = asl.deploy.asLambda(CreateGithubIssueHandler);
      export const approveNonEmptyBill = asl.deploy.asLambda(ApproveNonEmptyBillHandler);
      export const createNonEmptyBills = asl.deploy.asLambda(createNonEmptyBillsHandler);
      export const createBillJob = asl.deploy.asLambda(createBillJobHandler);
      export const finallizeInvoice = asl.deploy.asLambda(FinallizeInvoiceHandler);

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
              "catch": undefined,
              "parameters": Object {
                "_syntaxKind": "identifier",
                "identifier": "input",
                "type": "object",
              },
              "resource": "lambda:createBillJob",
              "retry": Array [
                Object {
                  "BackoffRate": 2,
                  "ErrorEquals": Array [
                    "Lambda.ServiceException",
                    "Lambda.AWSLambdaException",
                    "Lambda.SdkClientException",
                  ],
                  "IntervalSeconds": 2,
                  "MaxAttempts": 6,
                },
              ],
              "source": "createBillJob(input)",
              "stateName": "createBillJob(input)",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "billJob",
              "type": "object",
            },
            "stateName": "Assign billJob",
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
              "catch": undefined,
              "parameters": Object {
                "_syntaxKind": "identifier",
                "identifier": "billJob",
                "type": "object",
              },
              "resource": "lambda:createNonEmptyBills",
              "retry": Array [
                Object {
                  "BackoffRate": 2,
                  "ErrorEquals": Array [
                    "Lambda.ServiceException",
                    "Lambda.AWSLambdaException",
                    "Lambda.SdkClientException",
                  ],
                  "IntervalSeconds": 2,
                  "MaxAttempts": 6,
                },
              ],
              "source": "createNonEmptyBills(billJob)",
              "stateName": "createNonEmptyBills(billJob)",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "jobResult",
              "type": "object",
            },
            "stateName": "Assign jobResult",
          },
          Object {
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "asl-map-state",
              "catch": undefined,
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
                      "stateName": "Assign approveNonEmptyBil ...",
                    },
                    "name": Object {
                      "_syntaxKind": "identifier",
                      "identifier": "approveNonEmptyBillRequest",
                      "type": "object",
                    },
                    "stateName": "Assign approveNonEmptyBil ...",
                  },
                  Object {
                    "_syntaxKind": "variable-assignment",
                    "expression": Object {
                      "_syntaxKind": "asl-task-state",
                      "catch": undefined,
                      "parameters": Object {
                        "_syntaxKind": "identifier",
                        "identifier": "approveNonEmptyBillRequest",
                        "type": "object",
                      },
                      "resource": "lambda:approveNonEmptyBill",
                      "retry": Array [
                        Object {
                          "BackoffRate": 2,
                          "ErrorEquals": Array [
                            "Lambda.ServiceException",
                            "Lambda.AWSLambdaException",
                            "Lambda.SdkClientException",
                          ],
                          "IntervalSeconds": 2,
                          "MaxAttempts": 6,
                        },
                      ],
                      "source": "approveNonEmptyBill(approveNonEmptyBillRequest)",
                      "stateName": "approveNonEmptyBill(appro ...",
                    },
                    "name": Object {
                      "_syntaxKind": "identifier",
                      "identifier": "approvalResult",
                      "type": "object",
                    },
                    "stateName": "Assign approvalResult",
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
                          "stateName": "Assign result",
                        },
                        Object {
                          "_syntaxKind": "return",
                          "expression": Object {
                            "_syntaxKind": "identifier",
                            "identifier": "result",
                            "type": "unknown",
                          },
                          "stateName": "Return result",
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
                          "stateName": "Return { valid: ...",
                        },
                      ],
                    },
                  },
                ],
              },
              "maxConcurrency": undefined,
              "retry": undefined,
              "source": undefined,
              "stateName": "For bill Of jobResult.bil ...",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "billPromises",
              "type": "object",
            },
            "stateName": "Assign billPromises",
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
              "stateName": "Assign bills",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "bills",
              "type": "object",
            },
            "stateName": "Assign bills",
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
            "stateName": "Assign validBills",
          },
          Object {
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "asl-map-state",
              "catch": undefined,
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
                    "_syntaxKind": "variable-assignment",
                    "expression": Object {
                      "_syntaxKind": "asl-task-state",
                      "catch": undefined,
                      "parameters": Object {
                        "_syntaxKind": "identifier",
                        "identifier": "x",
                        "type": "object",
                      },
                      "resource": "lambda:createInvoice",
                      "retry": Array [
                        Object {
                          "BackoffRate": 2,
                          "ErrorEquals": Array [
                            "Lambda.ServiceException",
                            "Lambda.AWSLambdaException",
                            "Lambda.SdkClientException",
                          ],
                          "IntervalSeconds": 2,
                          "MaxAttempts": 6,
                        },
                      ],
                      "source": "createInvoice(x)",
                      "stateName": "createInvoice(x)",
                    },
                    "name": Object {
                      "_syntaxKind": "identifier",
                      "identifier": "return_var",
                      "type": "unknown",
                    },
                    "stateName": "Assign ???",
                  },
                  Object {
                    "_syntaxKind": "return",
                    "expression": Object {
                      "_syntaxKind": "identifier",
                      "identifier": "return_var",
                      "type": "unknown",
                    },
                    "stateName": "Return ???",
                  },
                ],
              },
              "maxConcurrency": undefined,
              "retry": undefined,
              "source": "validBills.map(async x => createInvoice(x))",
              "stateName": "For x Of validBills.map",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "invoices",
              "type": "object",
            },
            "stateName": "Assign invoices",
          },
          Object {
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "asl-map-state",
              "catch": undefined,
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
                    "_syntaxKind": "variable-assignment",
                    "expression": Object {
                      "_syntaxKind": "asl-task-state",
                      "catch": undefined,
                      "parameters": Object {
                        "_syntaxKind": "identifier",
                        "identifier": "x",
                        "type": "object",
                      },
                      "resource": "lambda:validateInvoice",
                      "retry": Array [
                        Object {
                          "BackoffRate": 2,
                          "ErrorEquals": Array [
                            "Lambda.ServiceException",
                            "Lambda.AWSLambdaException",
                            "Lambda.SdkClientException",
                          ],
                          "IntervalSeconds": 2,
                          "MaxAttempts": 6,
                        },
                      ],
                      "source": "validateInvoice(x)",
                      "stateName": "validateInvoice(x)",
                    },
                    "name": Object {
                      "_syntaxKind": "identifier",
                      "identifier": "return_var",
                      "type": "unknown",
                    },
                    "stateName": "Assign ???",
                  },
                  Object {
                    "_syntaxKind": "return",
                    "expression": Object {
                      "_syntaxKind": "identifier",
                      "identifier": "return_var",
                      "type": "unknown",
                    },
                    "stateName": "Return ???",
                  },
                ],
              },
              "maxConcurrency": undefined,
              "retry": undefined,
              "source": "invoices.map(async x => validateInvoice(x))",
              "stateName": "For x Of invoices.map",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "validatedInvoices",
              "type": "object",
            },
            "stateName": "Assign validatedInvoices",
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
            "stateName": "Assign invalidInvoices",
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
                  "resource": "lambda:createGithubIssue",
                  "retry": Array [
                    Object {
                      "BackoffRate": 2,
                      "ErrorEquals": Array [
                        "Lambda.ServiceException",
                        "Lambda.AWSLambdaException",
                        "Lambda.SdkClientException",
                      ],
                      "IntervalSeconds": 2,
                      "MaxAttempts": 6,
                    },
                  ],
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
            "stateName": "Assign validInvoices",
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
                  "stateName": "Return",
                },
              ],
            },
          },
          Object {
            "_syntaxKind": "asl-map-state",
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
                        "resource": "lambda:finallizeInvoice",
                        "retry": Array [
                          Object {
                            "BackoffRate": 2,
                            "ErrorEquals": Array [
                              "Lambda.ServiceException",
                              "Lambda.AWSLambdaException",
                              "Lambda.SdkClientException",
                            ],
                            "IntervalSeconds": 2,
                            "MaxAttempts": 6,
                          },
                        ],
                        "stateName": "finallizeInvoice(invoice ...",
                      },
                    ],
                  },
                },
              ],
            },
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
          "Assign billPromises": Object {
            "Comment": undefined,
            "ItemsPath": "$.vars.jobResult.bills",
            "Iterator": Object {
              "StartAt": "Assign approveNonEmptyBil ...",
              "States": Object {
                "Assign approveNonEmptyBil ...": Object {
                  "Comment": "source: approveNonEmptyBillRequest = { lastDateInBilli ...",
                  "Next": "approveNonEmptyBill(appro ...",
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
                "approveNonEmptyBill(appro ...": Object {
                  "Catch": undefined,
                  "Comment": "source: approveNonEmptyBill(approveNonEmptyBillRequest)",
                  "HeartbeatSeconds": undefined,
                  "InputPath": "$.vars.approveNonEmptyBillRequest",
                  "Next": "If (approvalResult.valid)",
                  "Resource": "lambda:approveNonEmptyBill",
                  "ResultPath": "$.vars.approvalResult",
                  "Retry": Array [
                    Object {
                      "BackoffRate": 2,
                      "ErrorEquals": Array [
                        "Lambda.ServiceException",
                        "Lambda.AWSLambdaException",
                        "Lambda.SdkClientException",
                      ],
                      "IntervalSeconds": 2,
                      "MaxAttempts": 6,
                    },
                  ],
                  "TimeoutSeconds": undefined,
                  "Type": "Task",
                },
              },
            },
            "MaxConcurrency": undefined,
            "Next": "Assign bills",
            "Parameters": Object {
              "vars": Object {
                "bill.$": "$$.Map.Item.Value",
                "jobResult.$": "$.vars.jobResult",
              },
            },
            "ResultPath": "$.vars.billPromises",
            "Type": "Map",
          },
          "Assign bills": Object {
            "Comment": undefined,
            "InputPath": "$.vars.billPromises",
            "Next": "Assign validBills",
            "ResultPath": "$.vars.bills",
            "Type": "Pass",
          },
          "Assign invalidInvoices": Object {
            "Comment": undefined,
            "InputPath": "$.vars.validatedInvoices[?(!(@.valid))]",
            "Next": "If (invalidInvoices.lengt ...",
            "ResultPath": "$.vars.invalidInvoices",
            "Type": "Pass",
          },
          "Assign invoices": Object {
            "Comment": "source: validBills.map(async x => createInvoice(x))",
            "ItemsPath": "$.vars.validBills",
            "Iterator": Object {
              "StartAt": "createInvoice(x)",
              "States": Object {
                "Pass_2": Object {
                  "End": true,
                  "InputPath": "$.vars.return_var",
                  "Type": "Pass",
                },
                "createInvoice(x)": Object {
                  "Catch": undefined,
                  "Comment": "source: createInvoice(x)",
                  "HeartbeatSeconds": undefined,
                  "InputPath": "$.vars.x",
                  "Next": "Pass_2",
                  "Resource": "lambda:createInvoice",
                  "ResultPath": "$.vars.return_var",
                  "Retry": Array [
                    Object {
                      "BackoffRate": 2,
                      "ErrorEquals": Array [
                        "Lambda.ServiceException",
                        "Lambda.AWSLambdaException",
                        "Lambda.SdkClientException",
                      ],
                      "IntervalSeconds": 2,
                      "MaxAttempts": 6,
                    },
                  ],
                  "TimeoutSeconds": undefined,
                  "Type": "Task",
                },
              },
            },
            "MaxConcurrency": undefined,
            "Next": "Assign validatedInvoices",
            "Parameters": Object {
              "vars": Object {
                "x.$": "$.vars.x",
              },
            },
            "ResultPath": "$.vars.invoices",
            "Type": "Map",
          },
          "Assign validBills": Object {
            "Comment": undefined,
            "InputPath": "$.vars.bills[?(!(@.valid))]",
            "Next": "Assign invoices",
            "ResultPath": "$.vars.validBills",
            "Type": "Pass",
          },
          "Assign validInvoices": Object {
            "Comment": undefined,
            "InputPath": "$.vars.validatedInvoices[?(@.valid == true)]",
            "Next": "If (!input.shouldFinalize)",
            "ResultPath": "$.vars.validInvoices",
            "Type": "Pass",
          },
          "Assign validatedInvoices": Object {
            "Comment": "source: invoices.map(async x => validateInvoice(x))",
            "ItemsPath": "$.vars.invoices",
            "Iterator": Object {
              "StartAt": "validateInvoice(x)",
              "States": Object {
                "Pass_3": Object {
                  "End": true,
                  "InputPath": "$.vars.return_var",
                  "Type": "Pass",
                },
                "validateInvoice(x)": Object {
                  "Catch": undefined,
                  "Comment": "source: validateInvoice(x)",
                  "HeartbeatSeconds": undefined,
                  "InputPath": "$.vars.x",
                  "Next": "Pass_3",
                  "Resource": "lambda:validateInvoice",
                  "ResultPath": "$.vars.return_var",
                  "Retry": Array [
                    Object {
                      "BackoffRate": 2,
                      "ErrorEquals": Array [
                        "Lambda.ServiceException",
                        "Lambda.AWSLambdaException",
                        "Lambda.SdkClientException",
                      ],
                      "IntervalSeconds": 2,
                      "MaxAttempts": 6,
                    },
                  ],
                  "TimeoutSeconds": undefined,
                  "Type": "Task",
                },
              },
            },
            "MaxConcurrency": undefined,
            "Next": "Assign invalidInvoices",
            "Parameters": Object {
              "vars": Object {
                "x.$": "$.vars.x",
              },
            },
            "ResultPath": "$.vars.validatedInvoices",
            "Type": "Map",
          },
          "Empty": Object {
            "Type": "Succeed",
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
                      "Next": "finallizeInvoice(invoice ...",
                      "Variable": "$.vars.invoice.billable",
                    },
                  ],
                  "Comment": undefined,
                  "Default": "finallizeInvoice(invoice ...",
                  "Type": "Choice",
                },
                "finallizeInvoice(invoice ...": Object {
                  "Catch": undefined,
                  "Comment": undefined,
                  "End": true,
                  "HeartbeatSeconds": undefined,
                  "InputPath": "$.vars.invoice",
                  "Resource": "lambda:finallizeInvoice",
                  "Retry": Array [
                    Object {
                      "BackoffRate": 2,
                      "ErrorEquals": Array [
                        "Lambda.ServiceException",
                        "Lambda.AWSLambdaException",
                        "Lambda.SdkClientException",
                      ],
                      "IntervalSeconds": 2,
                      "MaxAttempts": 6,
                    },
                  ],
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
            "ResultPath": "$.tmp.lastResult",
            "Type": "Map",
          },
          "If (!input.shouldFinalize)": Object {
            "Choices": Array [
              Object {
                "IsPresent": false,
                "Next": "Empty",
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
            "Default": "Assign validInvoices",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "createBillJob(input)",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Wait": Object {
            "Comment": undefined,
            "Next": "createNonEmptyBills(billJob)",
            "Seconds": 120,
            "Type": "Wait",
          },
          "createBillJob(input)": Object {
            "Catch": undefined,
            "Comment": "source: createBillJob(input)",
            "HeartbeatSeconds": undefined,
            "InputPath": "$.vars",
            "Next": "Wait",
            "Resource": "lambda:createBillJob",
            "ResultPath": "$.vars.billJob",
            "Retry": Array [
              Object {
                "BackoffRate": 2,
                "ErrorEquals": Array [
                  "Lambda.ServiceException",
                  "Lambda.AWSLambdaException",
                  "Lambda.SdkClientException",
                ],
                "IntervalSeconds": 2,
                "MaxAttempts": 6,
              },
            ],
            "TimeoutSeconds": undefined,
            "Type": "Task",
          },
          "createGithubIssue({ bills ...": Object {
            "Catch": undefined,
            "Comment": undefined,
            "HeartbeatSeconds": undefined,
            "Next": "Assign validInvoices",
            "Parameters": Object {
              "bills": Object {
                "invalid.$": "$.vars.invalidInvoices",
              },
            },
            "Resource": "lambda:createGithubIssue",
            "Retry": Array [
              Object {
                "BackoffRate": 2,
                "ErrorEquals": Array [
                  "Lambda.ServiceException",
                  "Lambda.AWSLambdaException",
                  "Lambda.SdkClientException",
                ],
                "IntervalSeconds": 2,
                "MaxAttempts": 6,
              },
            ],
            "TimeoutSeconds": undefined,
            "Type": "Task",
          },
          "createNonEmptyBills(billJob)": Object {
            "Catch": undefined,
            "Comment": "source: createNonEmptyBills(billJob)",
            "HeartbeatSeconds": undefined,
            "InputPath": "$.vars.billJob",
            "Next": "Assign billPromises",
            "Resource": "lambda:createNonEmptyBills",
            "ResultPath": "$.vars.jobResult",
            "Retry": Array [
              Object {
                "BackoffRate": 2,
                "ErrorEquals": Array [
                  "Lambda.ServiceException",
                  "Lambda.AWSLambdaException",
                  "Lambda.SdkClientException",
                ],
                "IntervalSeconds": 2,
                "MaxAttempts": 6,
              },
            ],
            "TimeoutSeconds": undefined,
            "Type": "Task",
          },
        },
      }
    `);
  });
});
