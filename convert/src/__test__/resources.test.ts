import { readdirSync, readFile, statSync, } from "fs";
import * as asl from "@ts2asl/asl-lib"
import path from "path";
import { runConvertForTest } from "./utility";

asl.deploy.setParameter("stateMachineArn", "arn:something.something")


test("when converting test-resources", () => {
  const dir = "src/__test__/resources";
  readdirSync(dir).forEach(file => {
    if (statSync(dir + "/" + file).isDirectory()) return;
    if (!file.endsWith(".ts")) return;
    if (file !== "replayable-ingestion.ts") return;

    const converted = runConvertForTest(file.substring(0, file.length - 3));
    expect((converted as any).main.transformedCode).toMatchSnapshot();
    expect((converted as any).main.iasl).toMatchSnapshot();
    expect(converted.main.asl).toMatchSnapshot();
  });
});