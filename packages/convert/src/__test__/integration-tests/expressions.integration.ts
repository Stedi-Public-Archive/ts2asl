import { convertDeployExecute } from "../utility";
jest.setTimeout(99999999);

describe("when converting expressions", () => {
    it("will execute concatStrings as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("expressions", "concatStrings");
        const { concatStrings } = require("../resources/expressions");
        const resultFromNode = await concatStrings({});
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute numbers as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("expressions", "numbers");
        const { numbers } = require("../resources/expressions");
        const resultFromNode = await numbers({});
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute booleans as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("expressions", "booleans");
        const { booleans } = require("../resources/expressions");
        const resultFromNode = await booleans({});
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute parameters as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("expressions", "parameters");
        const { parameters } = require("../resources/expressions");
        const resultFromNode = await parameters({});
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});