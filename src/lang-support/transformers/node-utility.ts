import * as ts from 'typescript';

export const findParent = (node: ts.Node, predicate: (node: ts.Node) => boolean) => {
  let contextual = node.parent;
  while (contextual && !predicate(contextual)) {
    if (ts.isBlock(contextual)) return undefined;
    contextual = contextual.parent;
  }

  return contextual;
}