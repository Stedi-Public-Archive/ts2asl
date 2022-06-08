import * as asl from "@ts2asl/asl-lib";
import { convertDeployExecute } from "../utility";
const { waitForTaskToken } = require("../resources/states");
jest.setTimeout(99999999);

describe("when converting states", () => {
    it("will execute waitForTaskToken as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("states", "waitForTaskToken");
        const resultFromNode = await waitForTaskToken({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});