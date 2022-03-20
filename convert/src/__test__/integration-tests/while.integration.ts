import { convertDeployExecute } from "../utility";
describe("when converting while", () => {
    it("will execute main as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("while", "main");
        const { main } = require("../resources/while");
        const resultFromNode = await main();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});