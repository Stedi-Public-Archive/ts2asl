// import * as ts from 'typescript';
import * as iasl from "../intermediary-asl/ast"
import { Operator } from 'asl-types/dist/choice';
import { convertIdentifierToPathExpression } from "./aslfactory";

export function createChoiceOperator(expression: iasl.BinaryExpression): Operator {
  return {
    Variable: convertIdentifierToPathExpression(expression.lhs as iasl.Identifier),
    "StringEquals": (expression.rhs as iasl.LiteralExpression).value as string
  }
}


