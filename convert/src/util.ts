import ts from "typescript"

export const isLiteral = (node: ts.Node, recurse: boolean): boolean => {
  if (ts.isLiteralExpression(node)) {
    return true;
  }
  if (node.kind === ts.SyntaxKind.TrueKeyword || node.kind === ts.SyntaxKind.FalseKeyword || node.kind === ts.SyntaxKind.NullKeyword) {
    return true;
  }
  if (ts.isObjectLiteralExpression(node)) {
    if (!recurse) {
      return true;
    }

    for (const prop of node.properties) {
      if (ts.isPropertyAssignment(prop)) {
        if (!isLiteral(prop.initializer, recurse)) {
          return false;
        }
      }
      if (ts.isShorthandPropertyAssignment(prop)) {
        return false;
      }
      if (ts.isSpreadAssignment(prop)) {
        if (!isLiteral(prop.expression, recurse)) {
          return false;
        }
      }
    }
    return true;
  }
  if (ts.isArrayLiteralExpression(node)) {
    return !recurse || node.elements.every(x => isLiteral(x, recurse));
  }
  return false;
}