import * as asl from "@ts2asl/asl-lib";
import { convertDeployExecute } from "../utility";
const { returnOptionalChain, returnLongerChain, assignOptionalChain } = require("../resources/optional-property-chain");
jest.setTimeout(99999999);

describe("when converting optional-property-chain", () => {
    it("will execute returnOptionalChain as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("optional-property-chain", "returnOptionalChain");
        const resultFromNode = await returnOptionalChain({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute returnLongerChain as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("optional-property-chain", "returnLongerChain");
        const resultFromNode = await returnLongerChain({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute assignOptionalChain as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("optional-property-chain", "assignOptionalChain");
        const resultFromNode = await assignOptionalChain({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});