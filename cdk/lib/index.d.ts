import { CfnStateMachineProps } from "@aws-cdk/aws-stepfunctions";
import { Construct } from "@aws-cdk/core";
import { ConverterOptions } from "@ts2asl/convert";
import { NodejsFunctionProps } from "@aws-cdk/aws-lambda-nodejs";
export interface TypescriptStateMachineProps {
    defaultStepFunctionProps: Omit<CfnStateMachineProps, "stateMachineName" | "definition" | "definitionS3Location" | "definitionString">;
    stepFunctionProps?: Record<string, Omit<CfnStateMachineProps, "stateMachineName" | "definition" | "definitionS3Location" | "definitionString">>;
    defaultFunctionProps?: Omit<NodejsFunctionProps, "functionName" | "entry" | "handler" | "runtime">;
    functionProps?: Record<string, Omit<NodejsFunctionProps, "functionName" | "entry" | "handler" | "runtime">>;
    programName: string;
    sourceFile: string;
    conversionOptions?: ConverterOptions;
    cwd?: string;
    parameters?: Record<string, unknown>;
}
export declare class TypescriptStateMachine extends Construct {
    constructor(scope: Construct, id: string, props: TypescriptStateMachineProps);
}