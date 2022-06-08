import * as asl from "@ts2asl/asl-lib";
import { convertDeployExecute } from "../utility";
const { stringTemplates, escapedCharacters } = require("../resources/string-templates");
jest.setTimeout(99999999);

describe("when converting string-templates", () => {
    it("will execute stringTemplates as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("string-templates", "stringTemplates");
        const resultFromNode = await stringTemplates({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute escapedCharacters as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("string-templates", "escapedCharacters");
        const resultFromNode = await escapedCharacters({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});