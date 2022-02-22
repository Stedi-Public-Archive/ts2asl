
import { internalWaitSeconds } from './asl-internals';
import util from 'util';

export interface AslResource { }
export interface AslStateMachine extends AslResource { }
export interface AslLambdaFunction extends AslResource { }
export interface AslState { }

// export type Operator = Omit<AslOperator, "Next"> & { NextInvoke: Function };
// //export type Choice = Omit<asl.Choice, "Type" | "Choices" | "Default" | "InputPath"> & { input: unknown, default: Function, choices: { when: boolean, then: Function }[] };
// //export type Task = Omit<asl.Task, "Type" | "Resource" | "InputPath"> & { TypescriptInvoke?: Function, Resource?: string, Input?: unknown };
// export type Parallel_ = Omit<asl.Parallel, "Type" | "Branches"> & { branches: Function[] };

export type While = { condition: () => boolean; block: Function };
export type DoWhile = { block: Function; condition: () => boolean };
export type If = {
  condition: boolean | (() => boolean),
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
}>

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
  name?: string;
}
export interface Fail {
  error?: string;
  cause?: string;
  comment?: string;
  name?: string;
}

export interface Map<T> {
  parameters?: unknown | (() => unknown) | (<U>(objectContext: StateMachineContext<U>) => unknown);
  items: T[] | undefined | (() => T[]);
  iterator: <U>(item: T, objectContext: StateMachineContext<U>) => void | {};
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
  branches: ((item: T) => void | {})[],
  catch?: CatchConfiguration;
  retry?: RetryConfiguration;
  comment?: string;
  name?: string;
}

export interface Invoke<P, R> {
  target: ((parameters?: P) => Promise<R>) | ((parameters?: P) => R);
  parameters?: P | (() => P);
  comment?: string;
  name?: string;
}

export interface Choice {
  input: unknown | (() => unknown) | (<U>(objectContext: StateMachineContext<U>) => unknown);
  choices: Array<{ condition: () => boolean; block: Function }>;
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

export const typescriptInvoke = async <P, R>(args: Invoke<P, R>): Promise<R> => {
  return args.target(args.parameters as P);
}

export const typescriptTry = async (args: Try) => {
  return {} as AslState;
}

export const typescriptDoWhile = async (args: DoWhile) => {
  do {
    args.block();
  } while (typeof args.condition === "function" ? args.condition() : args)
  return {} as AslState;
}

export const typescriptWhile = async (args: While) => {
  while (typeof args.condition === "function" ? args.condition() : args) {
    args.block();
  }
  return {} as AslState;
}

export const typescriptIf = async (args: If) => {
  return {} as AslState;
}
export const task = async <TResult>(args: Task): Promise<TResult> => {
  return Promise.resolve({} as TResult);
}

export const wait = async (args: Wait) => {
  await internalWaitSeconds(args.seconds as number);
}

export const parallel = async <Item>(args: Parallel<Item>) => {
  return {} as AslState;
}

export const choice = async (args: Choice) => {
  return {} as AslState;
}

export const map = async <Item>(args: Map<Item>) => {
  return {} as AslState;
}

export const pass = <T>(args: Pass<T>): T => {
  return args.parameters as T;
}

export const succeed = (x: Succeed) => {
  return {} as AslState;
}

export const fail = (x: Fail): never => {
  throw new Error(x.cause);
}
export namespace states {
  export function format(format: string, ...args: unknown[]): unknown {
    const formatNode = format.replace(/{}/g, '%s')
    return util.format(formatNode, ...args);
  }

  export function stringToJson(arg: string | undefined): unknown {
    if (arg === undefined) return undefined;
    return JSON.parse(arg);
  }
  export function jsonToString(arg: unknown): string {
    switch (typeof arg) {
      case "number":
      case "boolean":
      case "string":
        arg.toString();
        break;
    }
    return JSON.stringify(arg);
  }
  export function array(...args: unknown[]): unknown[] {
    return args;
  }
}