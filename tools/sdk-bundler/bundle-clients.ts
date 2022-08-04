import * as  fs from "fs";
import * as sdkClients from "./npm/data/aws-sdk-clients.json";
import * as dtsb from "dts-bundle";

const npmModulesRoot = "./npm/node_modules";
const clientNames: Array<string> = [];
const moduleNames: Array<string> = [];

if (!fs.existsSync("./npm/dts")) {
  fs.mkdirSync("./npm/dts")
}

for(const module of Object.values(sdkClients).sort((x, y)=>x.name > y.name ? 1 : -1)) {
  if (!module?.name?.startsWith("@aws-sdk")) continue;
  const moduleDir = npmModulesRoot + "/" + module.name ;
  const distTypesDir = moduleDir + "/dist-types" 
  if (!fs.existsSync(distTypesDir)) continue;
  const contents = fs.readdirSync(distTypesDir);
  const clientFile = contents.filter(file=>/[a-zA-Z0-9]*?Client.d.ts/.test(file));
  if (clientFile.length !== 1) continue;
  const clientName = clientFile[0].substring(0, clientFile[0].length -11)
  console.log(`bundling: ${module.name}`);
  dtsb.bundle({main: distTypesDir + "/" + clientName + ".d.ts", baseDir: "./" , name: module.name, out: "./npm/dts/" + module.name + ".d.ts"});
  clientNames.push(clientName);
  moduleNames.push(module.name)
}

fs.writeFileSync( "./npm/data/client-names.json", JSON.stringify(clientNames.sort(), null, 2))
fs.writeFileSync( "./npm/data/module-names.json", JSON.stringify(moduleNames.sort(), null, 2))