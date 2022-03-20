import { convertDeployExecute } from "../utility";
describe("when converting variable-assignments", () => {
    it("will execute literals as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("variable-assignments", "literals");
        const { literals } = require("../resources/variable-assignments");
        const resultFromNode = await literals();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute arrayWithIdentifiers as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("variable-assignments", "arrayWithIdentifiers");
        const { arrayWithIdentifiers } = require("../resources/variable-assignments");
        const resultFromNode = await arrayWithIdentifiers();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute functions as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("variable-assignments", "functions");
        const { functions } = require("../resources/variable-assignments");
        const resultFromNode = await functions();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});