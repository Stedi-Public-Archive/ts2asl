import { CfnStateMachineProps } from "@aws-cdk/aws-stepfunctions";
import { Construct } from "@aws-cdk/core";
import { NodejsFunctionProps } from "@aws-cdk/aws-lambda-nodejs";
export interface TypescriptStateMachineProps {
    defaultStepFunctionProps: Omit<CfnStateMachineProps, "stateMachineName" | "definition" | "definitionS3Location" | "definitionString">;
    defaultFunctionProps: Omit<NodejsFunctionProps, "functionName" | "entry" | "handler" | "runtime">;
    programName: string;
    sourceFile: string;
    cwd?: string;
    diagnostics?: true;
}
export declare class TypescriptStateMachine extends Construct {
    constructor(scope: Construct, id: string, props: TypescriptStateMachineProps);
}
