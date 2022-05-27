import { unwatchFile, writeFileSync } from "fs";
import { createCompilerHostFromFile } from "../compiler-host/node";
import { ConvertedStateMachineWithDiagnostics, Converter } from "../convert";
import * as asl from "@ts2asl/asl-lib";
export const runConvertForTest = (filename: string): Record<string, ConvertedStateMachineWithDiagnostics> => {

  const host = createCompilerHostFromFile(
    `src/__test__/resources/${filename}.ts`
  );
  const converter = new Converter(host);
  const converted = converter
    .convert({ includeDiagnostics: true, skipVersionComment: true, getParameter: x => x as any })
    .stateMachines.map(x => x as ConvertedStateMachineWithDiagnostics);

  for (const stateMachine of converted) {
    writeFileSync(
      `src/__test__/output/ts-lib/${filename}-${stateMachine.name}.ts`,
      stateMachine.transformedCode ?? ""
    );
    writeFileSync(
      `src/__test__/output/iasl/${filename}-${stateMachine.name}.json`,
      JSON.stringify(stateMachine.iasl, function (this: any, key: string, val: any) { return key === "parentScope" ? undefined : val; }, 2) ?? ""
    );
    writeFileSync(
      `src/__test__/output/asl/${filename}-${stateMachine.name}.json`,
      JSON.stringify(stateMachine.asl, null, 2) ?? ""
    );
  }

  let result: Record<string, ConvertedStateMachineWithDiagnostics> = {};
  for (const c of converted) {
    result[c.name] = c;
  }

  return result;
};

export const convertDeployExecute = async (filename: string, name: string, input: {} = {}): Promise<unknown> => {
  asl.clientConfig.region = "us-east-1";

  const host = createCompilerHostFromFile(
    `src/__test__/resources/${filename}.ts`
  );
  const converter = new Converter(host);
  const converted = converter
    .convert({ includeDiagnostics: true, getParameter: x => x as any })
    .stateMachines.map(x => x as ConvertedStateMachineWithDiagnostics);
  const stateMachineName = `ts2asl` + Math.floor(Math.random() * 10000);
  let sfnArn: string = "";
  try {

    const results: Record<string, unknown> = {};
    for (const stateMachine of converted) {
      if (stateMachine.name !== name) continue;
      const aslString = JSON.stringify(stateMachine.asl);

      const response = await asl.sdkSfnCreateStateMachine({ parameters: { name: stateMachineName, type: "EXPRESS", definition: aslString, roleArn: "arn:aws:iam::642712255693:role/ts2asl-test" } });
      sfnArn = response.stateMachineArn!;
      const result = await asl.sdkSfnStartSyncExecution({ parameters: { stateMachineArn: response.stateMachineArn, input: JSON.stringify(input, null, 2) } });
      if (result.output === undefined) return undefined;
      return JSON.parse(result.output as string);
    }
  }
  catch (err) {
    console.log(err);
    throw err;
  }
  finally {
    if (sfnArn) await asl.sdkSfnDeleteStateMachine({ parameters: { stateMachineArn: sfnArn } });
  }

};