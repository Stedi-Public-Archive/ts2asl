import { convertDeployExecute } from "../utility";
jest.setTimeout(99999999);

describe("when converting variables", () => {
    it("will execute main as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("variables", "main");
        const { main } = require("../resources/variables");
        const resultFromNode = await main();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});