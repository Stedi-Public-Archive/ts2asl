import * as asl from "@ts2asl/asl-lib";
import { convertDeployExecute } from "../utility";
const { concatStrings, numbers, booleans, parameters } = require("../resources/expressions");
jest.setTimeout(99999999);

describe("when converting expressions", () => {
    it("will execute concatStrings as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("expressions", "concatStrings");
        const resultFromNode = await concatStrings({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute numbers as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("expressions", "numbers");
        const resultFromNode = await numbers({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute booleans as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("expressions", "booleans");
        const resultFromNode = await booleans({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute parameters as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("expressions", "parameters");
        const resultFromNode = await parameters({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});