"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypescriptStateMachine = void 0;
const aws_stepfunctions_1 = require("@aws-cdk/aws-stepfunctions");
const aws_lambda_1 = require("@aws-cdk/aws-lambda");
const core_1 = require("@aws-cdk/core");
const convert_1 = require("@ts2asl/convert");
const convert_2 = require("@ts2asl/convert");
const aws_lambda_nodejs_1 = require("@aws-cdk/aws-lambda-nodejs");
const asl = __importStar(require("@ts2asl/asl-lib"));
class TypescriptStateMachine extends core_1.Construct {
    constructor(scope, id, props) {
        var _a;
        //sourceFile, cwd & diagnostics are converted to a definitionString.
        const { sourceFile, cwd, diagnostics } = props;
        for (const [key, val] of Object.entries((_a = props.parameters) !== null && _a !== void 0 ? _a : {})) {
            asl.deploy.setParameter(key, val);
        }
        const compilerHost = (0, convert_2.createCompilerHostFromFile)(sourceFile, cwd);
        const converter = new convert_1.Converter(compilerHost);
        const converted = converter.convert(diagnostics);
        super(scope, id);
        const typescriptDict = {};
        for (const lambda of converted.lambdas) {
            const entry = sourceFile;
            const handler = lambda.name;
            const fn = new aws_lambda_nodejs_1.NodejsFunction(scope, lambda.name, {
                ...props.defaultFunctionProps,
                functionName: `${props.programName}_${lambda.name}`,
                entry,
                handler,
                runtime: aws_lambda_1.Runtime.NODEJS_14_X
            });
            typescriptDict["typescript:" + lambda.name] = fn.functionArn;
        }
        for (const step of converted.stateMachines) {
            const replaced = replaceFunctionArns(step.asl, typescriptDict);
            new aws_stepfunctions_1.CfnStateMachine(scope, `${id}_${step.name}`, {
                ...props.defaultStepFunctionProps,
                definitionString: JSON.stringify(replaced, null, 2),
                stateMachineName: `${props.programName}_${step.name}`
            });
        }
    }
}
exports.TypescriptStateMachine = TypescriptStateMachine;
const replaceFunctionArns = (statemachine, typescriptDict) => {
    for (const state of Object.values(statemachine.States)) {
        if (state.Type === "Map") {
            replaceFunctionArns(state.Iterator, typescriptDict);
        }
        if (state.Type === "Parallel") {
            for (const branch of state.Branches) {
                replaceFunctionArns(branch, typescriptDict);
            }
        }
        if (state.Type === "Task") {
            const task = state;
            if (typescriptDict[task.Resource]) {
                task.Resource = typescriptDict[task.Resource];
            }
        }
    }
    return statemachine;
};
