import * as iasl from "../convert-asllib-to-iasl/ast"
import * as asl from "asl-types";
import { AslFactory } from "./aslfactory";
import { AslWriter, StateWithBrand } from "./asl-writer";
import { createObjectContextReplacer, createReplacer, IdentifierReplacer, replaceIdentifiers } from "./identifiers";
import { assignScopes } from "./scopes";

export const convert = (stateMachine: iasl.StateMachine, context: AslWriter = new AslWriter()): asl.StateMachine | undefined => {
  const replacers: IdentifierReplacer[] = [];
  if (stateMachine.contextArgumentName) {
    replacers.push(createObjectContextReplacer(stateMachine.contextArgumentName.identifier));
  }
  if (stateMachine.inputArgumentName) {
    replacers.push(createReplacer(stateMachine.inputArgumentName.identifier));
  }

  const stateMachineCopy = replaceIdentifiers(stateMachine, replacers)
  const scopes = assignScopes(stateMachineCopy);
  const { statements } = stateMachineCopy;

  context.appendNextState({
    Type: "Pass",
    ResultPath: "$",
    Parameters: {
      "vars.$": "$$.Execution.Input"
    }
  }, "Initialize");

  for (const statement of statements) {
    AslFactory.append(statement, scopes, context);
  }
  return context.finalize();
}

export const appendBlock = (stateMachine: iasl.Block, scopes: Record<string, iasl.Scope>, context: AslWriter) => {
  const { statements } = stateMachine;
  for (const statement of statements) {
    AslFactory.append(statement, scopes, context);
  }
}

export const convertBlock = (stateMachine: iasl.Block, scopes: Record<string, iasl.Scope>, context: AslWriter = new AslWriter()): asl.StateMachine | undefined => {
  const { statements } = stateMachine;
  for (const statement of statements) {
    AslFactory.append(statement, scopes, context);
  }
  return context.finalize();
}


export const isNonTerminalState = (state?: StateWithBrand): boolean => {
  return (state != undefined && state.Type !== "Succeed" && state.Type !== "Fail" && !("End" in state && state.End === true) && state.brand !== "break");
}

export type NonTerminalState = asl.Choice | asl.Map | asl.Parallel | asl.Pass | asl.Task | asl.Wait;
export type AnyStateAttribute = Partial<asl.Choice & asl.Map & asl.Parallel & asl.Pass & asl.Task & asl.Wait> & Record<string, any>;
export type NameAndState = { name: string } & asl.State;