
import { Converter } from ".";
import { createCompilerHostFromSourceForWeb } from "../compiler-host/web"

export const convert = (typescriptSource: string, diagnostics: boolean, sdkClients: Record<string, string> = {}): {} => {
  const host = createCompilerHostFromSourceForWeb(typescriptSource, sdkClients);
  const converter = new Converter(host);
  return converter.convert({ sourceCodeInComments: true, includeDiagnostics: diagnostics ? true : undefined, skipCheckCallables: true });
} 