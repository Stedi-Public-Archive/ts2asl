"use strict";
exports.__esModule = true;
exports.ASL = void 0;
var client_textract_1 = require("@aws-sdk/client-textract");
var client_textract_2 = require("@aws-sdk/client-textract");
var client_textract_3 = require("@aws-sdk/client-textract");
var client_textract_4 = require("@aws-sdk/client-textract");
var client_textract_5 = require("@aws-sdk/client-textract");
var client_textract_6 = require("@aws-sdk/client-textract");
var client_textract_7 = require("@aws-sdk/client-textract");
var client_textract_8 = require("@aws-sdk/client-textract");
var ASL;
(function (ASL) {
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:textract:analyzeDocument'*/
    ASL.nativeTextractAnalyzeDocument = function (input) {
        var textract = new client_textract_1.TextractClient({});
        var command = new client_textract_2.AnalyzeDocumentCommand(input);
        return textract.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:textract:analyzeExpense'*/
    ASL.nativeTextractAnalyzeExpense = function (input) {
        var textract = new client_textract_1.TextractClient({});
        var command = new client_textract_3.AnalyzeExpenseCommand(input);
        return textract.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:textract:detectDocumentText'*/
    ASL.nativeTextractDetectDocumentText = function (input) {
        var textract = new client_textract_1.TextractClient({});
        var command = new client_textract_4.DetectDocumentTextCommand(input);
        return textract.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:textract:getDocumentAnalysis'*/
    ASL.nativeTextractGetDocumentAnalysis = function (input) {
        var textract = new client_textract_1.TextractClient({});
        var command = new client_textract_5.GetDocumentAnalysisCommand(input);
        return textract.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:textract:getDocumentTextDetection'*/
    ASL.nativeTextractGetDocumentTextDetection = function (input) {
        var textract = new client_textract_1.TextractClient({});
        var command = new client_textract_6.GetDocumentTextDetectionCommand(input);
        return textract.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:textract:startDocumentAnalysis'*/
    ASL.nativeTextractStartDocumentAnalysis = function (input) {
        var textract = new client_textract_1.TextractClient({});
        var command = new client_textract_7.StartDocumentAnalysisCommand(input);
        return textract.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:textract:startDocumentTextDetection'*/
    ASL.nativeTextractStartDocumentTextDetection = function (input) {
        var textract = new client_textract_1.TextractClient({});
        var command = new client_textract_8.StartDocumentTextDetectionCommand(input);
        return textract.send(command);
    };
})(ASL = exports.ASL || (exports.ASL = {}));
