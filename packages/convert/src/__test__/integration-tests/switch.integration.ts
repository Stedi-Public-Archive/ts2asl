import * as asl from "@ts2asl/asl-lib";
import { convertDeployExecute } from "../utility";
jest.setTimeout(99999999);

describe("when converting switch", () => {
    it("will execute simpleSwitch as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("switch", "simpleSwitch");
        const { simpleSwitch } = require("../resources/switch");
        const resultFromNode = await simpleSwitch({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute switchCaseFallsThrough as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("switch", "switchCaseFallsThrough");
        const { switchCaseFallsThrough } = require("../resources/switch");
        const resultFromNode = await switchCaseFallsThrough({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute switchCaseNonEmptyFallThrough as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("switch", "switchCaseNonEmptyFallThrough");
        const { switchCaseNonEmptyFallThrough } = require("../resources/switch");
        const resultFromNode = await switchCaseNonEmptyFallThrough({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute switchCaseFallsThroughToDefault as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("switch", "switchCaseFallsThroughToDefault");
        const { switchCaseFallsThroughToDefault } = require("../resources/switch");
        const resultFromNode = await switchCaseFallsThroughToDefault({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute switchDefaultFallsThrough as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("switch", "switchDefaultFallsThrough");
        const { switchDefaultFallsThrough } = require("../resources/switch");
        const resultFromNode = await switchDefaultFallsThrough({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute createAwsAccount as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("switch", "createAwsAccount");
        const { createAwsAccount } = require("../resources/switch");
        const resultFromNode = await createAwsAccount({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});