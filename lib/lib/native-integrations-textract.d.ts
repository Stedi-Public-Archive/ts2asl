import { AnalyzeDocumentCommandInput, AnalyzeDocumentCommandOutput } from "@aws-sdk/client-textract";
import { AnalyzeExpenseCommandInput, AnalyzeExpenseCommandOutput } from "@aws-sdk/client-textract";
import { DetectDocumentTextCommandInput, DetectDocumentTextCommandOutput } from "@aws-sdk/client-textract";
import { GetDocumentAnalysisCommandInput, GetDocumentAnalysisCommandOutput } from "@aws-sdk/client-textract";
import { GetDocumentTextDetectionCommandInput, GetDocumentTextDetectionCommandOutput } from "@aws-sdk/client-textract";
import { StartDocumentAnalysisCommandInput, StartDocumentAnalysisCommandOutput } from "@aws-sdk/client-textract";
import { StartDocumentTextDetectionCommandInput, StartDocumentTextDetectionCommandOutput } from "@aws-sdk/client-textract";
export declare namespace ASL {
    const nativeTextractAnalyzeDocument: (input: AnalyzeDocumentCommandInput) => Promise<AnalyzeDocumentCommandOutput>;
    const nativeTextractAnalyzeExpense: (input: AnalyzeExpenseCommandInput) => Promise<AnalyzeExpenseCommandOutput>;
    const nativeTextractDetectDocumentText: (input: DetectDocumentTextCommandInput) => Promise<DetectDocumentTextCommandOutput>;
    const nativeTextractGetDocumentAnalysis: (input: GetDocumentAnalysisCommandInput) => Promise<GetDocumentAnalysisCommandOutput>;
    const nativeTextractGetDocumentTextDetection: (input: GetDocumentTextDetectionCommandInput) => Promise<GetDocumentTextDetectionCommandOutput>;
    const nativeTextractStartDocumentAnalysis: (input: StartDocumentAnalysisCommandInput) => Promise<StartDocumentAnalysisCommandOutput>;
    const nativeTextractStartDocumentTextDetection: (input: StartDocumentTextDetectionCommandInput) => Promise<StartDocumentTextDetectionCommandOutput>;
}
