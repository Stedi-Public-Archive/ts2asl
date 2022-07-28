import * as  fs from "fs";
import * as sdkClients from "./data/aws-sdk-clients.json";
import * as pjson from "./package.json";
const dependencies: Record<string, string> = {}
for(const module of Object.values(sdkClients).map(x=>x.name).filter(x=>!!x)) {
  dependencies[module] = "*";
}

const copy = {...pjson, dependencies, default: undefined };
delete copy.default;

fs.writeFileSync( "./package.json", JSON.stringify(copy, null, 2))