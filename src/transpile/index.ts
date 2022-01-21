import * as ts from "typescript";
import * as asl from "asl-types";
import { ParserError } from "../ParserError";
import { StateFactory } from "./state-factory";
import { NameAndState, AnyStateAttribute, NarrowTerminatingState } from "./states";
import { convertToDollarSyntax } from "./reference-utility";

export const transpile = (body: ts.Block | ts.ConciseBody | ts.SourceFile, argName: string = "context"): asl.StateMachine => {
  const factory = new StateFactory();
  const nodes = new Nodes();

  ts.forEachChild(body, toplevel => {
    const states = convertNodeToStates(toplevel, argName, factory, nodes)
    for (const state of states) {
      nodes.push(state.name, state)
    }
  });

  nodes.finalize();

  return {
    StartAt: nodes.startAt as string,
    States: nodes.states
  }
};


const convertNodeToStates = (toplevel: ts.Node, argName: string, factory: StateFactory, nodes: Nodes): NameAndState[] => {
  let node: ts.Node | undefined = toplevel;
  let stateAttributes: AnyStateAttribute = {};
  let nameSuggestion: string | undefined = undefined;

  if (ts.isEmptyStatement(node)) {
    return [];
  }

  if (ts.isExpressionStatement(node)) {
    node = node.expression;
  }

  if (ts.isVariableStatement(node) || (ts.isBinaryExpression(node) && node.operatorToken.kind === ts.SyntaxKind.EqualsToken)) {
    let identifierName = "";

    if (ts.isVariableStatement(node)) {
      if (node.declarationList.declarations.length !== 1) throw new ParserError("variable statement must have declaration list of 1", node);
      const decl = node.declarationList.declarations[0];
      if (!ts.isIdentifier(decl.name)) throw new ParserError("variable statement must be assigned to identifier", node);
      identifierName = decl.name.text;
      node = decl.initializer;
      stateAttributes.ResultPath = `$.` + identifierName;
      nameSuggestion = `Assign_` + identifierName;

    } else if (ts.isBinaryExpression(node)) {
      if (!ts.isIdentifier(node.left) && !ts.isPropertyAccessExpression(node.left)) throw new ParserError("variable statement must be assigned to identifier or property access expression", node);
      stateAttributes.ResultPath = convertToDollarSyntax(node.left);
      node = node.right;
      nameSuggestion = `Assign` + identifierName;
    }


  }

  if (node && ts.isAwaitExpression(node)) {
    node = node.expression;
  }

  if (node && ts.isCallExpression(node)) {
    const result = factory.createState(node, argName, stateAttributes, nameSuggestion);
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
  currentState: asl.State | undefined;
  startAt: string | undefined;

  push(name: string, state: asl.State) {
    delete (state as unknown as { name: string | undefined }).name;
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
      return;
      //throw new Error("current state is terminal");
    }

    this.currentState.Next = nextStateName;
  }

  finalize() {
    if (NarrowTerminatingState(this.currentState)) {
      this.currentState.End = true;
    }
  }
}

