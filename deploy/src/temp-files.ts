
import { readFileSync, writeFileSync } from "fs";
import * as path from "path";

export const writeTempFile = (dir: string, name: string, contents: Buffer) => {
  const localPath = path.join(dir, name);
  writeFileSync(localPath, contents);
  return localPath;
}
