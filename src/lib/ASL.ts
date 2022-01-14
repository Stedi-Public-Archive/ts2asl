
import * as asl from 'asl-types'
import { internalWaitSeconds } from './asl-internals';
export interface AslResource { }
export interface AslStateMachine extends AslResource { }
export interface AslLambdaFunction extends AslResource { }
export interface AslState { }

export class ASL {

  static AsLambda<T>(fn: T) {
    (fn as any).lambda = true;
    return fn as AslLambdaFunction;
  }

  static AsStateMachine<T>(fn: T) {
    (fn as any).asl = true;
    return fn as AslStateMachine
  }

  static async Wait(x: Omit<asl.Wait, "Type" | "SecondsPath">) {
    await internalWaitSeconds(x.Seconds);
  }

  static async Parallel(x: Omit<asl.Parallel, "Type">) {
    return {} as AslState;
  }

  static async Task(x: Omit<asl.Task, "Type" | "Resource" | "InputPath"> & { TypescriptInvoke?: Function, Resource?: string, Input?: unknown }) {
    if (x.TypescriptInvoke) {
      return x.TypescriptInvoke(x.Input);
    }
    return {} as AslState;
  }

  static async Choice(x: Omit<asl.Choice, "Type">) {
    return {} as AslState;
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
