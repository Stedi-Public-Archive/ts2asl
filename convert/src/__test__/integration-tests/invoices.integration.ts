import { convertDeployExecute } from "../utility";
describe("when converting invoices", () => {
    it("will execute main as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("invoices", "main");
        const { main } = require("../resources/invoices");
        const resultFromNode = await main();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});