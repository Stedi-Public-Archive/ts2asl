import * as iasl from "../convert-asllib-to-iasl/ast"
export const createFilterExpression = (argumentName: string, expression: iasl.BinaryExpression | iasl.Identifier): string => {

  if (iasl.Check.isIdentifier(expression)) {
    return convertOperand(argumentName, expression);
  }
  if (expression.operator === "not") {
    if (iasl.Check.isBinaryExpression(expression.rhs)) {
      const converted = createFilterExpression(argumentName, expression.rhs);
      return "!(" + converted + ")";
    } else if (iasl.Check.isIdentifier(expression.rhs)) {
      const jsonPathIdentifier = checkLocalVariable(argumentName, expression.rhs);
      return "!" + jsonPathIdentifier;
    }
    else {
      throw Error("json path filter expressions can only use not on expression or literal.")
    }
  }

  if (expression.operator === "is-truthy") {
    if (expression.lhs) throw new Error("binary expression with 'is-truthy' operand should not have lhs");
    if (!iasl.Check.isIdentifier(expression.rhs)) throw new Error("binary expression with 'is-truthy' rhs must be identifier");
    const jsonPathIdentifier = checkLocalVariable(argumentName, expression.rhs);
    return jsonPathIdentifier;
  }

  if (expression.operator === "and" || expression.operator === "or") {
    if (!expression.lhs || !iasl.Check.isBinaryExpression(expression.lhs)) throw new Error(`and expression must have binary expression at lhs`);
    if (!iasl.Check.isBinaryExpression(expression.rhs)) throw new Error(`and expression must have binary expression at lhs`);

    let operator = expression.operator === "and" ? "&&" : "||";
    let lhsConverted = createFilterExpression(argumentName, expression.lhs);
    let rhsConverted = createFilterExpression(argumentName, expression.rhs);

    return `${lhsConverted} ${operator} ${rhsConverted}`;

  }

  let jsonPathOperator: undefined | string;
  switch (expression.operator) {
    case "eq":
      jsonPathOperator = "=="
      break;

    case "gt":
      jsonPathOperator = ">"
      break;

    case "gte":
      jsonPathOperator = ">="
      break;

    case "lt":
      jsonPathOperator = "<"
      break;

    case "lte":
      jsonPathOperator = "<="
      break;

    default:
      throw new Error("json path operator conversion from " + expression.operator + " is not supported yet");
  }
  if (!expression.lhs) throw new Error("expected lhs on expression");
  let lhs = convertOperand(argumentName, expression.lhs);
  let rhs = convertOperand(argumentName, expression.rhs);

  return `${lhs} ${jsonPathOperator} ${rhs}`
}

const convertOperand = (argumentName, operand: iasl.Expression | iasl.Identifier) => {
  if (iasl.Check.isIdentifier(operand)) {
    return checkLocalVariable(argumentName, operand);
  } else if (iasl.Check.isLiteral(operand)) {
    if (typeof operand.value === "string") {
      return `'${operand.value}'`;
    }
    return String(operand.value);
  }
  throw new Error(`unable to convert operand of type ${operand._syntaxKind} to json path operand`);
}

const checkLocalVariable = (argumentName: string, identifier: iasl.Identifier): string => {
  const identifierName = identifier.identifier;
  if (!identifierName.startsWith(`${argumentName}.`)) throw new Error(`identifer ${identifierName} is not a local variable, must start with ${argumentName}.`);

  return "@." + identifierName.substring(argumentName.length + 1);
}