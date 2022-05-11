import * as asl from "asl-types";
import { createFilterExpression } from "./jsonpath-filter";
import * as iasl from "../convert-asllib-to-iasl/ast";
import { AslWriter } from "./asl-writer";
import { trimName } from "../create-name";
import { createChoiceOperator } from "./choice-utility";

export class AslRhsFactory {
  static appendIasl(expression: iasl.Expression, scopes: Record<string, iasl.Scope>, context: AslWriter, extractFunctionFromPath?: true): PathExpressionOrLiteral {
    if (expression === undefined || iasl.Check.isLiteral(expression) && (expression.value === undefined || expression.value === null)) {
      return { path: "$._undefined", type: "object" };
    } else if (iasl.Check.isConditionalExpression(expression)) {
      const whenTrueRhs = AslRhsFactory.appendIasl(expression.whenTrue, scopes, context, true);
      const whenFalseRhs = AslRhsFactory.appendIasl(expression.whenFalse, scopes, context, true);

      const path = {
        path: "$.tmp.var"
      } as PathExpressionOrLiteral;

      const choiceOperator = createChoiceOperator(expression.condition, scopes, context);

      const choiceState = {
        Type: "Choice",
        Choices: [],
        Comment: expression.source
      } as asl.Choice;
      context.appendNextState(choiceState, expression.stateName ?? "Eval Conditional");

      const whenTrue = context.appendChoiceOperator(choiceOperator);
      whenTrue.appendNextState({
        Type: "Pass",
        ResultPath: path.path,
        ...(whenTrueRhs.path !== undefined ? { InputPath: whenTrueRhs.path } : whenTrueRhs.valueContainsReplacements ? { Parameters: whenTrueRhs.value } : { Result: whenTrueRhs.value }),
      } as asl.Pass, "Conditional True");

      const defaultWriter = context.appendChoiceDefault();
      defaultWriter.appendNextState({
        Type: "Pass",
        ResultPath: path.path,
        ...(whenFalseRhs.path !== undefined ? { InputPath: whenFalseRhs.path } : whenFalseRhs.valueContainsReplacements ? { Parameters: whenFalseRhs.value } : { Result: whenFalseRhs.value }),
      } as asl.Pass, "Conditional False");


      context.finalizeChoiceState();
      return path;
    } else if (iasl.Check.isAslIntrinsicFunction(expression)) {
      let args: string[] = [];
      for (const arg of expression.arguments) {
        const convertedArg = AslRhsFactory.appendIasl(arg, scopes, context);
        const convertedArgAsArray = convertedArg.type === "array" ? convertedArg.value as [] : [convertedArg];
        for (const argFromArray of convertedArgAsArray) {
          if (argFromArray.path) {
            args.push(argFromArray.path);
          } else if (typeof argFromArray.value === "string") {
            args.push(`'${argFromArray.value}'`);
          } else if (typeof argFromArray.value === "object") {
            args.push(`${JSON.stringify(argFromArray.value, null, 2)}`);
          } else {
            args.push(`${argFromArray.value}`);
          }
        }
      }
      let intrinsicFunctionName = expression.function;
      if (intrinsicFunctionName.startsWith("asl.states.")) {
        const firstCharFunctionName = intrinsicFunctionName[11].toUpperCase();
        intrinsicFunctionName = "States." + firstCharFunctionName + intrinsicFunctionName.substring(12);
      }

      const path = `${intrinsicFunctionName}(${args.join(', ')})`;
      if (!extractFunctionFromPath) {
        return { path, type: "unknown" };
      } else {
        context.appendNextState({
          Type: "Pass",
          ResultPath: "$.tmp.eval",
          Parameters: {
            "value.$": path,
          },
        } as asl.Pass, trimName("Evaluate " + path.substring(7)));

        return { path: "$.tmp.eval.value", type: "unknown" };
      }
    } else if (iasl.Check.isIdentifier(expression)) {
      return { path: convertIdentifierToPathExpression(expression, scopes, context), type: expression.type ?? "unknown" };
    } else if (iasl.Check.isLiteral(expression)) {
      return {
        value: expression.value,
        type: expression.type,
        valueContainsReplacements: false,
      };
    } else if (iasl.Check.isLiteralArray(expression)) {
      const convertedElements = expression.elements.map(x => AslRhsFactory.appendIasl(x, scopes, context));
      if (convertedElements.some(x => x.path)) {
        throw new Error("initializing an array with an identifier as one of the elements is not supported yet");
      }
      return {
        value: convertedElements.map(x => x.value),
        type: "array",
        valueContainsReplacements: convertedElements.findIndex(x => x.path || x.valueContainsReplacements === true) !== -1
      };
    } else if (iasl.Check.isLiteralObject(expression)) {
      const value: Record<string, unknown> = {};
      let valueContainsReplacements: boolean = false;
      for (const [propName, propValue] of Object.entries(expression.properties)) {
        const result = AslRhsFactory.appendIasl(propValue, scopes, context);
        if (result.path) {
          valueContainsReplacements = true;
          value[propName + ".$"] = result.path;
        } else {
          value[propName] = result.value;
          if (result.valueContainsReplacements) {
            valueContainsReplacements = true;
          }
        }
      }
      return {
        value,
        type: "object",
        valueContainsReplacements,
      };
    }
    throw new Error(`unable to convert iasl expression to asl SyntaxKind: ${expression._syntaxKind}`);
  }

}

export interface PathExpressionOrLiteral {
  path?: string;
  value?: unknown;
  type: iasl.Type;
  valueContainsReplacements?: boolean;
};


export const convertIdentifierToPathExpression = (expr: iasl.Identifier, scopes: Record<string, iasl.Scope>, context: AslWriter): string => {
  let lhs = "";
  if (expr.lhs) {
    lhs += convertIdentifierToPathExpression(expr.lhs, scopes, context);
  }
  if (expr.indexExpression) {
    const indexExpr = AslRhsFactory.appendIasl(expr.indexExpression, scopes, context);
    if (indexExpr.path) {
      return lhs + "[" + indexExpr.path + "]" + expr.identifier;
    } else {
      return lhs + "[" + indexExpr.value + "]" + expr.identifier;
    }
  }

  let trailing = "";
  if (expr.jsonPathExpression) {
    trailing = expr.jsonPathExpression;
  } else if (expr.sliceExpression) {
    let expression = expr.sliceExpression.start + ':';
    if (expr.sliceExpression.end) expression += expr.sliceExpression.end;
    if (expr.sliceExpression.step) expression += ":" + expr.sliceExpression.step;
    trailing = `[${expression}]`;
  } else if (expr.filterExpression) {
    const expression = createFilterExpression(expr.filterExpression.argument.identifier, expr.filterExpression.expression);
    trailing = `[?(${expression})]`;
  } else if (expr.mapExpression) {
    trailing = `.${expr.mapExpression}`;
  }

  if (expr.identifier) {
    if (expr.identifier.startsWith("$")) {
      return expr.identifier + trailing;
    }
    if (!lhs) {
      if (expr.objectContextExpression) {
        return "$$." + expr.identifier + trailing;
      }
      if (!expr.compilerGenerated) {
        return "$.vars." + expr.identifier + trailing;
      } else {
        return "$.tmp." + expr.identifier + trailing;
      }
    }
    return lhs + "." + expr.identifier + trailing;

  } else {
    return lhs + trailing;
  }
};