import { convertDeployExecute } from "../utility";
describe("when converting closures", () => {
    it("will execute main as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("closures", "main");
        const { main } = require("../resources/closures");
        const resultFromNode = await main();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});