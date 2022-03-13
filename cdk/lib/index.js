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
        var _a, _b, _c, _d, _e, _f, _g;
        //sourceFile, cwd & diagnostics are converted to a definitionString.
        const { sourceFile, cwd } = props;
        for (const [key, val] of Object.entries((_a = props.parameters) !== null && _a !== void 0 ? _a : {})) {
            asl.deploy.setParameter(key, val);
        }
        const compilerHost = (0, convert_2.createCompilerHostFromFile)(sourceFile, cwd);
        const converter = new convert_1.Converter(compilerHost);
        const options = (_b = props.conversionOptions) !== null && _b !== void 0 ? _b : {};
        options.getParameter = (_c = options.getParameter) !== null && _c !== void 0 ? _c : asl.deploy.getParameter;
        const converted = converter.convert(options);
        super(scope, id);
        const arnDict = {};
        for (const lambda of converted.lambdas) {
            const entry = sourceFile;
            const handler = lambda.name;
            const fnProps = (_e = (_d = props.functionProps) === null || _d === void 0 ? void 0 : _d[lambda.name]) !== null && _e !== void 0 ? _e : {};
            const fn = new aws_lambda_nodejs_1.NodejsFunction(scope, lambda.name, {
                ...props.defaultFunctionProps,
                ...fnProps,
                functionName: `${props.programName}_${lambda.name}`,
                entry,
                handler,
                runtime: aws_lambda_1.Runtime.NODEJS_14_X
            });
            arnDict["lambda:" + lambda.name] = fn.functionArn;
        }
        const stateMachines = [];
        for (const step of converted.stateMachines) {
            const sfnProps = (_g = (_f = props.stepFunctionProps) === null || _f === void 0 ? void 0 : _f[step.name]) !== null && _g !== void 0 ? _g : {};
            const sm = new aws_stepfunctions_1.CfnStateMachine(scope, `${id}_${step.name}`, {
                ...props.defaultStepFunctionProps,
                ...sfnProps,
                definition: step.asl,
                stateMachineName: `${props.programName}_${step.name}`
            });
            arnDict["statemachine:" + step.name] = sm.attrArn;
            stateMachines.push(sm);
        }
        for (const sm of stateMachines) {
            const replaced = replaceArns(sm.definition, arnDict);
            sm.definitionString = JSON.stringify(replaced, null, 2);
            delete sm.definition;
        }
    }
}
exports.TypescriptStateMachine = TypescriptStateMachine;
const replaceArns = (statemachine, arnDict) => {
    for (const state of Object.values(statemachine.States)) {
        if (state.Type === "Map") {
            replaceArns(state.Iterator, arnDict);
        }
        if (state.Type === "Parallel") {
            for (const branch of state.Branches) {
                replaceArns(branch, arnDict);
            }
        }
        if (state.Type === "Task") {
            const task = state;
            if (arnDict[task.Resource]) {
                task.Resource = arnDict[task.Resource];
            }
            else if (task.Resource === "arn:aws:states:::aws-sdk:sfn:startExecution") {
                if (task.Parameters && task.Parameters.StateMachineArn) {
                    if (arnDict[task.Parameters.StateMachineArn]) {
                        task.Parameters.StateMachineArn = arnDict[task.Parameters.StateMachineArn];
                    }
                }
            }
        }
    }
    return statemachine;
};
