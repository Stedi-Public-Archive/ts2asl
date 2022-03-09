import * as ts from "typescript";

const evalPreferOriginal = <T>(node: ts.Node, fn: (node: ts.Node) => T): T => {
  const original = (node as any).original;
  if (original !== undefined) {
    return fn(original);
  }

  return fn(node);
}

const getLineNumber = (node: ts.Node, pos: number): string | undefined => {
  const sourceFile = node.getSourceFile();
  if (sourceFile) {
    const lineAndPos = sourceFile.getLineAndCharacterOfPosition(pos)
    return `${lineAndPos.line + 2}: `;
  }
  return undefined;
}

export const createName = (mainNode: ts.Node, format: string, ...nodes: (ts.Node | undefined)[]) => {
  let texts: string[] = [];

  const pos: number | undefined = evalPreferOriginal(mainNode, node => node.pos);
  let ln: string | undefined;

  if (pos >= 0) {
    ln = evalPreferOriginal(mainNode, node => getLineNumber(node, pos));
  }
  for (const node of nodes) {
    if (!node) continue;
    if (ln === undefined && pos >= 0) {
      ln = getLineNumber(node, pos);
    }
    try {
      if ((node as any).original) {
        const text = (node as any).original.getText();
        texts.push(text);
      } else {
        const text = node.getText();
        texts.push(text);
      }
    } catch {
      const text = "???";
      texts.push(text);
    }
  }
  let name = sprintf(format, texts);
  if (name.length > 29) {
    name = name.substring(0, 25) + " ...";
  }
  name = name.replace(/\s+/g, " ")
  if (ln !== undefined) {
    return ln + name;
  }

  return name;
}



function sprintf(fmt: string, args: string[]) {
  var i = 0;
  return fmt.replace(/%((%)|s|d)/g, (m: string) => {
    let val: string = "";
    val = args[i];
    i++;
    return val;
  });
}
