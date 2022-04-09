import { convertDeployExecute } from "../utility";
jest.setTimeout(99999999);

describe("when converting input-validation", () => {
    it("will execute checkArgumentType as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("input-validation", "checkArgumentType");
        const { checkArgumentType } = require("../resources/input-validation");
        const resultFromNode = await checkArgumentType();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute checkArgumentTypeProvideDefault as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("input-validation", "checkArgumentTypeProvideDefault");
        const { checkArgumentTypeProvideDefault } = require("../resources/input-validation");
        const resultFromNode = await checkArgumentTypeProvideDefault();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute checkArgumentRange as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("input-validation", "checkArgumentRange");
        const { checkArgumentRange } = require("../resources/input-validation");
        const resultFromNode = await checkArgumentRange();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});