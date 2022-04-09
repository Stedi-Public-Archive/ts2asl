import { convertDeployExecute } from "../utility";
jest.setTimeout(99999999);

describe("when converting switch", () => {
    it("will execute simpleSwitch as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("switch", "simpleSwitch");
        const { simpleSwitch } = require("../resources/switch");
        const resultFromNode = await simpleSwitch();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute createAwsAccount as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("switch", "createAwsAccount");
        const { createAwsAccount } = require("../resources/switch");
        const resultFromNode = await createAwsAccount();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});