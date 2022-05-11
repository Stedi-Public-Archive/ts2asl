import { convertDeployExecute } from "../utility";
jest.setTimeout(99999999);

describe("when converting if", () => {
    it("will execute justIf as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("if", "justIf");
        const { justIf } = require("../resources/if");
        const resultFromNode = await justIf({});
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute ifElse as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("if", "ifElse");
        const { ifElse } = require("../resources/if");
        const resultFromNode = await ifElse({});
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute nestedIfs as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("if", "nestedIfs");
        const { nestedIfs } = require("../resources/if");
        const resultFromNode = await nestedIfs({});
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute enclosedVars as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("if", "enclosedVars");
        const { enclosedVars } = require("../resources/if");
        const resultFromNode = await enclosedVars({});
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});