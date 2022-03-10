import * as asl from "@ts2asl/asl-lib";
const createBillJobHandler = (input: EventInput) => { return {} as unknown as BillJobPayload };
const createNonEmptyBillsHandler = (input: BillJobPayload) => { return {} as unknown as NonEmptyBillsPayload };
const ApproveNonEmptyBillHandler = (input: ApproveNonEmptyBillEvent) => { return {} as unknown as ApproveNonEmptyBillPayload };
const CreateInvoiceHandler = (input: Omit<CreateInvoiceEvent, "invoiceId">) => { return input as unknown as CreateInvoiceEvent };
const ValidateInvoiceHandler = (input: Omit<ValidateInvoiceEvent, "valid" | "billable" | "accountType">) => { return input as ValidateInvoiceEvent };
const CreateGithubIssueHandler = (input: HandleInvalidEvent) => { };
const FinallizeInvoiceHandler = (input: HandleInvalidEvent) => { };

export const main = asl.deploy.asStateMachine(
  async (input: EventInput, _context: asl.StateMachineContext<EventInput>) =>{
    const billJob = asl.typescriptInvoke({
        name: "13: createBillJob(input)",
        resource: createBillJob,
        parameters: () => input,
        comment: "createBillJob(input)"
    });
    asl.wait({ seconds: 120 });
    let jobResult = asl.typescriptInvoke({
        name: "16: createNonEmptyBills(billJob)",
        resource: createNonEmptyBills,
        parameters: () => billJob,
        comment: "createNonEmptyBills(billJob)"
    });
    const billPromises = asl.map({
        name: "18: For bill Of jobResult.bil ...",
        items: () => jobResult.bills,
        iterator: bill => {
            const approveNonEmptyBillRequest = asl.pass({
                name: "19: Assign approveNonEmptyBil ...",
                parameters: () => ({ lastDateInBillingPeriod: jobResult.lastDateInBillingPeriod, bill }),
                comment: "approveNonEmptyBillRequest = { lastDateInBillingPeriod: jobResult.lastDateInBillingPeriod, bill }"
            });
            const approvalResult = asl.typescriptInvoke({
                name: "20: approveNonEmptyBill(appro ...",
                resource: approveNonEmptyBill,
                parameters: () => approveNonEmptyBillRequest,
                comment: "approveNonEmptyBill(approveNonEmptyBillRequest)"
            });
            asl.typescriptIf({
                name: "20: If (approvalResult.valid)",
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
                            ApiEndpoint: "yyyyyyyy",
                            Method: "POST",
                            Path: "/xxxxxxxx",
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
        name: "49: Assign bills",
        parameters: () => billPromises
    });
    const validBills = asl.jsonPathFilter(bills, (x) => !!x.valid);
    const invoices = asl.map({
        name: "52: For x Of validBills.map",
        items: () => validBills,
        iterator: x => { asl.typescriptInvoke({
            name: "52: createInvoice(x)",
            resource: createInvoice,
            parameters: () => x,
            comment: "createInvoice(x)"
        }) },
        comment: "validBills.map(async x => createInvoice(x))"
    });
    const validatedInvoices = asl.map({
        name: "53: For x Of invoices.map",
        items: () => invoices,
        iterator: x => { asl.typescriptInvoke({
            name: "53: validateInvoice(x)",
            resource: validateInvoice,
            parameters: () => x,
            comment: "validateInvoice(x)"
        }) },
        comment: "invoices.map(async x => validateInvoice(x))"
    });
    const invalidInvoices = asl.jsonPathFilter(validatedInvoices, (x) => !x.valid);
    asl.typescriptIf({
        name: "55: If (invalidInvoices.lengt ...",
        condition: () => asl.jsonPathLength(invalidInvoices) > 0,
        then: async () => {
            asl.typescriptInvoke({
                name: "57: createGithubIssue({ bills ...",
                resource: createGithubIssue,
                parameters: () => ({ bills: { invalid: invalidInvoices } })
            });
        }
    })
    const validInvoices = asl.jsonPathFilter(validatedInvoices, (x) => x.valid === true);
    asl.typescriptIf({
        name: "60: If (!input.shouldFinalize)",
        condition: () => !input.shouldFinalize,
        then: async () => {
            return;
        },
        comment: "if (!input.shouldFinalize) {\n      return;\n    }"
    })
    asl.map({
        name: "64: For invoice Of validInvoices",
        items: () => validInvoices,
        iterator: invoice => {
            asl.typescriptIf({
                name: "66: If (invoice.billable)",
                condition: () => invoice.billable,
                then: async () => {
                    asl.typescriptInvoke({
                        name: "68: finallizeInvoice(invoice ...",
                        resource: finallizeInvoice,
                        parameters: () => invoice
                    });
                },
                else: async () => {
                    asl.task({
                        resource: "arn::states:::sns:publish.waitForTaskToken",
                        parameters: {
                            TopicArn: "BillingManualApproval16216020",
                            Message: {
                                TaskToken: "$$.Task.Token",
                                billId: invoice.billId,
                                invoiceId: invoice.invoiceId,
                                stage: "olaf"
                            },
                            Subject: "olaf - Billing Approval"
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
