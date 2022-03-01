import * as asl from "@ts2asl/asl-lib";
const createBillJobHandler = (input: EventInput) => { return {} as unknown as BillJobPayload };
const createNonEmptyBillsHandler = (input: BillJobPayload) => { return {} as unknown as NonEmptyBillsPayload };
const ApproveNonEmptyBillHandler = (input: ApproveNonEmptyBillEvent) => { return {} as unknown as ApproveNonEmptyBillPayload };
const CreateInvoiceHandler = (input: Omit<CreateInvoiceEvent, "invoiceId">) => { return input as unknown as CreateInvoiceEvent };
const ValidateInvoiceHandler = (input: Omit<ValidateInvoiceEvent, "valid" | "billable" | "accountType">) => { return input as ValidateInvoiceEvent };
const CreateGithubIssueHandler = (input: HandleInvalidEvent) => { };
const FinallizeInvoiceHandler = (input: HandleInvalidEvent) => { };

export const main = asl.deploy.asStateMachine(
  async (input: EventInput, _context: asl.StateMachineContext<EventInput>) => {
    const billJob = await createBillJob(input);
    await asl.wait({ seconds: 120 });

    let jobResult = await createNonEmptyBills(billJob);

    const billPromises = jobResult.bills.map(async (bill) => {
      const approveNonEmptyBillRequest = { lastDateInBillingPeriod: jobResult.lastDateInBillingPeriod, bill };
      const approvalResult = await approveNonEmptyBill(approveNonEmptyBillRequest);
      if (approvalResult.valid) {
        return {
          valid: approvalResult.valid,
          billable: approvalResult.billable,
          billId: approvalResult.billId,
          accountId: approvalResult.accountId,
          accountCode: approvalResult.accountCode,
          accountType: approvalResult.accountType,
        } as ApproveNonEmptyBillPayload;
      } else {
        const result = await asl.nativeAPIGatewayInvoke({ //todo: support return asl.task()
          ApiEndpoint: "yyyyyyyy",
          Method: "POST",
          Path: "/xxxxxxxx",
          RequestBody: {
            accountName: (bill as any).accountName,
            accountId: bill.accountId,
            billId: (bill as any).billId,
            errors: (bill as any).errors,
            stage: (bill as any).stage,
          },
        });
        return result as ApproveNonEmptyBillPayload;
      }
    });

    const bills = await Promise.all(billPromises);
    const validBills = bills.filter(x => !!x.valid);

    const invoices = await Promise.all(validBills.map(async x => createInvoice(x)));
    const validatedInvoices = await Promise.all(invoices.map(async x => validateInvoice(x)));

    const invalidInvoices = validatedInvoices.filter(x => !x.valid);
    if (invalidInvoices.length > 0) {
      await createGithubIssue({ bills: { invalid: invalidInvoices } })
    }

    const validInvoices = validatedInvoices.filter(x => x.valid === true);

    if (!input.shouldFinalize) {
      return;
    }

    for (const invoice of validInvoices) {
      if (invoice.billable) {
        await finallizeInvoice(invoice as any);
      } else {
        await asl.task({
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

        })
      }
    }
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
