import { convertDeployExecute } from "../utility";
jest.setTimeout(99999999);

describe("when converting optional-property-chain", () => {
    it("will execute returnOptionalChain as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("optional-property-chain", "returnOptionalChain");
        const { returnOptionalChain } = require("../resources/optional-property-chain");
        const resultFromNode = await returnOptionalChain({});
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute returnLongerChain as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("optional-property-chain", "returnLongerChain");
        const { returnLongerChain } = require("../resources/optional-property-chain");
        const resultFromNode = await returnLongerChain({});
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute assignOptionalChain as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("optional-property-chain", "assignOptionalChain");
        const { assignOptionalChain } = require("../resources/optional-property-chain");
        const resultFromNode = await assignOptionalChain({});
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});