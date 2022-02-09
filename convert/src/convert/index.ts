import ts from "typescript"
import * as iasl from "../convert-asllib-to-iasl/ast"
import asl, { StateMachine } from "asl-types"
import { listFunctionDeclarations } from "./list-function-declarations";
import { transformBody } from "../convert-ts-to-asllib";
import { convertToASl } from "../convert-iasl-to-asl";
import { convertToIntermediaryAsl } from "../convert-asllib-to-iasl";
import { createCompilerHost } from "../compiler-host";

export class Converter {
  host: {
    program: ts.Program;
    typeChecker: ts.TypeChecker
  };

  constructor(private sourceFile: ts.SourceFile, private sourceDir: string) {
    this.host = createCompilerHost(this.sourceFile);
  }

  convert(includeDiagnostics: boolean = false): Converted {
    const declarations = listFunctionDeclarations(this.sourceFile);

    const lambdas: ConvertedLambda[] = [];
    const stateMachines: ConvertedStateMachine[] = [];
    for (const decl of declarations) {
      if (decl.kind === "asl") {
        const transformed = transformBody(decl.body);
        const transpiled = convertToIntermediaryAsl(transformed, this.host.typeChecker, decl.argumentName);
        const asl = convertToASl(transpiled)!;
        const result = { name: decl.name, asl };
        if (includeDiagnostics) {
          const withDiagnostics: Record<string, unknown> = result;
          withDiagnostics["transformedCode"] = ts.createPrinter().printNode(ts.EmitHint.Unspecified, transformed, this.sourceFile);
          withDiagnostics["iasl"] = transpiled;
        }
        stateMachines.push(result);
      } else if (decl.kind == "lambda") {
        lambdas.push({
          name: decl.name
        })
      }
    }

    return {
      lambdas,
      stateMachines,
    } as Converted;

  }


  static FromSource(code: string) {
    const source = code;
    const sourceFile: ts.SourceFile = ts.createSourceFile(
      "ad-hoc.ts", source, ts.ScriptTarget.ES2015, true, ts.ScriptKind.TS
    );
    return new Converter(sourceFile, "./");
  }
}

export interface Converted {
  lambdas: ConvertedLambda[];
  stateMachines: ConvertedStateMachine[];
}

export interface ConvertedLambda {
  name: string;
}
export interface ConvertedStateMachine {
  name: string;
  asl: StateMachine;
}