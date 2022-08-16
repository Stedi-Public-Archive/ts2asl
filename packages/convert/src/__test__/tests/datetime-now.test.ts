import { runConvertForTest } from "../utility";
describe("when converting datetime-now", () => {
    let converted;
    beforeAll(() => {
        converted = runConvertForTest("datetime-now");
    });
    it("then dateTimeNow can be converted to asl", async () => {
        expect(converted.dateTimeNow.asl).toMatchInlineSnapshot(`
Object {
  "StartAt": "Initialize",
  "States": Object {
    "Initialize": Object {
      "Next": "Return asl.jsonPath(\\"$$.S ...",
      "Parameters": Object {
        "_null": null,
        "_undefined": null,
        "vars.$": "$$.Execution.Input",
      },
      "ResultPath": "$",
      "Type": "Pass",
    },
    "Return asl.jsonPath(\\"$$.S ...": Object {
      "Comment": undefined,
      "End": true,
      "InputPath": "$$.State.EnteredTime",
      "Type": "Pass",
    },
  },
}
`);
    });
    it("then dateTimeUsingJsonPath can be converted to asl", async () => {
        expect(converted.dateTimeUsingJsonPath.asl).toMatchInlineSnapshot(`
Object {
  "StartAt": "Initialize",
  "States": Object {
    "Initialize": Object {
      "Next": "Return",
      "Parameters": Object {
        "_null": null,
        "_undefined": null,
        "vars.$": "$$.Execution.Input",
      },
      "ResultPath": "$",
      "Type": "Pass",
    },
    "Return": Object {
      "Comment": undefined,
      "End": true,
      "InputPath": "$$.State.EnteredTime",
      "Type": "Pass",
    },
  },
}
`);
    });
});