import { readdirSync, readFile, statSync, } from "fs";
import path from "path";
import { runConvertForTest } from "./utility";

test("when converting test-resources", () => {
  const dir = "src/__test__/resources";
  readdirSync(dir).forEach(file => {
    if (statSync(dir + "/" + file).isDirectory()) return;
    if (!file.endsWith(".ts")) return;
    if (file !== "account-creation.ts") return;

    const converted = runConvertForTest(file.substring(0, file.length - 3));
    expect((converted as any).transformedCode).toMatchSnapshot();
    expect((converted as any).iasl).toMatchSnapshot();
    expect(converted.asl).toMatchSnapshot();
  });
});