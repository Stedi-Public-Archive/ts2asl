
import * as asl from 'asl-types'
export interface AslResource { }
export interface AslStateMachine extends AslResource { }
export interface AslLambdaFunction extends AslResource { }
export interface AslState { }

export class ASL {

  static AsLambda<T>(fn: T) {
    (fn as any).lambda = true;

    ASL.Wait({ Seconds: 2 });
    ASL.Task({
      Resource: "arn:aws:123123123:lambda:function:my-func",
      Retry: [{
        ErrorEquals: ["States.Timeout"],
        IntervalSeconds: 3,
        MaxAttempts: 2,
        BackoffRate: 1.5
      }]
    });

    return fn as AslLambdaFunction;



  }

  static AsStateMachine<T>(fn: T) {
    (fn as any).asl = true;
    return fn as AslStateMachine
  }

  static ToStateMachine(state: AslState) {

  }

  static async Wait(x: Omit<asl.Wait, "Type">) {
    return {} as AslState;
  }

  static async Parallel(x: Omit<asl.Parallel, "Type">) {
    return {} as AslState;
  }

  static async Task(x: Omit<asl.Task, "Type">) {
    return {} as AslState;
  }

  static async Choice(x: Omit<asl.Choice, "Type">) {
    return {} as AslState;
  }

  static async Map(x: Omit<asl.Map, "Type">) {
    return {} as AslState;
  }

  static async Pass(x: Omit<asl.Pass, "Type">) {
    return {} as AslState;
  }

  static async Fail(x: Omit<asl.Fail, "Type">) {
    return {} as AslState;
  }

  static async Succeed(x: Omit<asl.Succeed, "Type">) {
    return {} as AslState;
  }
}