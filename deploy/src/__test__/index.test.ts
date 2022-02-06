import { packageConverted } from "..";
import { Converted, ConvertedLambda, ConvertedStateMachine } from "../../../convert/src/convert";
import { performPackage } from "../package";
import { writeTempFile } from "../temp-files";

jest.mock("../package");
jest.mock("../temp-files");

describe("when packaging concerted program", () => {

  it("can create empty cloudformation", async () => {
    const converted = { stateMachines: [], lambdas: [] } as Converted;
    const template = await packageConverted(converted, "source/file.ts", { executionRoleArn: "fake-role" });
    expect(Object.entries(template.Resources).length).toBe(0)
  })

  it("can package state machine", async () => {
    const stateMachine: ConvertedStateMachine = {
      name: "main",
      asl: {
        StartAt: "dummy",
        States: {
          "dummy": { Type: "Pass" }
        }
      }
    };
    const converted = { stateMachines: [stateMachine], lambdas: [] } as Converted;
    const template = await packageConverted(converted, "source/file.ts", { executionRoleArn: "fake-role" });
    expect(Object.entries(template.Resources).length).toBe(1)
    expect(template.Resources["main"]).toMatchInlineSnapshot(`
Object {
  "Properties": Object {
    "Definition": Object {
      "StartAt": "dummy",
      "States": Object {
        "dummy": Object {
          "Type": "Pass",
        },
      },
    },
    "RoleArn": "fake-role",
    "StateMachineName": Object {
      "Fn:Sub": "\${programName}-main",
    },
    "StateMachineType": "EXPRESS",
  },
  "Type": "AWS::StepFunctions::StateMachine",
}
`);
  })

  it("can package lambda", async () => {
    (performPackage as jest.Mock).mockReturnValue(Buffer.from([]));
    (writeTempFile as jest.Mock).mockReturnValue("tempdir/package.zip");

    const lambda: ConvertedLambda = {
      name: "lib",
    };
    const converted = { stateMachines: [], lambdas: [lambda] } as Converted;
    const template = await packageConverted(converted, "source/file.ts", { executionRoleArn: "fake-role" });
    expect(Object.entries(template.Resources).length).toBe(1);
    expect(template.Resources["lib"]).toMatchInlineSnapshot(`
Object {
  "Properties": Object {
    "Code": "file:tempdir/package.zip",
    "FunctionName": Object {
      "Fn:Sub": "\${programName}-lib",
    },
    "Handler": "index.lib",
    "MemorySize": 1024,
    "Role": "fake-role",
    "Runtime": "nodejs14.x",
    "Timeout": 30,
  },
  "Type": "AWS::Lambda::Function",
}
`);
  })
});
