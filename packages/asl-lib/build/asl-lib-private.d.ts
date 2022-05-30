declare module '@ts2asl/asl-lib/asl' {

export type While = {
  condition: () => boolean;
  block: Function;
  name?: string;
};
export interface Foreach<T> {
  items: T[] | undefined | (() => T[]);
  iterator: <U>(item: T, objectContext: StateMachineContext<U>) => void;
  comment?: string;
  name?: string;
}
export type DoWhile = {
  condition: () => boolean;
  block: Function;
  name?: string;
};
export type If = {
  condition: boolean | (() => boolean);
  then: Function;
  else?: Function;
  comment?: string;
  name?: string;
};

export interface Succeed {
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
export interface Switch<T> {
  expression: () => T;
  cases: ({} | {
      label: T;
      block: Function
  })[]        
  comment?: string;
  name?: string;
}

export  const typescriptSwitch: <T>(args: Switch<T>) => Promise<void>;
export  const typescriptTry: (args: Try) => Promise<void>;
export  const typescriptDoWhile: (args: DoWhile) => Promise<void>;
export  const typescriptWhile: (args: While) => Promise<void>;
export  const typescriptForeach: <T>(args: Foreach<T>) => Promise<void>;
export  const typescriptIf: (args: If) => Promise<void>;

}