
import * as asl from 'asl-types'
import { Operator as AslOperator } from 'asl-types/dist/choice';
import { internalEvaluateOperator, internalWaitSeconds } from './asl-internals';
import { ObjectToCamel } from "ts-case-convert/lib/caseConvert"


export interface AslResource { }
export interface AslStateMachine extends AslResource { }
export interface AslLambdaFunction extends AslResource { }
export interface AslState { }

export type Operator = Omit<AslOperator, "Next"> & { NextInvoke: Function };
export type Choice = Omit<asl.Choice, "Type" | "Choices" | "Default" | "InputPath"> & { Input: unknown, DefaultInvoke: Function, Choices: Operator[] };
export type Task = Omit<asl.Task, "Type" | "Resource" | "InputPath"> & { TypescriptInvoke?: Function, Resource?: string, Input?: unknown };
export type While = { Condition: Omit<AslOperator, "Next">, WhileInvoke: Function };
export type Wait = Omit<asl.Wait, "Type" | "SecondsPath" | "TimestampPath">;

export namespace ASL {

  export const wait = async (x: ObjectToCamel<Wait>) => {
    await internalWaitSeconds(x.seconds as number);
  }

  export const parallel = async (x: ObjectToCamel<Omit<asl.Parallel, "Type">>) => {
    return {} as AslState;
  }

  export const task = async (x: ObjectToCamel<Task>) => {
    // if (x.typescriptInvoke) {
    //   return x.typescriptInvoke(x.input);
    // }
    return {} as AslState;
  }

  export const choice = async (x: ObjectToCamel<Choice>) => {
    // for (const choice of x.choices) {
    //   if (internalEvaluateOperator(choice)) {
    //     choice.NextInvoke(x.input)
    //   };
    // }

    // if (x.defaultInvoke) {
    //   x.defaultInvoke(x.input)
    // }
    return {} as AslState;
  }


  export const _while = async (x: ObjectToCamel<While>) => {
    while (internalEvaluateOperator(x.condition)) {
      //x.whileInvoke();
    }
    return {} as AslState;
  }

  export const map = async (x: ObjectToCamel<Omit<asl.Map, "Type">>) => {
    return {} as AslState;
  }

  export const seq = async (x: { first: AslState, second: AslState }) => {
    return {} as AslState;
  }

  export const pass = (x: ObjectToCamel<Omit<asl.Pass, "Type" | "ResultPath">>) => {
    return x.result;
  }

  export const fail = (x: ObjectToCamel<Omit<asl.Fail, "Type">>) => {
    throw new Error(x.cause);
  }

  export const succeed = (x: ObjectToCamel<Omit<asl.Succeed, "Type">>) => {
    return {} as AslState;
  }
}

export namespace Deploy {

  export const asLambda = <T>(fn: T) => {
    (fn as any).lambda = true;
    return fn as AslLambdaFunction & T;
  }

  export const AsStateMachine = <T>(fn: T) => {
    (fn as any).asl = true;
    return fn as AslStateMachine & T;
  }
}
