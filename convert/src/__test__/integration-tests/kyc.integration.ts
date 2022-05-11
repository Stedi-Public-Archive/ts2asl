import { convertDeployExecute } from "../utility";
jest.setTimeout(99999999);

describe("when converting kyc", () => {
    it("will execute main as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("kyc", "main");
        const { main } = require("../resources/kyc");
        const resultFromNode = await main({});
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});