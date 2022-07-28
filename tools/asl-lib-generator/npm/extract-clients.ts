import * as  fs from "fs";
import * as sdkClients from "./data/aws-sdk-clients.json";
import * as dtsb from "dts-bundle";

const npmModulesRoot = "./node_modules";
const clientNames: Array<string> = [];
const moduleNames: Array<string> = [];

for(const module of Object.values(sdkClients)) {
  const moduleDir = npmModulesRoot + "/" + module.name ;
  const distTypesDir = moduleDir + "/dist-types" 
  if (!fs.existsSync(distTypesDir)) continue;
  const contents = fs.readdirSync(distTypesDir);
  const clientFile = contents.filter(file=>/[a-zA-Z0-9]*?Client.d.ts/.test(file));
  if (clientFile.length !== 1) continue;
  const clientName = clientFile[0].substring(0, clientFile[0].length -11)
  dtsb.bundle({main: distTypesDir + "/" + clientName + ".d.ts", baseDir: "./" , name: module.name, out: "./dts/" + module.name + ".d.ts"});
  clientNames.push(clientName);
  moduleNames.push(module.name)
}

fs.writeFileSync( "./data/client-names.json", JSON.stringify(clientNames.sort(), null, 2))
fs.writeFileSync( "./data/module-names.json", JSON.stringify(moduleNames.sort(), null, 2))