export interface AslResource {
}
export interface AslStateMachine extends AslResource {
}
export interface AslLambdaFunction extends AslResource {
}
export interface AslState {
}
export declare type While = {
    condition: () => boolean;
    block: Function;
};
export declare type DoWhile = {
    block: Function;
    condition: () => boolean;
};
export declare type If = {
    condition: boolean | (() => boolean);
    then: Function;
    else?: Function;
    comment?: string;
};
export declare type CatchConfiguration = Array<{
    errorFilter: string[];
    block: Function;
}>;
export declare type RetryConfiguration = Array<{
    errorFilter: string[];
    intervalSeconds?: number;
    maxAttempts?: number;
    backoffRate?: number;
}>;
export interface Wait {
    seconds?: number | (() => number);
    timestamp?: string | (() => string);
    comment?: string;
}
export interface Try {
    try: Function;
    catch?: CatchConfiguration;
    finally?: Function;
    comment?: string;
}
export interface Task {
    resource: string;
    parameters?: unknown | (() => unknown) | (<U>(objectContext: StateMachineContext<U>) => unknown);
    catch?: CatchConfiguration;
    retry?: RetryConfiguration;
    timeoutSeconds?: number;
    heartbeatSeconds?: number;
}
export interface Pass<T> {
    parameters: T | (() => T) | (<U>(objectContext: StateMachineContext<U>) => T);
    comment?: string;
}
export interface Fail {
    error?: string;
    cause?: string;
    comment?: string;
}
export interface Map<T> {
    parameters?: unknown | (() => unknown) | (<U>(objectContext: StateMachineContext<U>) => unknown);
    items: T[] | undefined | (() => T[]);
    iterator: <U>(item: T, objectContext: StateMachineContext<U>) => void | {};
    maxConcurrency?: number;
    comment?: string;
}
export interface Succeed {
    comment?: string;
}
export interface Parallel<T> {
    items?: T[] | undefined | (() => T[]);
    branches: ((item: T) => void | {})[];
    catch?: CatchConfiguration;
    retry?: RetryConfiguration;
    comment?: string;
}
export interface Invoke<P, R> {
    target: ((parameters?: P) => Promise<R>) | ((parameters?: P) => R);
    parameters?: P | (() => P);
    comment?: string;
}
export interface Choice {
    input: unknown | (() => unknown) | (<U>(objectContext: StateMachineContext<U>) => unknown);
    choices: Array<{
        condition: () => boolean;
        block: Function;
    }>;
    default: boolean | (() => boolean);
    comment?: string;
}
export interface StateMachineContext<TInput> {
    readonly execution: {
        readonly id: string;
        readonly input: TInput;
        readonly name: string;
        readonly roleArn: string;
        readonly startTime: string;
    };
    readonly stateMachine: {
        readonly id: string;
        readonly name: string;
    };
    readonly state: {
        readonly name: string;
        readonly enteredTime: string;
    };
}
export declare const typescriptInvoke: <P, R>(args: Invoke<P, R>) => Promise<R>;
export declare const typescriptTry: (args: Try) => Promise<AslState>;
export declare const typescriptDoWhile: (args: DoWhile) => Promise<AslState>;
export declare const typescriptWhile: (args: While) => Promise<AslState>;
export declare const typescriptIf: (args: If) => Promise<AslState>;
export declare const task: <TResult>(args: Task) => Promise<TResult>;
export declare const wait: (args: Wait) => Promise<void>;
export declare const parallel: <Item>(args: Parallel<Item>) => Promise<AslState>;
export declare const choice: (args: Choice) => Promise<AslState>;
export declare const map: <Item>(args: Map<Item>) => Promise<AslState>;
export declare const pass: <T>(args: Pass<T>) => T;
export declare const succeed: (x: Succeed) => AslState;
export declare const fail: (x: Fail) => never;
export declare namespace states {
    function format(format: string, ...args: unknown[]): unknown;
    function stringToJson(arg: string | undefined): unknown;
    function jsonToString(arg: unknown): string;
    function array(...args: unknown[]): unknown[];
}
