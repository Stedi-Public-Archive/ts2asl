import { readFileSync, writeFileSync } from "fs";

if (process.argv[2]) {
  const inFile = process.argv[2];
  let contents = readFileSync(process.argv[2], "utf-8");
  const outFile = inFile.replace("d.ts", "ts")
  contents = `export const libraryDefinitionAsString = \`${contents}\``;
  writeFileSync(outFile, contents);
}