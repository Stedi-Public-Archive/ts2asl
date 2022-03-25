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
        var _a, _b, _c, _d, _e, _f, _g, _h;
        //sourceFile, cwd & diagnostics are converted to a definitionString.
        const { sourceFile, cwd } = props;
        const compilerHost = (0, convert_2.createCompilerHostFromFile)(sourceFile, cwd);
        const converter = new convert_1.Converter(compilerHost);
        const options = (_a = props.conversionOptions) !== null && _a !== void 0 ? _a : {};
        const converted = converter.convert(options);
        super(scope, id);
        const arnDict = {};
        const foundLambdaNames = [];
        this.functions = {};
        for (const lambda of converted.lambdas) {
            const logicalId = `${id}${lambda.name.substring(0, 1).toUpperCase()}${lambda.name.substring(1)}`;
            const entry = sourceFile;
            const handler = lambda.name;
            const fnProps = (_c = (_b = props.functionProps) === null || _b === void 0 ? void 0 : _b[lambda.name]) !== null && _c !== void 0 ? _c : {};
            const fn = new aws_lambda_nodejs_1.NodejsFunction(scope, logicalId, {
                ...props.defaultFunctionProps,
                ...fnProps,
                entry,
                handler,
                runtime: aws_lambda_1.Runtime.NODEJS_14_X
            });
            arnDict["lambda:" + lambda.name] = fn.functionArn;
            this.functions[lambda.name] = fn;
            foundLambdaNames.push(lambda.name);
        }
        const expectedLambdaNames = Object.keys((_d = props.functionProps) !== null && _d !== void 0 ? _d : {});
        const missingLambdas = expectedLambdaNames.filter(name => !foundLambdaNames.includes(name));
        if (missingLambdas.length) {
            throw new Error(`CDK Configuration expected to find the following lambdas that weren't part of the source: ${missingLambdas.join(", ")}`);
        }
        const stateMachines = [];
        this.stateMachines = {};
        const foundStateMachineNames = [];
        for (const step of converted.stateMachines) {
            const logicalId = `${id}${step.name.substring(0, 1).toUpperCase()}${step.name.substring(1)}`;
            const sfnProps = (_f = (_e = props.stepFunctionProps) === null || _e === void 0 ? void 0 : _e[step.name]) !== null && _f !== void 0 ? _f : {};
            const sm = new aws_stepfunctions_1.CfnStateMachine(scope, logicalId, {
                ...props.defaultStepFunctionProps,
                ...sfnProps,
                definition: step.asl,
            });
            arnDict["statemachine:" + step.name] = sm.attrArn;
            stateMachines.push(sm);
            this.stateMachines[step.name] = sm;
            foundStateMachineNames.push(step.name);
        }
        const expectedStateMachineNames = Object.keys((_g = props.stepFunctionProps) !== null && _g !== void 0 ? _g : {});
        const missingStateMachines = expectedStateMachineNames.filter(name => !foundStateMachineNames.includes(name));
        if (missingStateMachines.length) {
            throw new Error(`CDK Configuration expected to find the following state machines that weren't part of the source: ${missingStateMachines.join(", ")}`);
        }
        for (const sm of stateMachines) {
            const replaced = replaceArns(sm.definition, arnDict);
            const stringified = JSON.stringify(replaced, null, 2);
            sm.definitionString = replaceExpressions(stringified, (_h = props.parameters) !== null && _h !== void 0 ? _h : {}, this.stateMachines, this.functions);
            delete sm.definition;
        }
    }
}
exports.TypescriptStateMachine = TypescriptStateMachine;
const replaceExpressions = (input, parameters, satemachines, functions) => {
    const replaced1 = input.replace(/\[!(lambda|state-machine)\[(\w*)\](name|arn)\]/g, (val, type, name, attrib) => {
        // const type = groups[0];
        // const name = groups[1];
        // const attrib = groups[2];
        switch (type) {
            case "lambda":
                const lambda = functions[name];
                if (!lambda)
                    throw Error(`cannot replace expression. lambda called '${name}' not found, complete expression ${val}`);
                switch (attrib) {
                    case "arn":
                        return lambda.functionArn;
                    case "name":
                        return lambda.functionName;
                    default:
                        throw Error(`cannot replace expression. unknown attribute '${attrib}', complete expression ${val}`);
                }
            case "state-machine":
                const statemachine = satemachines[name];
                if (!statemachine)
                    throw Error(`cannot replace expression. state-machine called '${name}' not found, complete expression ${val}`);
                switch (attrib) {
                    case "arn":
                        return statemachine.attrArn;
                    case "name":
                        return statemachine.attrName;
                    default:
                        throw Error(`cannot replace expression. unknown attribute '${attrib}', complete expression ${val}`);
                }
            default:
                throw Error(`cannot replace expression of type ${type}, complete expression ${val}`);
        }
    });
    const replaced2 = replaced1.replace(/\[!parameter\[(\w*)\]]/g, (_val, paramName) => {
        if (parameters[paramName] === undefined) {
            throw new Error(`Unable to resolve parameter ${paramName}`);
        }
        return parameters[paramName];
    });
    return replaced2;
};
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
