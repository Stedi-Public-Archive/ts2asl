import { convertDeployExecute } from "../utility";
describe("when converting boolean-evalation", () => {
    it("will execute main as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("boolean-evalation", "main");
        const { main } = require("../resources/boolean-evalation");
        const resultFromNode = await main();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});