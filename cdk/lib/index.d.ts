import * as sfn from "@aws-cdk/aws-stepfunctions";
import { Construct } from "@aws-cdk/core";
import { ConverterOptions } from "@ts2asl/convert";
import { NodejsFunction, NodejsFunctionProps } from "@aws-cdk/aws-lambda-nodejs";
export interface TypescriptStateMachineProps {
    defaultStepFunctionProps: Omit<sfn.StateMachineProps, "stateMachineName" | "definition">;
    stepFunctionProps?: Record<string, Omit<sfn.StateMachineProps, "stateMachineName" | "definition">>;
    defaultFunctionProps?: Omit<NodejsFunctionProps, "functionName" | "entry" | "handler" | "runtime">;
    functionProps?: Record<string, Omit<NodejsFunctionProps, "functionName" | "entry" | "handler" | "runtime">>;
    programName: string;
    sourceFile: string;
    conversionOptions?: ConverterOptions & {
        emitStateLanguageFiles?: true;
    };
    cwd?: string;
    parameters?: Record<string, string>;
}
export declare class TypescriptStateMachine extends Construct {
    functions: Record<string, NodejsFunction>;
    stateMachines: Record<string, sfn.StateMachine>;
    constructor(scope: Construct, id: string, props: TypescriptStateMachineProps);
}
