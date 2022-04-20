import { convertDeployExecute } from "../utility";
jest.setTimeout(99999999);

describe("when converting string-templates", () => {
    it("will execute stringTemplates as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("string-templates", "stringTemplates");
        const { stringTemplates } = require("../resources/string-templates");
        const resultFromNode = await stringTemplates();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute escapedCharacters as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("string-templates", "escapedCharacters");
        const { escapedCharacters } = require("../resources/string-templates");
        const resultFromNode = await escapedCharacters();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});