import * as asl from "@ts2asl/asl-lib";
import { convertDeployExecute } from "../utility";
const { main } = require("../resources/hello-world");
jest.setTimeout(99999999);

describe("when converting hello-world", () => {
    it("will execute main as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("hello-world", "main");
        const resultFromNode = await main({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});