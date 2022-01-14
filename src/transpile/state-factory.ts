import ts, { SyntaxKind } from "typescript"
import { Wait } from "../lib/ASL";
import { ParserError } from "../ParserError";
import { transpile } from "./index";
import { AnyStateAttribute, NameAndState } from "./states";

export class StateFactory {
  names = new Names();

  createState(callExpression: ts.CallExpression, additional: AnyStateAttribute, nameSuggestion?: string): { state: NameAndState, additionalStates: NameAndState[] } {
    const additionalStates: NameAndState[] = [];
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
      argument = convertObjectLiteralExpressionToObject(arg, additionalStates, this, type);
    }
    const state = {
      name: name,
      Type: type,
      ...argument,
      ...additional,
    };

    return { state, additionalStates };
  };
}



const convertObjectLiteralExpressionToObject = (expression: ts.ObjectLiteralExpression, others: NameAndState[], factory: StateFactory, asltype?: string): any => {
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

      if (asltype === "Wait") {
        const waitState: Wait = value;
        if (propName === "Seconds" && typeof value === "string" && (value + "").startsWith("$")) {
          result["SecondsPath"] = value;
        } else if (propName === "Timestamp" && typeof value === "string" && (value + "").startsWith("$")) {
          result["TimestampPath"] = value;
        } else {
          result[propName] = value;
        }
      } else {
        result[propName] = value;
      }
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
  } else if (ts.isIdentifier(expression)) {
    return `$.${expression.text}`;
  }
  else if (expression.kind === SyntaxKind.TrueKeyword || expression.kind === SyntaxKind.FalseKeyword) {
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