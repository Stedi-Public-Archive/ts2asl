import { TextractClient } from "@aws-sdk/client-textract";
import { AnalyzeDocumentCommandInput, AnalyzeDocumentCommandOutput, AnalyzeDocumentCommand } from "@aws-sdk/client-textract";
import { AnalyzeExpenseCommandInput, AnalyzeExpenseCommandOutput, AnalyzeExpenseCommand } from "@aws-sdk/client-textract";
import { DetectDocumentTextCommandInput, DetectDocumentTextCommandOutput, DetectDocumentTextCommand } from "@aws-sdk/client-textract";
import { GetDocumentAnalysisCommandInput, GetDocumentAnalysisCommandOutput, GetDocumentAnalysisCommand } from "@aws-sdk/client-textract";
import { GetDocumentTextDetectionCommandInput, GetDocumentTextDetectionCommandOutput, GetDocumentTextDetectionCommand } from "@aws-sdk/client-textract";
import { StartDocumentAnalysisCommandInput, StartDocumentAnalysisCommandOutput, StartDocumentAnalysisCommand } from "@aws-sdk/client-textract";
import { StartDocumentTextDetectionCommandInput, StartDocumentTextDetectionCommandOutput, StartDocumentTextDetectionCommand } from "@aws-sdk/client-textract";


/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:textract:analyzeDocument'*/
export const nativeTextractAnalyzeDocument = (input: AnalyzeDocumentCommandInput): Promise<AnalyzeDocumentCommandOutput> => {
    const textract = new TextractClient({});
    const command = new AnalyzeDocumentCommand(input);
    return textract.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:textract:analyzeExpense'*/
export const nativeTextractAnalyzeExpense = (input: AnalyzeExpenseCommandInput): Promise<AnalyzeExpenseCommandOutput> => {
    const textract = new TextractClient({});
    const command = new AnalyzeExpenseCommand(input);
    return textract.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:textract:detectDocumentText'*/
export const nativeTextractDetectDocumentText = (input: DetectDocumentTextCommandInput): Promise<DetectDocumentTextCommandOutput> => {
    const textract = new TextractClient({});
    const command = new DetectDocumentTextCommand(input);
    return textract.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:textract:getDocumentAnalysis'*/
export const nativeTextractGetDocumentAnalysis = (input: GetDocumentAnalysisCommandInput): Promise<GetDocumentAnalysisCommandOutput> => {
    const textract = new TextractClient({});
    const command = new GetDocumentAnalysisCommand(input);
    return textract.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:textract:getDocumentTextDetection'*/
export const nativeTextractGetDocumentTextDetection = (input: GetDocumentTextDetectionCommandInput): Promise<GetDocumentTextDetectionCommandOutput> => {
    const textract = new TextractClient({});
    const command = new GetDocumentTextDetectionCommand(input);
    return textract.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:textract:startDocumentAnalysis'*/
export const nativeTextractStartDocumentAnalysis = (input: StartDocumentAnalysisCommandInput): Promise<StartDocumentAnalysisCommandOutput> => {
    const textract = new TextractClient({});
    const command = new StartDocumentAnalysisCommand(input);
    return textract.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:textract:startDocumentTextDetection'*/
export const nativeTextractStartDocumentTextDetection = (input: StartDocumentTextDetectionCommandInput): Promise<StartDocumentTextDetectionCommandOutput> => {
    const textract = new TextractClient({});
    const command = new StartDocumentTextDetectionCommand(input);
    return textract.send(command);
};

