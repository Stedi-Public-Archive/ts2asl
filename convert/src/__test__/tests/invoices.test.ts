import { runConvertForTest } from "../utility";
describe("when converting invoices", () => {
  let converted;
  beforeAll(() => {
    converted = runConvertForTest("invoices");
  });
  it("then main can be converted to asl", async () => {
    expect(converted.main.asl).toMatchInlineSnapshot(`
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
                "Else": Object {
                  "Branches": Array [
                    Object {
                      "StartAt": "Invoke",
                      "States": Object {
                        "Invoke": Object {
                          "Catch": undefined,
                          "Comment": undefined,
                          "HeartbeatSeconds": undefined,
                          "Next": "Pass_1",
                          "Parameters": Object {
                            "ApiEndpoint": "yyyyyyyy",
                            "Method": "POST",
                            "Path": "/xxxxxxxx",
                            "RequestBody": Object {
                              "accountId.$": "$.vars.bill.accountId",
                              "accountName.$": "$.vars.bill.accountName",
                              "billId.$": "$.vars.bill.billId",
                              "errors.$": "$.vars.bill.errors",
                              "stage.$": "$.vars.bill.stage",
                            },
                          },
                          "Resource": "arn:aws:states:::aws-sdk:apigateway:invoke",
                          "ResultPath": "$.vars.result",
                          "Retry": undefined,
                          "TimeoutSeconds": undefined,
                          "Type": "Task",
                        },
                        "Pass_1": Object {
                          "Comment": undefined,
                          "End": true,
                          "InputPath": "$.vars.result",
                          "Type": "Pass",
                        },
                      },
                    },
                  ],
                  "End": true,
                  "OutputPath": "$[0]",
                  "Parameters": Object {
                    "vars": Object {
                      "bill.$": "$.vars.bill",
                    },
                  },
                  "Type": "Parallel",
                },
                "If (approvalResult.valid)": Object {
                  "Choices": Array [
                    Object {
                      "Next": "Pass",
                      "Not": Object {
                        "Or": Array [
                          Object {
                            "IsPresent": false,
                            "Variable": "$.vars.approvalResult.valid",
                          },
                          Object {
                            "IsNull": true,
                            "Variable": "$.vars.approvalResult.valid",
                          },
                          Object {
                            "BooleanEquals": false,
                            "Variable": "$.vars.approvalResult.valid",
                          },
                          Object {
                            "StringEquals": "",
                            "Variable": "$.vars.approvalResult.valid",
                          },
                          Object {
                            "StringEquals": "false",
                            "Variable": "$.vars.approvalResult.valid",
                          },
                          Object {
                            "StringEquals": "0",
                            "Variable": "$.vars.approvalResult.valid",
                          },
                          Object {
                            "NumericEquals": 0,
                            "Variable": "$.vars.approvalResult.valid",
                          },
                        ],
                      },
                    },
                  ],
                  "Comment": undefined,
                  "Default": "Else",
                  "Type": "Choice",
                },
                "Pass": Object {
                  "Comment": undefined,
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
            "InputPath": "$.vars.validatedInvoices[?(!@.valid)]",
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
                  "Comment": undefined,
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
                "x.$": "$$.Map.Item.Value",
              },
            },
            "ResultPath": "$.vars.invoices",
            "Type": "Map",
          },
          "Assign validBills": Object {
            "Comment": undefined,
            "InputPath": "$.vars.bills[?(!(!@.valid))]",
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
                  "Comment": undefined,
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
                "x.$": "$$.Map.Item.Value",
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
                      "Next": "finallizeInvoice(invoice ...",
                      "Not": Object {
                        "Or": Array [
                          Object {
                            "IsPresent": false,
                            "Variable": "$.vars.invoice.billable",
                          },
                          Object {
                            "IsNull": true,
                            "Variable": "$.vars.invoice.billable",
                          },
                          Object {
                            "BooleanEquals": false,
                            "Variable": "$.vars.invoice.billable",
                          },
                          Object {
                            "StringEquals": "",
                            "Variable": "$.vars.invoice.billable",
                          },
                          Object {
                            "StringEquals": "false",
                            "Variable": "$.vars.invoice.billable",
                          },
                          Object {
                            "StringEquals": "0",
                            "Variable": "$.vars.invoice.billable",
                          },
                          Object {
                            "NumericEquals": 0,
                            "Variable": "$.vars.invoice.billable",
                          },
                        ],
                      },
                    },
                  ],
                  "Comment": undefined,
                  "Default": "Task",
                  "Type": "Choice",
                },
                "Task": Object {
                  "Catch": undefined,
                  "Comment": undefined,
                  "End": true,
                  "HeartbeatSeconds": undefined,
                  "Parameters": Object {
                    "Message": Object {
                      "TaskToken": "$$.Task.Token",
                      "billId.$": "$.vars.invoice.billId",
                      "invoiceId.$": "$.vars.invoice.invoiceId",
                      "stage": "olaf",
                    },
                    "Subject": "olaf - Billing Approval",
                    "TopicArn": "BillingManualApproval16216020",
                  },
                  "Resource": "arn::states:::sns:publish.waitForTaskToken",
                  "Retry": undefined,
                  "TimeoutSeconds": undefined,
                  "Type": "Task",
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
                "Next": "Empty",
                "Or": Array [
                  Object {
                    "IsPresent": false,
                    "Variable": "$.vars.shouldFinalize",
                  },
                  Object {
                    "IsNull": true,
                    "Variable": "$.vars.shouldFinalize",
                  },
                  Object {
                    "BooleanEquals": false,
                    "Variable": "$.vars.shouldFinalize",
                  },
                  Object {
                    "StringEquals": "",
                    "Variable": "$.vars.shouldFinalize",
                  },
                  Object {
                    "StringEquals": "false",
                    "Variable": "$.vars.shouldFinalize",
                  },
                  Object {
                    "StringEquals": "0",
                    "Variable": "$.vars.shouldFinalize",
                  },
                  Object {
                    "NumericEquals": 0,
                    "Variable": "$.vars.shouldFinalize",
                  },
                ],
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
