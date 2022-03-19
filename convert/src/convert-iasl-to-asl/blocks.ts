
import * as iasl from "../convert-asllib-to-iasl/ast"
import * as asl from "asl-types";
import { Scopes } from "./scopes";
import { ConversionContext } from ".";
import { AslFactory } from "./aslfactory";
import { createParameters } from "./parameters";

export const createSingleOrParallel = (block: iasl.Block, scopes: Scopes, context: ConversionContext): { state: asl.State, stateName?: string } => {

  const stateMachine = convertBlock(block, scopes, context.createChildContext())
  if (!stateMachine) throw new Error("unable to convert block to state machine");

  const stateNames = Object.keys(stateMachine.States);
  if (stateNames.length === 1) {
    const stateName = stateNames[0];
    const state = stateMachine.States[stateName];
    delete (state as any).End;
    context.root.names = context.root.names.filter(x => x != stateName);
    return { state, stateName };
  }

  return {
    state: {
      Type: "Parallel",
      ...createParameters(scopes, [block]),
      Branches: [stateMachine],
      ResultPath: "$.lastResult"
    } as asl.Parallel
  }
}


export const convertBlock = (stateMachine: iasl.Block, scopes: Record<string, iasl.Scope>, context: ConversionContext = new ConversionContext()): asl.StateMachine | undefined => {
  const { statements } = stateMachine;
  for (const statement of statements) {
    AslFactory.append(statement, scopes, context);
  }
  return context.finalize();
}