import { executeStepFunction } from "../utility";
jest.setTimeout(99999999);

describe("when converting local program", () => {
    it("will return success", async () => {
        const resultFromSfn = await executeStepFunction("program", "main");
        expect(resultFromSfn).toEqual("success");
    });
});