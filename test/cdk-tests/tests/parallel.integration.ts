import { executeStepFunction } from "../utility";
jest.setTimeout(99999999);

describe("when converting parallel", () => {
    it("will execute simple as if it were node", async () => {
        const resultFromSfn = await executeStepFunction("parallel", "simple");
        const { simple } = require("../../../packages/convert/src/__test__/resources/parallel");
        const resultFromNode = await simple({});
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute enclosedVariables as if it were node", async () => {
        const resultFromSfn = await executeStepFunction("parallel", "enclosedVariables");
        const { enclosedVariables } = require("../../../packages/convert/src/__test__/resources/parallel");
        const resultFromNode = await enclosedVariables({});
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});