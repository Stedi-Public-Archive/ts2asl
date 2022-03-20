import { convertDeployExecute } from "../utility";
describe("when converting example", () => {
    it("will execute main as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("example", "main");
        const { main } = require("../resources/example");
        const resultFromNode = await main();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});