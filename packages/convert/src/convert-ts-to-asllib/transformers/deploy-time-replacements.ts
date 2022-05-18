
import * as ts from 'typescript';
import * as asl from "@ts2asl/asl-lib/lib/deploy";
import { valueToLiteralExpression } from '../../util';
import { isAslCallExpression } from './node-utility';
import { ParserError } from '../../ParserError';

export const deployTimeStatementTransformer = <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);

    if (ts.isCallExpression(node)) {

      if (ts.isCallExpression(node)) {
        let type = isAslCallExpression(node);
        if (type === "runtime.createError") {
          if (node.arguments.length !== 2) throw new Error(`call to asl.runtime.createError must have 2 arguments`);
          if (!ts.isStringLiteral(node.arguments[0])) throw new Error(`first argument to asl.runtime.createError must be a literal string (not a variable)`);
          if (!ts.isStringLiteral(node.arguments[1])) throw new Error(`second argument to asl.runtime.createError must be a literal string (not a variable)`);

          return ts.factory.createNewExpression(ts.factory.createIdentifier(node.arguments[0].text), undefined, [node.arguments[1]])
        }
        if (type === "deploy.getParameter") {
          if (!ts.isStringLiteral(node.arguments[0])) throw new Error(`first argument to asl.deploy.getParameter must be a literal string (not a variable)`);
          const paramName = node.arguments[0].text;
          const val = asl.deploy.getParameter(paramName);

          return valueToLiteralExpression(val as any);
        }
        if (type === "deploy.getLambdaName") {
          const paramName = getFunctionName(node.arguments[0]);
          const val = asl.deploy.getLambdaName(paramName);

          return valueToLiteralExpression(val as any);
        }
        if (type === "deploy.getLambdaArn") {
          const paramName = getFunctionName(node.arguments[0]);
          const val = asl.deploy.getLambdaArn(paramName);

          return valueToLiteralExpression(val as any);
        }
        if (type === "deploy.getStateMachineName") {
          const paramName = getFunctionName(node.arguments[0]);
          const val = asl.deploy.getStateMachineName(paramName);

          return valueToLiteralExpression(val as any);
        }
        if (type === "deploy.getStateMachineArn") {
          const paramName = getFunctionName(node.arguments[0]);
          const val = asl.deploy.getStateMachineArn(paramName);

          return valueToLiteralExpression(val as any);
        }
      }

    }

    return node;
  }
  return ts.visitNode(rootNode, visit);
};


const getFunctionName = (node: ts.Node): string => {
  if (ts.isStringLiteral(node)) {
    return node.text;
  } else if (ts.isIdentifier(node)) {
    return node.text;
  }
  throw new ParserError("Unable to infer function name", node);
}
