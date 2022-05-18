import { convertDeployExecute } from "../utility";
jest.setTimeout(99999999);

describe("when converting boolean-evalation", () => {
    it("will execute main as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("boolean-evalation", "main");
        const { main } = require("../resources/boolean-evalation");
        const resultFromNode = await main({});
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute numericComparison as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("boolean-evalation", "numericComparison");
        const { numericComparison } = require("../resources/boolean-evalation");
        const resultFromNode = await numericComparison({});
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});