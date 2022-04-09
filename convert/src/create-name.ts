import * as ts from "typescript";
import { ConverterOptions } from "./convert";

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

export const createName = (converterOptions: ConverterOptions, mainNode: ts.Node, format: string, ...nodes: (ts.Node | undefined)[]) => {
  let texts: string[] = [];

  let ln: string | undefined;
  let pos: number | undefined = undefined;
  if (converterOptions.lineNumbersInStateNames) {
    const pos: number | undefined = evalPreferOriginal(mainNode, node => node.pos);

    if (pos >= 0) {
      ln = evalPreferOriginal(mainNode, node => getLineNumber(node, pos));
    }
  }
  for (const node of nodes) {
    if (!node) continue;
    if (converterOptions.lineNumbersInStateNames && ln === undefined && pos && pos >= 0) {
      ln = getLineNumber(node, pos);
    }
    try {
      if ((node as any).original && (node as any).original.pos !== -1) {
        const text = (node as any).original.getText();
        texts.push(text === undefined ? "" : text);
      } else {
        const text = node.pos != -1 ? node.getText() : undefined;
        texts.push(text === undefined ? "" : text);
      }
    } catch {
      const text = "";
      texts.push(text);
    }
  }
  let name = sprintf(format, texts);
  name = trimName(name);
  if (ln !== undefined) {
    return ln + name;
  }

  return name.trim();
}

export function trimName(name: string) {
  if (name.length > 29) {
    name = name.substring(0, 25) + " ...";
  }
  name = name.replace(/\s+/g, " ")
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
