
import * as ts from 'typescript';
import * as asl from "@ts2asl/asl-lib/lib/deploy";
import { valueToLiteralExpression } from '../../util';
import { isAslCallExpression } from './node-utility';

export const deployTimeStatementTransformer = <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);

    if (ts.isCallExpression(node)) {

      if (ts.isCallExpression(node)) {
        let type = isAslCallExpression(node);

        if (type === "deploy.getParameter") {
          if (!ts.isStringLiteral(node.arguments[0])) throw new Error(`first argument to asl.deploy.getParameter must be a literal (not a variable)`);
          const paramName = node.arguments[0].text;
          const val = asl.deploy.getParameter(paramName);

          return valueToLiteralExpression(val as any);
        }
        if (type === "deploy.getLambdaName") {
          if (!ts.isStringLiteral(node.arguments[0])) throw new Error(`first argument to asl.deploy.getLambdaName must be a literal (not a variable)`);
          const paramName = node.arguments[0].text;
          const val = asl.deploy.getLambdaName(paramName);

          return valueToLiteralExpression(val as any);
        }
        if (type === "deploy.getLambdaArn") {
          if (!ts.isStringLiteral(node.arguments[0])) throw new Error(`first argument to asl.deploy.getLambdaArn must be a literal (not a variable)`);
          const paramName = node.arguments[0].text;
          const val = asl.deploy.getLambdaArn(paramName);

          return valueToLiteralExpression(val as any);
        }
        if (type === "deploy.getStateMachineName") {
          if (!ts.isStringLiteral(node.arguments[0])) throw new Error(`first argument to asl.deploy.getStateMachineName must be a literal (not a variable)`);
          const paramName = node.arguments[0].text;
          const val = asl.deploy.getStateMachineName(paramName);
        }
        if (type === "deploy.getStateMachineArn") {
          if (!ts.isStringLiteral(node.arguments[0])) throw new Error(`first argument to asl.deploy.getStateMachineArn must be a literal (not a variable)`);
          const paramName = node.arguments[0].text;
          const val = asl.deploy.getStateMachineArn(paramName);

          return valueToLiteralExpression(val as any);
        }
      }

    }

    return node;
  }
  return ts.visitNode(rootNode, visit);
};
