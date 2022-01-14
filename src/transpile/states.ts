import * as asl from "asl-types";

export const NarrowTerminatingState = (state: asl.State): state is NonTerminalState => {
  return (state.Type !== "Succeed" && state.Type !== "Fail");
}

export type NonTerminalState = asl.Choice | asl.Map | asl.Parallel | asl.Pass | asl.Task | asl.Wait;
export type AnyStateAttribute = Partial<asl.Choice & asl.Map & asl.Parallel & asl.Pass & asl.Task & asl.Wait> & Record<string, any>;
export type NameAndState = { name: string } & asl.State;