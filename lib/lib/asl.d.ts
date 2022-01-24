import * as asl from 'asl-types';
import { Operator as AslOperator } from 'asl-types/dist/choice';
import { ObjectToCamel } from "ts-case-convert/lib/caseConvert";
export interface AslResource {
}
export interface AslStateMachine extends AslResource {
}
export interface AslLambdaFunction extends AslResource {
}
export interface AslState {
}
export declare type Operator = Omit<AslOperator, "Next"> & {
    NextInvoke: Function;
};
export declare type Choice = Omit<asl.Choice, "Type" | "Choices" | "Default" | "InputPath"> & {
    Input: unknown;
    DefaultInvoke: Function;
    Choices: Operator[];
};
export declare type Task = Omit<asl.Task, "Type" | "Resource" | "InputPath"> & {
    TypescriptInvoke?: Function;
    Resource?: string;
    Input?: unknown;
};
export declare type While = {
    Condition: Omit<AslOperator, "Next">;
    WhileInvoke: Function;
};
export declare type Wait = Omit<asl.Wait, "Type" | "SecondsPath" | "TimestampPath">;
export declare namespace ASL {
    const wait: (x: ObjectToCamel<Wait>) => Promise<void>;
    const parallel: (x: ObjectToCamel<Omit<asl.Parallel, "Type">>) => Promise<AslState>;
    const task: (x: ObjectToCamel<Task>) => Promise<AslState>;
    const choice: (x: ObjectToCamel<Choice>) => Promise<AslState>;
    const _while: (x: ObjectToCamel<While>) => Promise<AslState>;
    const map: (x: ObjectToCamel<Omit<asl.Map, "Type">>) => Promise<AslState>;
    const seq: (x: {
        first: AslState;
        second: AslState;
    }) => Promise<AslState>;
    const pass: (x: ObjectToCamel<Omit<asl.Pass, "Type" | "ResultPath">>) => any;
    const fail: (x: ObjectToCamel<Omit<asl.Fail, "Type">>) => never;
    const succeed: (x: ObjectToCamel<Omit<asl.Succeed, "Type">>) => AslState;
}
export declare namespace Deploy {
    const asLambda: <T>(fn: T) => AslLambdaFunction & T;
    const AsStateMachine: <T>(fn: T) => AslStateMachine & T;
}
