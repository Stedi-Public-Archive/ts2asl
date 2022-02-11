import ts from "typescript"
import * as iasl from "../convert-asllib-to-iasl/ast"
import asl, { StateMachine } from "asl-types"
import { listFunctionDeclarations } from "./list-function-declarations";
import { transformBody } from "../convert-ts-to-asllib";
import { convertToASl } from "../convert-iasl-to-asl";
import { convertToIntermediaryAsl } from "../convert-asllib-to-iasl";
import { ICompilerHost } from "../compiler-host";

export class Converter {
  sourceFile: ts.SourceFile;
  typeChecker: ts.TypeChecker;
  program: ts.Program;

  constructor(compilerHost: ICompilerHost) {
    this.sourceFile = compilerHost.sourceFile;
    this.typeChecker = compilerHost.typeChecker;
    this.program = compilerHost.program;
  }

  convert(includeDiagnostics: boolean = false): Converted {
    const declarations = listFunctionDeclarations(this.sourceFile);

    const lambdas: ConvertedLambda[] = [];
    const stateMachines: ConvertedStateMachine[] = [];
    for (const decl of declarations) {
      if (decl.kind === "asl") {
        const blockPosition = {start: decl.body.pos, end: decl.body.end};
        const transformed = transformBody(decl.body);
        const transpiled = convertToIntermediaryAsl(transformed, this.typeChecker, decl.inputArgName);
        const asl = convertToASl(transpiled)!;
        const result = { name: decl.name, asl };
        if (includeDiagnostics) {
          const withDiagnostics: Record<string, unknown> = result;
          const transformedBlock = ts.createPrinter().printNode(ts.EmitHint.Unspecified, transformed, this.sourceFile);
          const transformedCode = this.sourceFile.text.substring(0, blockPosition.start) + transformedBlock + this.sourceFile.text.substring(blockPosition.end);
          withDiagnostics["transformedCode"] = transformedCode;
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
export interface ConvertedStateMachineWithDiagnostics extends ConvertedStateMachine {
  iasl:  iasl.Expression[];
  transformedCode: string;
}