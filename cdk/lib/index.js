"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypescriptStateMachine = void 0;
const aws_stepfunctions_1 = require("@aws-cdk/aws-stepfunctions");
const aws_lambda_1 = require("@aws-cdk/aws-lambda");
const core_1 = require("@aws-cdk/core");
const convert_1 = require("@ts2asl/convert");
const convert_2 = require("@ts2asl/convert");
const aws_lambda_nodejs_1 = require("@aws-cdk/aws-lambda-nodejs");
class TypescriptStateMachine extends core_1.Construct {
    constructor(scope, id, props) {
        //sourceFile, cwd & diagnostics are converted to a definitionString.
        const { sourceFile, cwd, diagnostics } = props;
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
        if (state.Type === "Task") {
            const task = state;
            if (typescriptDict[task.Resource]) {
                task.Resource = typescriptDict[task.Resource];
            }
        }
    }
    return statemachine;
};
