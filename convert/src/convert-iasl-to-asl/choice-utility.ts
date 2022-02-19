import * as iasl from "../convert-asllib-to-iasl/ast"
import { Operator } from 'asl-types/dist/choice';
import { convertExpressionToAsl } from "./aslfactory";

export function createChoiceOperator(expression: iasl.BinaryExpression | iasl.LiteralExpression): Operator {

  if (iasl.Check.isLiteral(expression)) {
    if (expression.value) {
      return {//always true
        Variable: "$",
        IsNull: false
      }
    } else {
      return {//always false
        Variable: "$",
        IsNull: true
      }
    }
  }

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
    if (iasl.Check.isBinaryExpression(expression.rhs)) { //not(isPresent(xxx)) => {IsPresent: false, Variable: xxxx}
      const notExpression = createChoiceOperator(expression.rhs)
      if (notExpression.IsPresent === true) {
        return { ...notExpression, IsPresent: false };
      } else if (notExpression.IsNumeric === true) {
        return { ...notExpression, IsNumeric: false };
      } else if (notExpression.IsBoolean === true) {
        return { ...notExpression, IsBoolean: false };
      }
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
  if (iasl.Check.isTypeOfExpression(expression.lhs) || iasl.Check.isTypeOfExpression(expression.rhs)) {
    if (expression.operator !== "eq") throw new Error("if lhs or rhs is typeof expression, operator must be equals (e.g. typeof myvar === 'string'");
    if (iasl.Check.isTypeOfExpression(expression.lhs) && iasl.Check.isLiteral(expression.rhs) && iasl.Check.isIdentifier(expression.lhs.operand)) {
      const convered = convertExpressionToAsl(expression.lhs.operand);

      switch (expression.rhs.value) {
        case "string":
          return {
            Variable: convered.path,
            IsString: true,
          }
        case "number":
          return {
            Variable: convered.path,
            IsNumeric: true,
          }
        case "boolean":
          return {
            Variable: convered.path,
            IsBoolean: true,
          }
        default:
          throw new Error("typeof must be one of 'string', 'number' or 'boolean'");
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

  throw new Error(`unable to reverse expression, ${JSON.stringify(expression, null, 2)} `)
}



