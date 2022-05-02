import * as ts from 'typescript';
import { ParserError } from '../../ParserError';
import { isAslCallExpression } from './node-utility';
const factory = ts.factory;


export const evalConstTransformer = (typeChecker: ts.TypeChecker) => <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);
    if (ts.isCallExpression(node)) {
      const aslCall = isAslCallExpression(node);
      if (aslCall === "deploy.evalConst") {
        if (node.arguments.length !== 1) {
          throw new ParserError("deploy.evalConst is expected to be called with 1 argument", node);
        }

        if (!ts.isIdentifier(node.arguments[0])) throw new ParserError("deploy.evalConst is expected to be called with identifier", node);
        const identifier = node.arguments[0];
        const symbol = typeChecker.getSymbolAtLocation(identifier);
        if (!symbol) throw new ParserError(`unable to resolve symbol of ${identifier.text}`, node);
        const decls = symbol.getDeclarations();
        if (!decls || decls.length === 0) throw new ParserError(`unable to resolve symbol of ${identifier.text}`, node);
        const decl = decls.find(x => true) as ts.Node;
        if (!ts.isVariableDeclaration(decl)) throw new ParserError(`unable to resolve symbol of ${identifier.text}`, node);
        if (!decl.initializer) throw new ParserError(`unable to resolve symbol of ${identifier.text}`, node);
        if (decl.initializer) {
          return decl.initializer;
        }
      }
    }
    return node;
  }
  return ts.visitNode(rootNode, visit);
};
