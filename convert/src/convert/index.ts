import ts from "typescript"
import * as iasl from "../convert-asllib-to-iasl/ast"
import asl, { StateMachine } from "asl-types"
import { listFunctionDeclarations } from "./list-function-declarations";
import { transformBody } from "../convert-ts-to-asllib";
import { convert } from "../convert-iasl-to-asl";
import { convertToIntermediaryAsl } from "../convert-asllib-to-iasl";
import { ICompilerHost } from "../compiler-host";


export interface ConverterOptions {
  lineNumbersInStateNames?: true;
  sourceCodeInComments?: true;
  includeDiagnostics?: true;
  getParameter?: <T>(paramName: string, defaultValue?: T) => T;
}

export class Converter {
  sourceFile: ts.SourceFile;
  typeChecker: ts.TypeChecker;
  program: ts.Program;

  constructor(compilerHost: ICompilerHost) {
    this.sourceFile = compilerHost.sourceFile;
    this.typeChecker = compilerHost.typeChecker;
    this.program = compilerHost.program;
  }

  convert(options: ConverterOptions = {}): Converted {
    const declarations = listFunctionDeclarations(this.sourceFile, this.typeChecker);

    const lambdas: ConvertedLambda[] = [];
    const stateMachines: ConvertedStateMachine[] = [];
    for (const decl of declarations) {
      if (decl.kind === "asl") {
        const body = decl.body!
        const blockPosition = { start: body.pos, end: body.end };
        let transformed: ts.ConciseBody | undefined;
        let transpiled: iasl.StateMachine = { _syntaxKind: iasl.SyntaxKind.StateMachine, statements: [] };
        let asl: asl.StateMachine | undefined;
        try {
          transformed = transformBody(body, options);
          transpiled = convertToIntermediaryAsl(transformed, { converterOptions: options, typeChecker: this.typeChecker, inputArgumentName: decl.inputArgName, contextArgumentName: decl.contextArgName });
          asl = convert(transpiled)!;
        } catch (err) {
          // if (!includeDiagnostics)
          throw err;
        }
        const result = { name: decl.name, asl };
        if (options.includeDiagnostics) {
          const withDiagnostics: Record<string, unknown> = result;
          const transformedBlock = transformed ? ts.createPrinter().printNode(ts.EmitHint.Unspecified, transformed, this.sourceFile) : undefined;
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
  asl?: StateMachine;
}
export interface ConvertedStateMachineWithDiagnostics extends ConvertedStateMachine {
  iasl: iasl.Expression[];
  transformedCode: string;
}