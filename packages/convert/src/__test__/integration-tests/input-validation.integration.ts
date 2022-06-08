import * as asl from "@ts2asl/asl-lib";
import { convertDeployExecute } from "../utility";
const { checkArgumentType, checkArgumentTypeProvideDefault, checkArgumentRange } = require("../resources/input-validation");
jest.setTimeout(99999999);

describe("when converting input-validation", () => {
    it("will execute checkArgumentType as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("input-validation", "checkArgumentType");
        const resultFromNode = await checkArgumentType({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute checkArgumentTypeProvideDefault as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("input-validation", "checkArgumentTypeProvideDefault");
        const resultFromNode = await checkArgumentTypeProvideDefault({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute checkArgumentRange as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("input-validation", "checkArgumentRange");
        const resultFromNode = await checkArgumentRange({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});