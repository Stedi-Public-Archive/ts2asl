
import * as asl from 'asl-types'
import { Operator as AslOperator } from 'asl-types/dist/choice';
import { internalEvaluateOperator, internalWaitSeconds } from './asl-internals';
export interface AslResource { }
export interface AslStateMachine extends AslResource { }
export interface AslLambdaFunction extends AslResource { }
export interface AslState { }

export type Operator = Omit<AslOperator, "Next"> & { NextInvoke: Function };
export type Choice = Omit<asl.Choice, "Type" | "Choices" | "Default" | "InputPath"> & { Input: unknown, DefaultInvoke: Function, Choices: Operator[] };
export type Task = Omit<asl.Task, "Type" | "Resource" | "InputPath"> & { TypescriptInvoke?: Function, Resource?: string, Input?: unknown };
export type While = { Condition: Omit<AslOperator, "Next">, BlockInvoke: Function };
export type Wait = Omit<asl.Wait, "Type" | "SecondsPath" | "TimestampPath">;
export class ASL {

  static AsLambda<T>(fn: T) {
    (fn as any).lambda = true;
    return fn as AslLambdaFunction;
  }

  static AsStateMachine<T>(fn: T) {
    (fn as any).asl = true;

    ASL.While({ Condition: { Variable: fn, StringEquals: "aa" }, BlockInvoke: () => { } })
    return fn as AslStateMachine
  }

  static async Wait(x: Wait) {
    await internalWaitSeconds(x.Seconds);
  }

  static async Parallel(x: Omit<asl.Parallel, "Type">) {
    return {} as AslState;
  }

  static async Task(x: Task) {
    if (x.TypescriptInvoke) {
      return x.TypescriptInvoke(x.Input);
    }
    return {} as AslState;
  }

  static async Choice(x: Choice) {
    for (const choice of x.Choices) {
      if (internalEvaluateOperator(choice)) {
        choice.NextInvoke(x.Input)
      };
    }

    if (x.DefaultInvoke) {
      x.DefaultInvoke(x.Input)
    }
    return {} as AslState;
  }

  static async While(x: While) {
    while (internalEvaluateOperator(x.Condition)) {
      x.BlockInvoke();
    }
  }

  static async Map(x: Omit<asl.Map, "Type">) {
    return {} as AslState;
  }

  static Pass(x: Omit<asl.Pass, "Type" | "ResultPath">) {
    return x.Result;
  }

  static Fail(x: Omit<asl.Fail, "Type">) {
    throw new Error(x.Cause);
  }

  static Succeed(x: Omit<asl.Succeed, "Type">) {
    return {} as AslState;
  }
}
