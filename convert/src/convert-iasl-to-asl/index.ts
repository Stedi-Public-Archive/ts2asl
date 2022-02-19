import * as iasl from "../convert-asllib-to-iasl/ast"
import * as asl from "asl-types";
import { AslFactory } from "./aslfactory";

export const convert = (stateMachine: iasl.StateMachine, context: ConversionContext = new ConversionContext()): asl.StateMachine | undefined => {

  const rootScope = { accessed: [], enclosed: [], childScopes: [], parentScope: undefined, id: "root" };
  iasl.assignScopes(stateMachine, rootScope, (expression, scope) => {
    if (iasl.Check.isIdentifier(expression)) {
      const parts = expression.identifier.split('.');
      if (!scope.accessed.includes(parts[0])) {
        scope.accessed.push(parts[0]);
      }
    }
  });

  let scopes: Record<string, iasl.Scope> = {};
  iasl.visitScopes(rootScope, scope => {
    scopes[scope.id] = scope;
    for (const accessed of scope.accessed) {
      let contextual = scope.parentScope;
      let parents: iasl.Scope[] = [];
      let enclosed = false;
      while (contextual) {
        if (contextual.accessed.includes(accessed)) {
          enclosed = true;
          break;
        }
        parents.push(contextual);
        contextual = contextual.parentScope;
      }
      if (!enclosed) continue;
      for (const p of parents) {
        p.enclosed.push(accessed);
      }
      scope.enclosed.push(accessed);
    }
  })

  const { statements } = stateMachine;
  for (const statement of statements) {
    AslFactory.append(statement, scopes, context);
  }
  return context.finalize();
}

export const convertBlock = (stateMachine: iasl.Block, scopes: Record<string, iasl.Scope>, context: ConversionContext = new ConversionContext()): asl.StateMachine | undefined => {
  const { statements } = stateMachine;
  for (const statement of statements) {
    AslFactory.append(statement, scopes, context);
  }
  return context.finalize();
}
export class ConversionContext {
  names: string[] = [];
  root: ConversionContext;
  startAt: string | undefined;
  trailingStates: NonTerminalState[] = [];
  states: Record<string, asl.State> = {};

  constructor() {
    this.root = this;
  }
  createName(nameSuggestion: string): string {

    let postFix = "";
    let n = 1;

    while (this.root.names.includes(nameSuggestion + postFix)) {
      postFix = `_${n}`;
      n++;
    }

    this.root.names.push(nameSuggestion + postFix);


    return nameSuggestion + postFix;
  }

  appendState(state: asl.State, nameSuggestion?: string) {
    const name = this.createName(nameSuggestion ?? state.Type);
    this.states[name] = state;

    return name;
  }
  appendAdditionalTail(state: asl.State, nameSuggestion?: string) {
    const name = this.appendState(state, nameSuggestion);
    if (isNonTerminalState(state) && state.Type != "Choice") {
      this.trailingStates.push(state);
    }
    return name;
  }
  appendNextState(state: asl.State, nameSuggestion?: string) {
    const name = this.createName(nameSuggestion ?? state.Type);

    if (this.startAt === undefined) {
      this.startAt = name;
    }
    this.states[name] = state;
    for (const trailingState of this.trailingStates) {
      if (trailingState.Type === "Choice") {
        const choice = trailingState as asl.Choice;
        if (choice.Default === undefined) {
          choice.Default = name;
        }
      } else {
        trailingState.Next = name;
      }
    }

    this.trailingStates = isNonTerminalState(state) ? [state] : []
    return name;
  }

  finalize(): asl.StateMachine | undefined {
    if (Object.entries(this.states).length === 0) {
      this.appendNextState({ Type: "Succeed" }, "Empty")
    }

    for (const trailingState of this.trailingStates) {
      if (trailingState.Type === "Choice") {
        const choice = trailingState as asl.Choice;
        if (choice.Default === undefined) {
          const name = this.createName("Empty Default Choice");
          this.states[name] = { Type: "Pass", End: true } as asl.Pass;
          choice.Default = name;
        }
      } else {
        trailingState.End = true;
      }
    }
    if (this.startAt === undefined) return undefined;
    return {
      StartAt: this.startAt,
      States: this.states
    }
  }

  createChildContext(): ConversionContext {
    const context = new ConversionContext();
    context.root = this.root;
    return context;
  }
}

export const isNonTerminalState = (state?: asl.State): state is NonTerminalState => {
  return (state != undefined && state.Type !== "Succeed" && state.Type !== "Fail");
}

export type NonTerminalState = asl.Choice | asl.Map | asl.Parallel | asl.Pass | asl.Task | asl.Wait;
export type AnyStateAttribute = Partial<asl.Choice & asl.Map & asl.Parallel & asl.Pass & asl.Task & asl.Wait> & Record<string, any>;
export type NameAndState = { name: string } & asl.State;