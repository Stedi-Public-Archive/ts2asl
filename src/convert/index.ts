import ts from "typescript"
import asl from "asl-types"
import path from "path";
import { FunctionDeclaration, listFunctionDeclarations } from "./list-function-declarations";
import { transformBody } from "../lang-support";
import { transpile } from "../transpile";
import { readFileSync } from "fs";

export class Converter {

  declarations: FunctionDeclaration[];
  constructor(private sourceFile: ts.SourceFile, private directory: string, private filename: string) {
    this.declarations = listFunctionDeclarations(sourceFile);
  }

  convert(): asl.StateMachine {
    const main = this.declarations.find(x => x.name === "main");
    if (!main) throw new Error("no main function found");
    if (main.kind !== "asl") throw new Error("main function must be defined as ASL.StateMachine");

    const transformed = transformBody(main.body);
    const transpiled = transpile(transformed, main.argumentName);
    return transpiled;
  }


  static FromFile(file: string) {
    const directory = path.dirname(file);
    const filename = path.basename(file, ".ts");
    const source = readFileSync(file).toString("utf-8");
    const sourceFile: ts.SourceFile = ts.createSourceFile(
      filename, source, ts.ScriptTarget.ES2015, true, ts.ScriptKind.TS
    );
    return new Converter(sourceFile, directory, filename);
  }

  static FromSource(code: string) {
    const source = code;
    const sourceFile: ts.SourceFile = ts.createSourceFile(
      "ad-hoc.ts", source, ts.ScriptTarget.ES2015, true, ts.ScriptKind.TS
    );
    return new Converter(sourceFile, "./", "ad-hoc.ts");
  }
}