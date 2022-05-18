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
  skipCheckCallables?: true;
  skipVersionComment?: true;
  defaultRetry?: [{
    errorEquals: string[],
    intervalSeconds: number,
    maxAttempts: number,
    backoffRate: number
  }],
  getLambdaName?: (functionName: string) => string;
  getLambdaArn?: (functionName: string) => string;
  getStateMachineName?: (functionName: string) => string;
  getStateMachineArn?: (functionName: string) => string;
  getParameter?: <T>(paramName: string, defaultValue?: T) => T;
}

interface TSDebug {
  getAssertionLevel(): number;
  setAssertionLevel(val: number): void;
}

export class Converter {
  sourceFile: ts.SourceFile;
  typeChecker: ts.TypeChecker;
  program: ts.Program;

  constructor(private readonly compilerHost: ICompilerHost) {
    this.sourceFile = compilerHost.sourceFile;
    this.typeChecker = compilerHost.typeChecker;
    this.program = compilerHost.program;
  }


  convert(options: ConverterOptions = {}): Converted {
    let debug = (ts as any).Debug as TSDebug;
    debug.setAssertionLevel(0);

    const declarations = listFunctionDeclarations(this.sourceFile, this.typeChecker);
    const optionsWithDefaults = options;
    if (optionsWithDefaults.defaultRetry === undefined) {
      optionsWithDefaults.defaultRetry = [{
        errorEquals: [
          "Lambda.ServiceException",
          "Lambda.AWSLambdaException",
          "Lambda.SdkClientException"
        ],
        intervalSeconds: 2,
        maxAttempts: 6,
        backoffRate: 2
      }];
    }
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
          transformed = transformBody(body, this.compilerHost, optionsWithDefaults);
          transpiled = convertToIntermediaryAsl(transformed, { converterOptions: optionsWithDefaults, typeChecker: this.typeChecker, inputArgumentName: decl.inputArgName, contextArgumentName: decl.contextArgName });
          asl = convert(transpiled, optionsWithDefaults)!;
        } catch (err) {
          // if (!includeDiagnostics)
          throw err;
        }
        const result = { name: decl.name, asl };
        if (optionsWithDefaults.includeDiagnostics) {
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