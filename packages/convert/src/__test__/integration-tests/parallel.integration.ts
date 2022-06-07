import * as asl from "@ts2asl/asl-lib";
import { convertDeployExecute } from "../utility";
jest.setTimeout(99999999);

describe("when converting parallel", () => {
    it("will execute simple as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("parallel", "simple");
        const { simple } = require("../resources/parallel");
        const resultFromNode = await simple({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute enclosedVariables as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("parallel", "enclosedVariables");
        const { enclosedVariables } = require("../resources/parallel");
        const resultFromNode = await enclosedVariables({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});