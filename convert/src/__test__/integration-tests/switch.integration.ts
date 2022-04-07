import { convertDeployExecute } from "../utility";
jest.setTimeout(99999999);

describe("when converting switch", () => {
    it("will execute main as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("switch", "main");
        const { main } = require("../resources/switch");
        const resultFromNode = await main();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});