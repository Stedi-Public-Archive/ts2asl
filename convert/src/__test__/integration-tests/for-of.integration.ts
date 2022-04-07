import { convertDeployExecute } from "../utility";
jest.setTimeout(99999999);

describe("when converting for-of", () => {
    it("will execute main as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("for-of", "main");
        const { main } = require("../resources/for-of");
        const resultFromNode = await main();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute foreachWithBreak as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("for-of", "foreachWithBreak");
        const { foreachWithBreak } = require("../resources/for-of");
        const resultFromNode = await foreachWithBreak();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});