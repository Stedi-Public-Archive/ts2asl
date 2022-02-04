// import * as ts from 'typescript';
import * as iasl from "../convert-asllib-to-iasl/ast"
import { Operator } from 'asl-types/dist/choice';
import { convertExpressionToAsl, convertIdentifierToPathExpression } from "./aslfactory";

export function createChoiceOperator(expression: iasl.BinaryExpression): Operator {

  if (expression.operator === "is-present") {
    if (expression.lhs) throw new Error("binary expression with 'is-present' operand should not have lhs");
    if (!iasl.Check.isIdentifier(expression.rhs)) throw new Error("binary expression with 'is-present' rhs must be identifier");
    const expr = convertExpressionToAsl(expression.rhs);
    return {
      Variable: expr.path,
      IsPresent: true //todo: consider this https://stackoverflow.com/questions/63039270/aws-step-function-check-for-null
    }
  }

  if (expression.operator === "not") {
    //todo: optimize not(isPresent(el)) to isNotPresent(el)
    if (iasl.Check.isBinaryExpression(expression.rhs)) {
      return {
        Not: createChoiceOperator(expression.rhs)
      }
    } else {
      return {
        Not: convertExpressionToAsl(expression.rhs)
      }
    }
  }

  if (iasl.Check.isBinaryExpression(expression.lhs) || iasl.Check.isBinaryExpression(expression.rhs)) {
    let operands: any[] = [];
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
      return {
        And: operands
      }
    } else if (expression.operator === "or") {
      return {
        Or: operands
      }
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
    operand = '$.' + rhs.path;
  }

  return {
    Variable: `$.${lhs.path}`,
    [operatorField]: operand
  }
}


const reverseBinaryExpression = (expression: iasl.BinaryExpression): iasl.BinaryExpression => {
  if (expression.lhs === undefined) throw new Error("expression must have both lhs and rhs in order to get reversed");
  switch (expression.operator) {
    case "matches":
    case "not":
    case "is-present":
      throw new Error("binary expression 'matches' cannot be revered.");
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

  throw new Error(`unable to reverse expression, ${JSON.stringify(expression, null, 2)}`)
}

