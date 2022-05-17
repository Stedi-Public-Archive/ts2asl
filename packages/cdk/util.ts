import * as fs from "fs";
import * as path from "path";

const cdkDir = "./cdk.out";
const tsconfigFilePath = "./jsconfig.json";
const bundleTsconfigFilePath = path.join(cdkDir, "./tsconfig.bundle.json");

export const ensureBundleTsConfig = () => {


  if (!fs.existsSync(cdkDir)) {
    fs.mkdirSync(cdkDir);
  }
  fs.writeFileSync(bundleTsconfigFilePath, JSON.stringify({
    "extends": "../tsconfig.json",
    "compilerOptions": {
      "baseUrl": "../",
      "paths": {
        "@ts2asl/asl-lib": [
          "node_modules/@ts2asl/asl-lib/lib/runtime/index.js"
        ]
      }
    }
  }));

  return bundleTsconfigFilePath;

};