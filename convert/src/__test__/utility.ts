import { writeFileSync } from "fs";
import { createCompilerHostFromFile } from "../compiler-host/node";
import { ConvertedStateMachine, ConvertedStateMachineWithDiagnostics, Converter } from "../convert";

export const runConvertForTest = (filename: string, stateMachineName: string = "main"): Record<string, ConvertedStateMachineWithDiagnostics> => {

  const host = createCompilerHostFromFile(
    `src/__test__/resources/${filename}.ts`
  );
  const converter = new Converter(host);
  const converted = converter
    .convert({ includeDiagnostics: true, getParameter: x => x as any })
    .stateMachines.map(x => x as ConvertedStateMachineWithDiagnostics);

  for (const stateMachine of converted) {
    writeFileSync(
      `src/__test__/resources/output/ts-lib/${filename}-${stateMachine.name}.ts`,
      stateMachine.transformedCode ?? ""
    );
    writeFileSync(
      `src/__test__/resources/output/iasl/${filename}-${stateMachine.name}.json`,
      JSON.stringify(stateMachine.iasl, function (this: any, key: string, val: any) { return key === "parentScope" ? undefined : val }, 2) ?? ""
    );
    writeFileSync(
      `src/__test__/resources/output/asl/${filename}-${stateMachine.name}.json`,
      JSON.stringify(stateMachine.asl, null, 2) ?? ""
    );
  }

  let result: Record<string, ConvertedStateMachineWithDiagnostics> = {};
  for (const c of converted) {
    result[c.name] = c;
  }

  return result;
}