import * as iasl from "../convert-asllib-to-iasl/ast"
import { Operator } from 'asl-types/dist/choice';
import { convertExpressionToAsl } from "./aslfactory";

export function createChoiceOperator(expression: iasl.BinaryExpression | iasl.LiteralExpression | iasl.Identifier): Operator {

  if (iasl.Check.isIdentifier(expression)) {
    expression = {
      _syntaxKind: iasl.SyntaxKind.BinaryExpression,
      operator: "is-truthy",
      rhs: expression,
    } as iasl.BinaryExpression;
  }

  if (iasl.Check.isLiteral(expression)) {
    if (expression.value) {
      return { // always true
        Variable: "$",
        IsNull: false
      }
    } else {
      return { // always false
        Variable: "$",
        IsNull: true
      }
    }
  }

  if (expression.operator === "is-truthy") {
    if (expression.lhs) throw new Error("binary expression with 'is-truthy' operand should not have lhs");
    if (!iasl.Check.isIdentifier(expression.rhs)) {
      throw new Error("binary expression with 'is-truthy' rhs must be identifier, found: " + expression.rhs._syntaxKind);
    }


    const expr = convertExpressionToAsl(expression.rhs);
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
      const truthy = createChoiceOperator(expression.rhs);
      if (truthy.Not === undefined) throw new Error("truthy check expected to have Not");
      return truthy.Not;
    }
    if (iasl.Check.isBinaryExpression(expression.rhs)) {
      const notExpression = createChoiceOperator(expression.rhs)
      if (notExpression.IsNumeric === true) {
        return { ...notExpression, IsNumeric: false };
      } else if (notExpression.IsBoolean === true) {
        return { ...notExpression, IsBoolean: false };
      }

      const operator = createChoiceOperator(expression.rhs);
      if (operator.Not) {
        return operator.Not;
      }
      return {
        Not: operator
      }
    } else {
      return {
        Not: convertExpressionToAsl(expression.rhs)
      }
    }
  }

  if (iasl.Check.isBinaryExpression(expression.lhs) || iasl.Check.isBinaryExpression(expression.rhs)) {
    let operands: Operator[] = [];
    if (expression.lhs) {
      if (iasl.Check.isBinaryExpression(expression.lhs)) {
        operands.push(createChoiceOperator(expression.lhs));
      } else {
        operands.push(convertExpressionToAsl(expression.lhs));
      }
    }

    if (expression.rhs) {
      if (iasl.Check.isBinaryExpression(expression.rhs)) {
        operands.push(createChoiceOperator(expression.rhs));
      } else {
        operands.push(convertExpressionToAsl(expression.rhs));
      }
    }

    if (expression.operator === "and") {
      const And: Operator[] = [];
      for (const operator of operands) {
        if (operator.And) {
          And.push(...operator.And);
        } else {
          And.push(operator)
        }
      }
      return {
        And: operands
      }
    } else if (expression.operator === "or") {
      const Or: Operator[] = [];
      for (const operator of operands) {
        if (operator.Or) {
          Or.push(...operator.Or);
        } else {
          Or.push(operator)
        }
      }
      return {
        Or
      }
    }
  }
  if (iasl.Check.isTypeOfExpression(expression.lhs) || iasl.Check.isTypeOfExpression(expression.rhs)) {
    if (expression.operator !== "eq") throw new Error("if lhs or rhs is typeof expression, operator must be equals (e.g. typeof myvar === 'string'");
    if (iasl.Check.isTypeOfExpression(expression.lhs) && iasl.Check.isLiteral(expression.rhs) && iasl.Check.isIdentifier(expression.lhs.operand)) {
      const convered = convertExpressionToAsl(expression.lhs.operand);
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
          })
          break;
        case "number":
          result.And.push({
            Variable: convered.path,
            IsNumeric: true,
          })
          break;
        case "boolean":
          result.And.push({
            Variable: convered.path,
            IsBoolean: true,
          })
          break;
        default:
          throw new Error("typeof must be one of 'string', 'number' or 'boolean'");
      }
      return result;
    }
  }
  const lhs = expression.lhs ? convertExpressionToAsl(expression.lhs) : undefined;
  const rhs = convertExpressionToAsl(expression.rhs);
  if (!lhs) throw new Error("expected lhs on binary expression");
  if (lhs.path === undefined) { //lhs will be bound to variable, must not be literal
    if (rhs.path === undefined) {
      throw new Error("expected either rhs or lhs to be path");
    }
    const reversedExpression = reverseBinaryExpression(expression);
    return createChoiceOperator(reversedExpression);
  }

  let operatorField = 'String';
  let type: iasl.Type | undefined = [lhs.type, rhs.type].find(x => x !== "unknown")
  if (type) {
    switch (type) {
      case "numeric":
        operatorField = "Numeric"
        break;
      case "boolean":
        operatorField = "Boolean"
        break;
      case "timestamp":
        operatorField = "Timestamp"
    }
  }
  switch (expression.operator) {
    case "eq":
      operatorField += 'Equals'
      break;
    case "gt":
      operatorField += 'GreaterThan'
      break;
    case "gte":
      operatorField += 'GreaterThanEquals'
      break;
    case "lt":
      operatorField += 'LessThan'
      break;
    case "lte":
      operatorField += 'LessThanEquals'
      break;
    case "matches":
      operatorField += 'Matches'
      break;
  }

  let operand = rhs.value;
  if (rhs.path) {
    operatorField += 'Path';
    operand = rhs.path;
  }

  return {
    Variable: lhs.path,
    [operatorField]: operand
  }
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
      }
    case "lte":
      return {
        ...expression,
        lhs: expression.rhs,
        rhs: expression.lhs,
        operator: "gt"
      }
    case "lt":
      return {
        ...expression,
        lhs: expression.rhs,
        rhs: expression.lhs,
        operator: "gte"
      }
    case "gte":
      return {
        ...expression,
        lhs: expression.rhs,
        rhs: expression.lhs,
        operator: "lt"
      }
    case "gt":
      return {
        ...expression,
        lhs: expression.rhs,
        rhs: expression.lhs,
        operator: "lte"
      }
  }

  throw new Error(`unable to reverse expression, ${JSON.stringify(expression, null, 2)} `)
}



