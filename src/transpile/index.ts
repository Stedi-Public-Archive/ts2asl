import * as ts from "typescript";
import * as asl from "asl-types";
import { ParserError } from "../ParserError";
import { StateFactory } from "./state-factory";
import { AnyStateAttribute, NarrowTerminatingState } from "./states";
import { convertToDollarSyntax } from "./reference-utility";

export const transpile = (body: ts.Block | ts.ConciseBody | ts.SourceFile, argName: string = "context"): asl.StateMachine => {
  const factory = new StateFactory();
  const nodes = new Nodes();

  ts.forEachChild(body, toplevel => {
    convertNodeToStates(toplevel, argName, factory, nodes);
  });

  nodes.finalize();

  return {
    StartAt: nodes.startAt as string,
    States: nodes.states
  }
};


const convertNodeToStates = (toplevel: ts.Node, argName: string, factory: StateFactory, nodes: Nodes) => {
  let node: ts.Node | undefined = toplevel;
  let stateAttributes: AnyStateAttribute = {};
  let nameSuggestion: string | undefined = undefined;

  if (ts.isEmptyStatement(node)) {
    return;
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
      identifierName = stateAttributes.ResultPath.replace('\$\.', '');
      node = node.right;
      nameSuggestion = `Assign_` + identifierName;
    }
  }

  if (node && ts.isAwaitExpression(node)) {
    node = node.expression;
  }

  if (node && ts.isCallExpression(node)) {
    const result = factory.createState(node, argName, stateAttributes, nameSuggestion);
    nodes.setNext(result.state.name);
    for (const state of result.additionalStates) {
      nodes.push(state.name, state);
    }
    nodes.push(result.state.name, result.state);
    nodes.setAdditionalTails(result.additionalTailStates);
  }
}

class Nodes {
  hasFirstState = false;
  states: Record<string, asl.State> = {};
  currentState: asl.State | undefined;
  startAt: string | undefined;
  additionalTails: asl.State[] = [];

  push(name: string, state: asl.State) {
    delete (state as unknown as { name: string | undefined }).name;

    this.currentState = state;
    this.states[name] = state;
  }

  setAdditionalTails(additionalTails: asl.State[]) {
    this.additionalTails = additionalTails.map(x => {
      delete (x as unknown as { name: string | undefined }).name;
      return x;
    });
  }

  setNext(nextStateName: string) {
    if (!this.hasFirstState) {
      this.startAt = nextStateName;
      this.hasFirstState = true;
    }


    if (!this.currentState) {
      return;
    }

    if (!NarrowTerminatingState(this.currentState)) {
      return;
    }

    if (this.currentState.Type === "Choice") {
      const choice = this.currentState as asl.Choice;
      if (!choice.Default) {
        choice.Default = nextStateName;
      }
    } else {
      this.currentState.Next = nextStateName;
    }
    for (const tail of this.additionalTails) {
      if (NarrowTerminatingState(tail)) {
        tail.Next = nextStateName;
      }
    }
  }

  finalize() {
    if (NarrowTerminatingState(this.currentState)) {
      this.currentState.End = true;
    }
  }
}

