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
    name?: string;
};
export declare type DoWhile = {
    condition: () => boolean;
    block: Function;
    name?: string;
};
export declare type If = {
    condition: boolean | (() => boolean);
    then: Function;
    else?: Function;
    comment?: string;
    name?: string;
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
    name?: string;
}
export interface Try {
    try: Function;
    catch?: CatchConfiguration;
    finally?: Function;
    comment?: string;
    name?: string;
}
export interface Task {
    name?: string;
    resource: string;
    parameters?: unknown | (() => unknown) | (<U>(objectContext: StateMachineContext<U>) => unknown);
    catch?: CatchConfiguration;
    retry?: RetryConfiguration;
    timeoutSeconds?: number;
    heartbeatSeconds?: number;
}
export interface SdkIntegrationTask<TInput> {
    name?: string;
    parameters: TInput;
    catch?: CatchConfiguration;
    retry?: RetryConfiguration;
    timeoutSeconds?: number;
    heartbeatSeconds?: number;
}
export interface Pass<T> {
    parameters: T | (() => T) | (<U>(objectContext: StateMachineContext<U>) => T);
    comment?: string;
    name?: string;
}
export interface Fail {
    error?: string;
    cause?: string;
    comment?: string;
    name?: string;
}
export interface Map<T, O> {
    parameters?: unknown | (() => unknown) | (<U>(objectContext: StateMachineContext<U>) => unknown);
    items: T[] | undefined | (() => T[]);
    iterator: <U>(item: T, objectContext: StateMachineContext<U>) => O;
    maxConcurrency?: number;
    comment?: string;
    name?: string;
}
export interface Succeed {
    comment?: string;
    name?: string;
}
export interface Parallel<T> {
    items?: T[] | undefined | (() => T[]);
    branches: ((item: T) => void | {})[];
    catch?: CatchConfiguration;
    retry?: RetryConfiguration;
    comment?: string;
    name?: string;
}
export declare type TypescriptInvoke<P, R> = {
    catch?: CatchConfiguration;
    retry?: RetryConfiguration;
    timeoutSeconds?: number;
    heartbeatSeconds?: number;
    comment?: string;
    name?: string;
} & ({
    resource: ((parameters: P) => Promise<R>) | ((parameters: P) => R);
    parameters: P | (() => P);
} | {
    resource: () => (R | Promise<R>);
});
export interface Choice {
    input: unknown | (() => unknown) | (<U>(objectContext: StateMachineContext<U>) => unknown);
    choices: Array<{
        condition: () => boolean;
        block: Function;
    }>;
    default: boolean | (() => boolean);
    comment?: string;
    name?: string;
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
export declare const typescriptInvoke: <P, R>(args: TypescriptInvoke<P, R>) => Promise<R>;
export declare const typescriptTry: (args: Try) => Promise<AslState>;
export declare const typescriptDoWhile: (args: DoWhile) => Promise<AslState>;
export declare const typescriptWhile: (args: While) => Promise<AslState>;
export declare const typescriptIf: (args: If) => Promise<AslState>;
export declare const task: <TResult>(args: Task) => Promise<TResult>;
export declare const wait: (args: Wait) => Promise<void>;
export declare const parallel: <Item>(args: Parallel<Item>) => Promise<AslState>;
export declare const choice: (args: Choice) => Promise<AslState>;
export declare const map: <Input, Output>(args: Map<Input, Output>) => Promise<Output[]>;
export declare const pass: <T>(args: Pass<T>) => T;
export declare const succeed: (x: Succeed) => AslState;
export declare const fail: (x: Fail) => never;
export declare const jsonPathLength: <T>(items: T[]) => number;
export declare const jsonPathFilter: <T>(items: T[], predicate: (x: T) => boolean) => T[];
export declare const jsonPathSlice: <T>(items: T[], start: number, end?: number | undefined, step?: number | undefined) => T[];
export declare const jsonPathExpression: (items: unknown, expression: string) => unknown;
export declare namespace states {
    function format(format: string, ...args: unknown[]): string;
    function stringToJson(arg: string | undefined): unknown;
    function jsonToString(arg: unknown): string;
    function array(...args: unknown[]): unknown[];
}
