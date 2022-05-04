import { convertDeployExecute } from "../utility";
jest.setTimeout(99999999);

describe("when converting in-keyword", () => {
    it("will execute IfStatementWithInKeyword as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("in-keyword", "IfStatementWithInKeyword");
        const { IfStatementWithInKeyword } = require("../resources/in-keyword");
        const resultFromNode = await IfStatementWithInKeyword();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});