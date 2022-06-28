import * as iasl from "../convert-asllib-to-iasl/ast";
import { Operator } from 'asl-types/dist/choice';
import { AslRhsFactory } from "./aslfactory.rhs";
import { AslWriter } from "./asl-writer";
import { BinaryExpressionFactory } from "../convert-asllib-to-iasl/iaslfactory";
import exp from "constants";


export function createChoiceOperator(expression: iasl.BinaryExpression | iasl.LiteralExpression | iasl.Identifier, scopes: Record<string, iasl.Scope>, context: AslWriter): Operator {

  if (iasl.Check.isIdentifier(expression) || iasl.Check.isAslIntrinsicFunction(expression) || iasl.Check.isConditionalExpression(expression)) {
    expression = BinaryExpressionFactory.create({
      operator: "is-truthy",
      rhs: expression,
    });
  }

  if (iasl.Check.isBinaryExpression(expression) && expression.operator === "is-truthy") {
    if (iasl.Check.isLiteral(expression.rhs)) {
      expression = expression.rhs;
    }
  }

  if (iasl.Check.isLiteral(expression)) {
    if (expression.value) {
      return { // always true
        Variable: "$",
        IsNull: false
      };
    } else {
      return { // always false
        Variable: "$",
        IsNull: true
      };
    }
  }

  if (expression.operator === "exists-in") {
    if (!iasl.Check.isLiteral(expression.lhs) || expression.lhs.type !== "string" || (expression.lhs.value as string).length === 0) throw new Error("binary expression with 'exists-in' operand must have string literal as lhs");
    const expr = AslRhsFactory.appendIasl(expression.rhs, scopes, context);
    if (!("path" in expr)) throw new Error("exists in must apply to reference");
    return {
      Variable: expr.path + `.${expression.lhs.value}`,
      IsPresent: true
    };
  }

  if (expression.operator === "is-truthy") {
    if (expression.lhs) throw new Error("binary expression with 'is-truthy' operand should not have lhs");
    let expr = AslRhsFactory.appendIasl(expression.rhs, scopes, context, true);
    expr = AslRhsFactory.convertToPath(expr, context);
    //if type of boolean we use a simple 'BooleanEquals' check
    if (expr.type === "boolean") {
      return {
        Not: {
          Variable: expr.path,
          BooleanEquals: false
        }
      };
    }
    if (expr.type === "object") {
      return {
        Not: {
          Or: [
            {
              Variable: expr.path,
              IsPresent: false
            },
            {
              Variable: expr.path,
              IsNull: true
            }
          ]
        }
      };
    }
    if (expr.type === "string") {
      return {
        Not: {
          Or: [
            {
              Variable: expr.path,
              IsPresent: false
            },
            {
              Variable: expr.path,
              IsNull: true
            },
            {
              Variable: expr.path,
              StringEquals: ""
            },
            {
              Variable: expr.path,
              StringEquals: "false"
            },
            {
              Variable: expr.path,
              StringEquals: "0"
            },
          ]
        }
      };
    }
    if (expr.type === "numeric") {
      return {
        Not: {
          Or: [
            {
              Variable: expr.path,
              IsPresent: false
            },
            {
              Variable: expr.path,
              IsNull: true
            },
            {
              Variable: expr.path,
              NumericEquals: 0
            }
          ]
        }
      };
    }

    //otherwise we do "truthy" check 
    const notTruthy = {
      Or: [
        {
          Variable: expr.path,
          IsPresent: false
        },
        {
          Variable: expr.path,
          IsNull: true
        },
        {
          Variable: expr.path,
          BooleanEquals: false
        },
        {
          Variable: expr.path,
          StringEquals: ""
        },
        {
          Variable: expr.path,
          StringEquals: "false"
        },
        {
          Variable: expr.path,
          StringEquals: "0"
        },
        {
          Variable: expr.path,
          NumericEquals: 0
        }
      ]
    };
    return {
      Not: notTruthy
    };
  }

  if (expression.operator === "not") {
    if (iasl.Check.isIdentifier(expression.rhs)) {
      const truthy = createChoiceOperator(expression.rhs, scopes, context);
      if (truthy.Not === undefined) throw new Error("truthy check expected to have Not");
      return truthy.Not;
    }
    if (iasl.Check.isBinaryExpression(expression.rhs)) {
      const notExpression = createChoiceOperator(expression.rhs, scopes, context);
      if (notExpression.IsNumeric === true) {
        return { ...notExpression, IsNumeric: false };
      } else if (notExpression.IsBoolean === true) {
        return { ...notExpression, IsBoolean: false };
      }

      const operator = createChoiceOperator(expression.rhs, scopes, context);
      if (operator.Not) {
        return operator.Not;
      }
      return {
        Not: operator
      };
    } else {
      return {
        Not: AslRhsFactory.appendIasl(expression.rhs, scopes, context)
      };
    }
  }

  if (iasl.Check.isBinaryExpression(expression.lhs) || iasl.Check.isBinaryExpression(expression.rhs)) {
    let operands: Operator[] = [];
    if (expression.lhs) {
      if (iasl.Check.isBinaryExpression(expression.lhs)) {
        operands.push(createChoiceOperator(expression.lhs, scopes, context));
      } else {
        operands.push(AslRhsFactory.appendIasl(expression.lhs, scopes, context));
      }
    }

    if (expression.rhs) {
      if (iasl.Check.isBinaryExpression(expression.rhs)) {
        operands.push(createChoiceOperator(expression.rhs, scopes, context));
      } else {
        operands.push(AslRhsFactory.appendIasl(expression.rhs, scopes, context));
      }
    }

    if (expression.operator === "and") {
      const And: Operator[] = [];
      for (const operator of operands) {
        if (operator.And) {
          And.push(...operator.And);
        } else {
          And.push(operator);
        }
      }
      return {
        And: operands
      };
    } else if (expression.operator === "or") {
      const Or: Operator[] = [];
      for (const operator of operands) {
        if (operator.Or) {
          Or.push(...operator.Or);
        } else {
          Or.push(operator);
        }
      }
      return {
        Or
      };
    }
  }
  if (iasl.Check.isTypeOfExpression(expression.lhs) || iasl.Check.isTypeOfExpression(expression.rhs)) {
    if (expression.operator !== "eq") throw new Error("if lhs or rhs is typeof expression, operator must be equals (e.g. typeof myvar === 'string'");
    if (iasl.Check.isTypeOfExpression(expression.lhs) && iasl.Check.isLiteral(expression.rhs) && iasl.Check.isIdentifier(expression.lhs.operand)) {
      const convered = AslRhsFactory.appendIasl(expression.lhs.operand, scopes, context);
      const result = {
        And: [{
          Variable: convered.path,
          IsPresent: true
        } as any]
      };

      switch (expression.rhs.value) {
        case "string":
          result.And.push({
            Variable: convered.path,
            IsString: true,
          });
          break;
        case "number":
          result.And.push({
            Variable: convered.path,
            IsNumeric: true,
          });
          break;
        case "boolean":
          result.And.push({
            Variable: convered.path,
            IsBoolean: true,
          });
          break;
        default:
          throw new Error("typeof must be one of 'string', 'number' or 'boolean'");
      }
      return result;
    }
  }
  const lhs = expression.lhs ? AslRhsFactory.appendIasl(expression.lhs, scopes, context) : undefined;
  const rhs = AslRhsFactory.appendIasl(expression.rhs, scopes, context);
  if (!lhs) throw new Error("expected lhs on binary expression");
  if ("value" in lhs) { //lhs will be bound to variable, must not be literal
    if ("value" in rhs) {
      throw new Error("expected either rhs or lhs to be path");
    }
    const reversedExpression = reverseBinaryExpression(expression);
    return createChoiceOperator(reversedExpression, scopes, context);
  }

  let operatorField = 'String';
  let type: iasl.Type | undefined = [lhs.type, rhs.type].find(x => x !== "unknown");
  if (type) {
    switch (type) {
      case "numeric":
        operatorField = "Numeric";
        break;
      case "boolean":
        operatorField = "Boolean";
        break;
      case "timestamp":
        operatorField = "Timestamp";
    }
  }
  switch (expression.operator) {
    case "eq":
      operatorField += 'Equals';
      break;
    case "gt":
      operatorField += 'GreaterThan';
      break;
    case "gte":
      operatorField += 'GreaterThanEquals';
      break;
    case "lt":
      operatorField += 'LessThan';
      break;
    case "lte":
      operatorField += 'LessThanEquals';
      break;
    case "matches":
      operatorField += 'Matches';
      break;
  }

  let operand = "value" in rhs ? rhs.value : undefined;
  if ("path" in rhs) {
    operatorField += 'Path';
    operand = rhs.path;
  }
  
  return {
    Variable: lhs.path,
    [operatorField]: operand
  };
}


const reverseBinaryExpression = (expression: iasl.BinaryExpression): iasl.BinaryExpression => {
  if (expression.lhs === undefined) throw new Error("expression must have both lhs and rhs in order to get reversed");
  switch (expression.operator) {
    case "matches":
    case "not":
    case "is-truthy":
      throw new Error(`binary expression ${expression.operator} cannot be revered.`);
    case "eq":
    case "and":
    case "or":
      return {
        ...expression,
        lhs: expression.rhs,
        rhs: expression.lhs
      };
    case "lte":
      return {
        ...expression,
        lhs: expression.rhs,
        rhs: expression.lhs,
        operator: "gt"
      };
    case "lt":
      return {
        ...expression,
        lhs: expression.rhs,
        rhs: expression.lhs,
        operator: "gte"
      };
    case "gte":
      return {
        ...expression,
        lhs: expression.rhs,
        rhs: expression.lhs,
        operator: "lt"
      };
    case "gt":
      return {
        ...expression,
        lhs: expression.rhs,
        rhs: expression.lhs,
        operator: "lte"
      };
  }

  throw new Error(`unable to reverse expression, ${JSON.stringify(expression, null, 2)} `);
};



