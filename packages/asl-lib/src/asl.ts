
import { internalWaitSeconds } from './asl-internals';
import util from 'util';
import { runtime } from './runtime';

export type AslError = {
  Cause: string;
  Error: string;
}

export declare type CatchConfiguration = Array<{
  errorEquals: string[];
  block: (error?: AslError) => unknown;
}>;

export declare type RetryConfiguration = Array<{
  errorEquals: string[];
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
  branches: (() => void | {})[],
  catch?: CatchConfiguration;
  retry?: RetryConfiguration;
  comment?: string;
  name?: string;
}

export type TypescriptInvoke<P, R> = {
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
  resource: () => (R | Promise<R>)
})

export interface Choice {
  choices: Array<{ condition: () => boolean; block: Function }>;
  default?: Function;
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
  readonly task: {
    readonly name: string;
    readonly token?: string
  };
}

export const typescriptInvoke = async <P, R>(args: TypescriptInvoke<P, R>): Promise<R> => {
  if ("parameters" in args) {
    return args.resource(args.parameters as P);
  } else {
    return args.resource();
  }
}

export const task = async <TResult>(args: Task): Promise<TResult> => {
  return Promise.resolve({} as TResult);
}

export const wait = async (args: Wait) => {
  await internalWaitSeconds(args.seconds as number);
}

export const parallel = async <Item>(args: Parallel<Item>): Promise<unknown[]> => {
  return await Promise.all(args.branches);
}

export const choice = async (args: Choice) => {
  for (const choice of args.choices) {
    if (choice.condition()) {
      choice.block();
      return;
    }
  }
  if (args.default) args.default();
}

export const map = async <Input, Output>(args: Map<Input, Output>) => {
  return {} as Output[];
}

export const pass = <T>(args: Pass<T>): T => {
  return args.parameters as T;
}

export const succeed = (x: Succeed) => {
  return {};
}

export const fail = (x: Fail): never => {
  throw runtime.createError(x.error as string, x.cause as string);
}

export const jsonPathLength = <T>(items: T[]): number => {
  return items.length;
}
export const jsonPathFilter = <T>(items: T[], predicate: (x: T) => boolean): T[] => {
  return items.filter(predicate);
}

export const jsonPathSlice = <T>(items: T[], start: number, end?: number, step?: number): T[] => {
  return items;
}

export const jsonPathExpression = (items: unknown, expression: string): unknown => {
  return items;
}

export const jsonPathMap = (items: unknown[], expression: string): unknown[] => {
  return items;
}


export namespace convert {
  export function booleanToString(arg: boolean | undefined): string {
    if (arg === undefined) throw new Error(`cannot convert undefined to string`);
    return String(arg);
  }

  export function numberToString(arg: number | undefined): string {
    if (arg === undefined) throw new Error(`cannot convert undefined to string`);
    return String(arg);
  }

  export function stringToBoolean(arg: string | undefined): boolean {
    if (arg === undefined) throw new Error(`cannot convert undefined to boolean`);
    if (arg !== "true" && arg !== "false") throw new Error(`cannot convert ${arg} to boolean`);
    if (arg === "false") return false;
    return true;
  }

  export function stringToNumber(arg: string | undefined): number {
    if (arg === undefined) throw new Error(`cannot convert undefined to number`);
    return Number(arg);
  }
}

export namespace states {
  export function format(format: string, ...args: unknown[]): string {
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

