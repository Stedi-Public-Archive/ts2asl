import { convertDeployExecute } from "../utility";
describe("when converting string-templates", () => {
    it("will execute stringTemplates as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("string-templates", "stringTemplates");
        const { stringTemplates } = require("../resources/string-templates");
        const resultFromNode = await stringTemplates();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});