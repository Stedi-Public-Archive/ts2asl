import { TextractClient } from "@aws-sdk/client-textract";
import { clientConfig } from ".";
import { SdkIntegrationTask } from "./asl";
import { AnalyzeDocumentCommandInput, AnalyzeDocumentCommandOutput, AnalyzeDocumentCommand } from "@aws-sdk/client-textract";
import { AnalyzeExpenseCommandInput, AnalyzeExpenseCommandOutput, AnalyzeExpenseCommand } from "@aws-sdk/client-textract";
import { DetectDocumentTextCommandInput, DetectDocumentTextCommandOutput, DetectDocumentTextCommand } from "@aws-sdk/client-textract";
import { GetDocumentAnalysisCommandInput, GetDocumentAnalysisCommandOutput, GetDocumentAnalysisCommand } from "@aws-sdk/client-textract";
import { GetDocumentTextDetectionCommandInput, GetDocumentTextDetectionCommandOutput, GetDocumentTextDetectionCommand } from "@aws-sdk/client-textract";
import { StartDocumentAnalysisCommandInput, StartDocumentAnalysisCommandOutput, StartDocumentAnalysisCommand } from "@aws-sdk/client-textract";
import { StartDocumentTextDetectionCommandInput, StartDocumentTextDetectionCommandOutput, StartDocumentTextDetectionCommand } from "@aws-sdk/client-textract";


/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:textract:analyzeDocument'*/
export const sdkTextractAnalyzeDocument = (input: SdkIntegrationTask<AnalyzeDocumentCommandInput>): Promise<AnalyzeDocumentCommandOutput> => {
    const textract = new TextractClient(clientConfig);
    const command = new AnalyzeDocumentCommand(input.parameters);
    return textract.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:textract:analyzeExpense'*/
export const sdkTextractAnalyzeExpense = (input: SdkIntegrationTask<AnalyzeExpenseCommandInput>): Promise<AnalyzeExpenseCommandOutput> => {
    const textract = new TextractClient(clientConfig);
    const command = new AnalyzeExpenseCommand(input.parameters);
    return textract.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:textract:detectDocumentText'*/
export const sdkTextractDetectDocumentText = (input: SdkIntegrationTask<DetectDocumentTextCommandInput>): Promise<DetectDocumentTextCommandOutput> => {
    const textract = new TextractClient(clientConfig);
    const command = new DetectDocumentTextCommand(input.parameters);
    return textract.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:textract:getDocumentAnalysis'*/
export const sdkTextractGetDocumentAnalysis = (input: SdkIntegrationTask<GetDocumentAnalysisCommandInput>): Promise<GetDocumentAnalysisCommandOutput> => {
    const textract = new TextractClient(clientConfig);
    const command = new GetDocumentAnalysisCommand(input.parameters);
    return textract.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:textract:getDocumentTextDetection'*/
export const sdkTextractGetDocumentTextDetection = (input: SdkIntegrationTask<GetDocumentTextDetectionCommandInput>): Promise<GetDocumentTextDetectionCommandOutput> => {
    const textract = new TextractClient(clientConfig);
    const command = new GetDocumentTextDetectionCommand(input.parameters);
    return textract.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:textract:startDocumentAnalysis'*/
export const sdkTextractStartDocumentAnalysis = (input: SdkIntegrationTask<StartDocumentAnalysisCommandInput>): Promise<StartDocumentAnalysisCommandOutput> => {
    const textract = new TextractClient(clientConfig);
    const command = new StartDocumentAnalysisCommand(input.parameters);
    return textract.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:textract:startDocumentTextDetection'*/
export const sdkTextractStartDocumentTextDetection = (input: SdkIntegrationTask<StartDocumentTextDetectionCommandInput>): Promise<StartDocumentTextDetectionCommandOutput> => {
    const textract = new TextractClient(clientConfig);
    const command = new StartDocumentTextDetectionCommand(input.parameters);
    return textract.send(command);
};

