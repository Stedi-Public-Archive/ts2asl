import * as ts from "typescript";
import * as asl from "asl-types";
import { ParserError } from "../ParserError";
import { StateFactory } from "./state-factory";
import { NameAndState, AnyStateAttribute, NarrowTerminatingState } from "./states";

export const transpile = (body: ts.Block | ts.SourceFile): asl.StateMachine => {
  const factory = new StateFactory();
  const nodes = new Nodes();

  ts.forEachChild(body, toplevel => {
    const states = convertNodeToStates(toplevel, factory, nodes)
    for (const state of states) {
      nodes.push(state.name, state)
    }
  });

  nodes.finalize();

  return {
    StartAt: nodes.startAt,
    States: nodes.states
  }
};


const convertNodeToStates = (toplevel: ts.Node, factory: StateFactory, nodes: Nodes): NameAndState[] => {
  let node = toplevel;
  let stateAttributes: AnyStateAttribute = {};
  let nameSuggestion: string;

  if (ts.isEmptyStatement(node)) {
    return [];
  }

  if (ts.isExpressionStatement(node)) {
    node = node.expression;
  }

  if (ts.isVariableStatement(node)) {
    if (node.declarationList.declarations.length !== 1) throw new ParserError("variable statement must have declaration list of 1", node);
    const decl = node.declarationList.declarations[0];
    if (!ts.isIdentifier(decl.name)) throw new ParserError("variable statement must be assigned to identifier", node);
    const identifierName = decl.name.text;

    stateAttributes.ResultPath = `$.` + identifierName;
    nameSuggestion = `Assign_` + identifierName;

    node = decl.initializer;
  }

  if (ts.isAwaitExpression(node)) {
    node = node.expression;
  }

  if (ts.isCallExpression(node)) {
    const result = factory.createState(node, stateAttributes, nameSuggestion);
    nodes.setNext(result.state.name);
    nodes.push(result.state.name, result.state);

    for (const state of result.additionalStates) {
      nodes.push(state.name, state);
    }

  }
  return [];
}
class Nodes {
  hasFirstState = false;
  states: Record<string, asl.State> = {};
  currentState: asl.State;
  startAt: string;

  push(name: string, state: asl.State) {
    delete (state as unknown as { name: string }).name;
    if (!this.hasFirstState) {
      this.startAt = name;
      this.hasFirstState = true;
    }

    this.currentState = state;
    this.states[name] = state;
  }

  setNext(nextStateName: string) {
    if (!this.currentState) {
      return;
    }

    if (!NarrowTerminatingState(this.currentState)) {
      throw new Error("current state is terminal");
    }

    this.currentState.Next = nextStateName;
  }

  finalize() {
    if (NarrowTerminatingState(this.currentState)) {
      this.currentState.End = true;
    }
  }
}

