import ts, { SyntaxKind } from "typescript"
import * as asl from "asl-types";
import { ParserError } from "../ParserError";

export const transpile = (body: ts.Block | ts.SourceFile): asl.StateMachine => {
  const factory = new StateFactory();
  const nodes = new Nodes();

  ts.forEachChild(body, toplevel => {
    const states = convertNodeToStates(toplevel, factory)
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


const convertNodeToStates = (toplevel: ts.Node, factory: StateFactory): NameAndState[] => {
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
    return factory.createState(node, stateAttributes, nameSuggestion);
  }
  return [];
}


class Names {
  names: string[] = [];
  takenNames: Map<ts.Node, string> = new Map();

  getOrCreateName(node: ts.Node, baseName: string) {


    if (this.takenNames.has(node)) {
      return this.takenNames.get(node);
    }

    let postFix = "";
    let n = 1;

    while (this.names.includes(baseName + postFix)) {
      postFix = `_${n}`;
      n++;
    }

    this.names.push(baseName + postFix);
    this.takenNames.set(node, baseName + postFix);

    return baseName + postFix;
  }

}

class StateFactory {
  names = new Names();

  createState(callExpression: ts.CallExpression, additional: AnyStateAttribute, nameSuggestion?: string): Array<NameAndState> {
    const result: NameAndState[] = [];
    if (!ts.isPropertyAccessExpression(callExpression.expression)) throw new Error("Call expression expected to have Property access expression");
    if (!ts.isIdentifier(callExpression.expression.expression)) throw new Error("Call expression expected to have Property access expression");
    const type = callExpression.expression.name.text;
    const ASL = callExpression.expression.expression.text;
    if (ASL !== "ASL") throw new Error("Call expression expected to be on ASL method");
    const name = this.names.getOrCreateName(callExpression, (nameSuggestion ?? type) ?? "State")

    let argument = {};

    if (callExpression.arguments.length !== 0) {
      if (callExpression.arguments.length > 1) throw new Error("Call expression expected to have single argument");
      const arg = callExpression.arguments[0];
      if (!ts.isObjectLiteralExpression(arg)) throw new Error("Call expression argument must be object literal expression");
      argument = convertObjectLiteralExpressionToObject(arg, result, this);
    }
    result.push({
      name: name,
      Type: type,
      ...argument,
      ...additional,
    });
    return result.reverse();
  };
}



const convertObjectLiteralExpressionToObject = (expression: ts.ObjectLiteralExpression, others: NameAndState[], factory: StateFactory): any => {
  let result = {};

  for (const prop of expression.properties) {
    if (!ts.isPropertyAssignment(prop) || !ts.isIdentifier(prop.name)) throw new Error("Call expression argument must be object literal expression with only property assignments");
    const propName = prop.name.text;
    if (propName === "BlockInvoke") {
      if (expression.properties.length !== 1) throw new Error("BlockInvoke must be only property of object");
      if (!ts.isArrowFunction(prop.initializer) || !ts.isBlock(prop.initializer.body)) throw new Error(`NextInvoke must be arrow function with block`);

      const statemachine = transpile(prop.initializer.body);
      result = statemachine;

    } else if (propName === "NextInvoke" || propName === "DefaultInvoke") {
      if (!ts.isArrowFunction(prop.initializer) || !ts.isBlock(prop.initializer.body)) throw new Error(`NextInvoke must be arrow function with block`);

      const resultPropName = propName.replace("Invoke", "");

      const statemachine = transpile(prop.initializer.body);
      const states = Object.entries(statemachine.States);

      if (states.length === 1) { //inline
        const name = factory.names.getOrCreateName(prop.initializer, states[0][0]);
        result[resultPropName] = name;
        others.push({ ...states[0][1], name });
      } else { //wrap in parallel
        const name = factory.names.getOrCreateName(prop.initializer, "Block");
        result[resultPropName] = name;
        others.push({ Branches: [statemachine], name, Type: "Parallel" });
      }

    } else if (propName === "TypescriptInvoke" && ts.isIdentifier(prop.initializer)) {
      result["Resource"] = `typescript:` + prop.initializer.text;
    } else {
      const value = convertExpressionToLiteral(prop.initializer, others, factory);
      result[propName] = value;
    }

  }
  return result;
}

const convertExpressionToLiteral = (expression: ts.Expression, others: NameAndState[], factory: StateFactory): any => {
  if (ts.isArrayLiteralExpression(expression)) {
    return expression.elements.map(x => convertExpressionToLiteral(x, others, factory));
  } else if (ts.isLiteralExpression(expression)) {
    let value: String | Number = expression.text;
    if (ts.isNumericLiteral(expression)) {
      value = new Number(value).valueOf();
    }
    return value;
  } else if (expression.kind === SyntaxKind.TrueKeyword || expression.kind === SyntaxKind.FalseKeyword) {
    const keyword = expression.getText();
    const value = new Boolean(keyword).valueOf();
    return value;
  } else if (ts.isObjectLiteralExpression(expression)) {
    let obj = convertObjectLiteralExpressionToObject(expression, others, factory);
    return obj;
  } else {
    throw new ParserError("Unable to unpack expression", expression);
  }
}


class Nodes {
  hasFirstState = false;
  states: Record<string, asl.State> = {};
  lastState: asl.State;
  startAt: string;

  push(name: string, state: asl.State) {
    delete (state as unknown as { name: string }).name;
    if (!this.hasFirstState) {
      this.startAt = name;
      this.hasFirstState = true;
    }

    this.lastState = state;
    this.states[name] = state;
  }

  finalize() {

  }
}


const NarrowTerminatingState = (state: asl.State): state is NonTerminalState => {
  return (state.Type !== "Succeed" && state.Type !== "Fail");
}

type NonTerminalState = asl.Choice | asl.Map | asl.Parallel | asl.Pass | asl.Task | asl.Wait;
type AnyStateAttribute = Partial<asl.Choice & asl.Map & asl.Parallel & asl.Pass & asl.Task & asl.Wait> & Record<string, any>;
type NameAndState = { name: string } & asl.State;