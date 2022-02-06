
import { readFileSync } from "fs";
import ts from "typescript";
const filename = "main.ts"



export const createCompilerHost = (source: ts.SourceFile): { program: ts.Program, typeChecker: ts.TypeChecker } => {


  const files: { [name: string]: ts.SourceFile | undefined } = { [filename]: source };

  const aslLib = readFileSync("resources/asl.d.ts").toString("utf-8");
  const aslLibSource = ts.createSourceFile("module:asl-lib.ts", aslLib, ts.ScriptTarget.Latest)
  files[aslLibSource.fileName] = aslLibSource;

  const options: ts.CompilerOptions = { strict: true, target: ts.ScriptTarget.Latest, allowJs: true, module: ts.ModuleKind.Node12 };

  const compilerHost: ts.CompilerHost = {
    getSourceFile: (fileName: string, languageVersion: ts.ScriptTarget, onError?: (message: string) => void) => {
      return files[fileName];
    },
    getSourceFileByPath: (fileName: string, path: ts.Path, languageVersion: ts.ScriptTarget, onError?: (message: string) => void) => {
      console.log(fileName)
      return undefined;
    },
    resolveModuleNames: (moduleNames: string[], containingFile: string, reusedNames: string[] | undefined, redirectedReference: ts.ResolvedProjectReference | undefined, options: ts.CompilerOptions, containingSourceFile?: ts.SourceFile) => {
      if (containingFile === "/module:asl-lib.ts") {
        return moduleNames.map(x => ({ resolvedFileName: "module:asl-lib" + x.substring(1) + ".ts" }));
      }
      return moduleNames.map(x => ({ resolvedFileName: `module:${x}.ts` }));
    },
    getDefaultLibFileName: (defaultLibOptions: ts.CompilerOptions) => "/" + ts.getDefaultLibFileName(defaultLibOptions),
    writeFile: () => {
      // do nothing
    },
    getCurrentDirectory: () => "/",
    getDirectories: (path: string) => [],
    fileExists: (fileName: string) => files[fileName] != null,
    readFile: (fileName: string) => files[fileName] != null ? files[fileName]!.getFullText() : undefined,
    getCanonicalFileName: (fileName: string) => fileName,
    useCaseSensitiveFileNames: () => true,
    getNewLine: () => "\n",
    getEnvironmentVariable: () => "",
  };

  const program = ts.createProgram(Object.keys(files), options, compilerHost)
  return {
    program,
    typeChecker: program.getTypeChecker()
  }
}

