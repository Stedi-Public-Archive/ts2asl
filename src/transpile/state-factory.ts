import ts, { SyntaxKind } from "typescript";
import * as asl from "asl-types";
import { ParserError } from "../ParserError";
import { transpile } from "./index";
import { convertToDollarSyntax } from "./reference-utility";
import { AnyStateAttribute, NameAndState, NarrowTerminatingState } from "./states";
import { While } from "../lib/ASL";

export class StateFactory {
  names = new Names();

  createState(callExpression: ts.CallExpression, argName: string, additional: AnyStateAttribute, nameSuggestion?: string): { state: NameAndState, additionalStates: NameAndState[] } {
    const additionalStates: NameAndState[] = [];
    if (!ts.isPropertyAccessExpression(callExpression.expression)) throw new Error("Call expression expected to have Property access expression");
    if (!ts.isIdentifier(callExpression.expression.expression)) throw new Error("Call expression expected to have Property access expression");
    let type = callExpression.expression.name.text;
    const ASL = callExpression.expression.expression.text;
    if (ASL !== "ASL") throw new Error("Call expression expected to be on ASL method");
    const name = this.names.getOrCreateName(callExpression, (nameSuggestion ?? type) ?? "State")

    let argument = {};

    if (callExpression.arguments.length !== 0) {
      if (callExpression.arguments.length > 1) throw new Error("Call expression expected to have single argument");
      const arg = callExpression.arguments[0];
      if (!ts.isObjectLiteralExpression(arg)) throw new Error("Call expression argument must be object literal expression");
      argument = convertObjectLiteralExpressionToObject(arg, argName, additionalStates, this, type);

      if (type === "While") {
        type = "Parallel";
        const originalArg = { ...argument } as While;
        const stateMachine = originalArg.WhileInvoke as unknown as asl.StateMachine;
        for (const [name, state] of Object.entries(stateMachine.States)) {
          if (NarrowTerminatingState(state)) {
            if (state.End === true) {
              state.Next = "_WhileCondition"
            }
          } else {
            if (state.Type === "Success") {
              delete stateMachine[name];
              for (const state2 of Object.values(stateMachine.States)) {
                if (NarrowTerminatingState(state2)) {
                  if (state2.Next == name) {
                    state2.Next = "_WhileCondition";
                  }
                }
              }
            }
          }
        }
        stateMachine.States["_WhileCondition"] = {
          Type: "Choice",
          Choices: [
            { Next: stateMachine.StartAt, ...originalArg.Condition }
          ],
          Default: "_WhileExit"
        } as asl.Choice;
        stateMachine.States["_WhileExit"] = {
          Type: "Success"
        } as asl.Succeed;
        stateMachine.StartAt = "_WhileCondition";
        argument = {
          Branches: [
            stateMachine
          ]
        } as asl.Parallel;
      }
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



const convertObjectLiteralExpressionToObject = (expression: ts.ObjectLiteralExpression, argName: string, others: NameAndState[], factory: StateFactory, asltype?: string): any => {
  let result = {};

  for (const prop of expression.properties) {
    if (!ts.isPropertyAssignment(prop) || !ts.isIdentifier(prop.name)) throw new Error("Call expression argument must be object literal expression with only property assignments");
    const propName = prop.name.text;
    if (propName === "BlockInvoke") {
      if (expression.properties.length !== 1) throw new Error("BlockInvoke must be only property of object");
      if (!ts.isArrowFunction(prop.initializer) || !ts.isBlock(prop.initializer.body)) throw new Error(`NextInvoke must be arrow function with block`);

      const statemachine = transpile(prop.initializer.body);
      result = statemachine;

    } else if (propName === "WhileInvoke") {
      if (!ts.isArrowFunction(prop.initializer) || !ts.isBlock(prop.initializer.body)) throw new Error(`WhileInvoke must be arrow function with block`);
      result["WhileInvoke"] = transpile(prop.initializer.body);

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
      const value = convertExpressionToLiteral(prop.initializer, argName, others, factory);

      if (asltype === "Wait") {
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

const convertExpressionToLiteral = (expression: ts.Expression, argName: string, others: NameAndState[], factory: StateFactory): any => {
  if (ts.isArrayLiteralExpression(expression)) {
    return expression.elements.map(x => convertExpressionToLiteral(x, argName, others, factory));
  } else if (ts.isLiteralExpression(expression)) {
    let value: String | Number = expression.text;
    if (ts.isNumericLiteral(expression)) {
      value = new Number(value).valueOf();
    }
    return value;
  } else if (ts.isPropertyAccessExpression(expression) && ts.isIdentifier(expression.expression) && expression.expression.text === argName) {
    return `$.${expression.name.text}`;
  } else if (ts.isPropertyAccessExpression(expression) || ts.isIdentifier(expression)) {
    return convertToDollarSyntax(expression);
  }
  else if (expression.kind === SyntaxKind.TrueKeyword) {
    return true;
  } else if (expression.kind === SyntaxKind.FalseKeyword) {
    return false;
  } else if (ts.isObjectLiteralExpression(expression)) {
    let obj = convertObjectLiteralExpressionToObject(expression, argName, others, factory);
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