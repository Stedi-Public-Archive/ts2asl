import * as ts from 'typescript';

export class ParserError extends Error {
  constructor(message: string, node: ts.Node) {

    let nodeText = "??"
    try {
      nodeText = node.getText();
    } catch {

    }

    const context = node ? `
Kind: ${ts.SyntaxKind[node.kind]}
Source: ${nodeText}
    ` : `Node: undefined`;

    super(message + "\n" + context)
  }
}