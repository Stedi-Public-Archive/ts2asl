import { convertDeployExecute } from "../utility";
describe("when converting parallel", () => {
    it("will execute simple as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("parallel", "simple");
        const { simple } = require("../resources/parallel");
        const resultFromNode = await simple();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute enclosedVariables as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("parallel", "enclosedVariables");
        const { enclosedVariables } = require("../resources/parallel");
        const resultFromNode = await enclosedVariables();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});