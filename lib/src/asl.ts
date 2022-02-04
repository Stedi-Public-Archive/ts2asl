
import { internalWaitSeconds } from './asl-internals';

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
export type If = { condition: boolean | (() => boolean), then: Function; else: Function };
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
}

export interface Try {
  try: Function;
  catch?: CatchConfiguration;
  finally?: Function;
  comment?: string;
}
export interface Return {
  result: unknown | (() => unknown);
  comment?: string;
}
export interface Task {
  resource: string;
  parameters?: unknown | (() => unknown);
  catch?: CatchConfiguration;
  retry?: RetryConfiguration;
  timeoutSeconds?: number;
  heartbeatSeconds?: number;
}

export interface Pass {
  result: unknown | (() => unknown);
  comment?: string;
}
export interface Fail {
  error?: string;
  cause?: string;
  comment?: string;
}

export interface Map<T> {
  parameters?: unknown | (() => unknown);
  items: T[] | undefined | (() => T[]);
  iterator: (item: T) => {};
  maxConcurrency?: number;
  comment?: string;
}


export interface Succeed {
  comment?: string;
}

export interface Parallel<T> {
  items: T[] | undefined | (() => T[]);
  branches: ((item: T) => {})[],
  catch?: CatchConfiguration;
  retry?: RetryConfiguration;
  comment?: string;
}

export interface Invoke {
  target: string;
  parameters?: unknown | (() => unknown);
}

export interface Choice {
  input: unknown | (() => unknown);
  choices: Array<{ condition: () => boolean; block: Function }>;
  default: boolean | (() => boolean);
  comment?: string;
}

export const typescriptInvoke = async (args: Invoke) => {
  return {} as AslState;
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
export const task = async (args: Task) => {
  return {} as AslState;
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

export const pass = (args: Pass) => {
  return args.result;
}

export const succeed = (x: Succeed) => {
  return {} as AslState;
}

export const fail = (x: Fail) => {
  throw new Error(x.cause);
}