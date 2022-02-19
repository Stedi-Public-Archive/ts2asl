import { writeFileSync } from "fs";
import { createCompilerHostFromFile } from "../compiler-host";
import { ConvertedStateMachine, ConvertedStateMachineWithDiagnostics, Converter } from "../convert";

export const runConvertForTest = (filename: string, stateMachineName: string = "main"): ConvertedStateMachine => {

  const host = createCompilerHostFromFile(
    `src/__test__/resources/${filename}.ts`
  );
  const converter = new Converter(host);
  const converted = converter
    .convert(true)
    .stateMachines.map(x => x as ConvertedStateMachineWithDiagnostics)
    .find(x => x.name === stateMachineName);

  if (!converted) throw Error("did not find state machine called " + stateMachineName);

  writeFileSync(
    `src/__test__/resources/output/${filename}-asllib.ts`,
    converted.transformedCode ?? ""
  );
  writeFileSync(
    `src/__test__/resources/output/${filename}-i-asl.json`,
    JSON.stringify(converted.iasl, function (this: any, key: string, val: any) { return key === "parentScope" ? undefined : val }, 2) ?? ""
  );
  writeFileSync(
    `src/__test__/resources/output/${filename}-asl.json`,
    JSON.stringify(converted.asl, null, 2) ?? ""
  );
  return converted;
}