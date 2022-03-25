import { CfnStateMachine, CfnStateMachineProps } from "@aws-cdk/aws-stepfunctions";
import { Construct } from "@aws-cdk/core";
import { ConverterOptions } from "@ts2asl/convert";
import { NodejsFunction, NodejsFunctionProps } from "@aws-cdk/aws-lambda-nodejs";
export interface TypescriptStateMachineProps {
    defaultStepFunctionProps: Omit<CfnStateMachineProps, "stateMachineName" | "definition" | "definitionS3Location" | "definitionString">;
    stepFunctionProps?: Record<string, Omit<CfnStateMachineProps, "stateMachineName" | "definition" | "definitionS3Location" | "definitionString">>;
    defaultFunctionProps?: Omit<NodejsFunctionProps, "functionName" | "entry" | "handler" | "runtime">;
    functionProps?: Record<string, Omit<NodejsFunctionProps, "functionName" | "entry" | "handler" | "runtime">>;
    programName: string;
    sourceFile: string;
    conversionOptions?: ConverterOptions;
    cwd?: string;
    parameters?: Record<string, string>;
}
export declare class TypescriptStateMachine extends Construct {
    functions: Record<string, NodejsFunction>;
    stateMachines: Record<string, CfnStateMachine>;
    constructor(scope: Construct, id: string, props: TypescriptStateMachineProps);
}
