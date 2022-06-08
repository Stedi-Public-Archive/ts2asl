import * as asl from "@ts2asl/asl-lib";
import { convertDeployExecute } from "../utility";
const { IfStatementWithInKeyword } = require("../resources/in-keyword");
jest.setTimeout(99999999);

describe("when converting in-keyword", () => {
    it("will execute IfStatementWithInKeyword as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("in-keyword", "IfStatementWithInKeyword");
        const resultFromNode = await IfStatementWithInKeyword({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});