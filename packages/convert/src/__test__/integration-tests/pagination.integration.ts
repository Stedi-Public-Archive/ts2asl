import * as asl from "@ts2asl/asl-lib";
import { convertDeployExecute } from "../utility";
const { listUsers, doSomething } = require("../resources/pagination");
jest.setTimeout(99999999);

describe("when converting pagination", () => {
    it("will execute listUsers as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("pagination", "listUsers");
        const resultFromNode = await listUsers({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute doSomething as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("pagination", "doSomething");
        const resultFromNode = await doSomething({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});