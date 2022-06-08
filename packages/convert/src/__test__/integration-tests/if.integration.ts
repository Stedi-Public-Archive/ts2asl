import * as asl from "@ts2asl/asl-lib";
import { convertDeployExecute } from "../utility";
const { justIf, ifElse, nestedIfs, enclosedVars } = require("../resources/if");
jest.setTimeout(99999999);

describe("when converting if", () => {
    it("will execute justIf as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("if", "justIf");
        const resultFromNode = await justIf({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute ifElse as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("if", "ifElse");
        const resultFromNode = await ifElse({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute nestedIfs as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("if", "nestedIfs");
        const resultFromNode = await nestedIfs({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute enclosedVars as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("if", "enclosedVars");
        const resultFromNode = await enclosedVars({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});