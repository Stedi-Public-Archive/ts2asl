import * as ts from 'typescript';
import factory = ts.factory;


export const convertToBlock = (node: ts.Node): ts.Block => {

  let context = node;
  if (ts.isArrowFunction(node)) {
    if (node.parameters.length !== 0) throw new Error(`cannot convert arrow function to block, arrow function must not have parameters`);
    context = node.body;
  }

  if (ts.isBlock(context)) return context;

  return factory.createBlock([context as ts.Statement])
};