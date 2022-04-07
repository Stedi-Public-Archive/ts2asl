import { convertDeployExecute } from "../utility";
jest.setTimeout(99999999);

describe("when converting do-while", () => {
    it("will execute main as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("do-while", "main");
        const { main } = require("../resources/do-while");
        const resultFromNode = await main();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});