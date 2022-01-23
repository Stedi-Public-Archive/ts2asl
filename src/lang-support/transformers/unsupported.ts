import * as ts from 'typescript';
import { ParserError } from '../../ParserError';
import { findParent, isLiteralOrIdentifier } from './node-utility';
import factory = ts.factory;


const SingleQuote = true;

const validExamples = ``;

export const unsupportedStatementTransformer = <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);
    if (ts.isDoStatement(node)) throw new ParserError(`do statement is not supported`, node);
    if (ts.isForInStatement(node)) throw new ParserError(`for ... in statement is not supported (for ... of statement is supported!)`, node);
    if (ts.isForStatement(node)) throw new ParserError(`for statement is not supported (for ... of statement is supported!)`, node);

    return node;
  }
  return ts.visitNode(rootNode, visit);
};
