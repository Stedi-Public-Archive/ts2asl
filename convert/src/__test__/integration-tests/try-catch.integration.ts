import { convertDeployExecute } from "../utility";
jest.setTimeout(99999999);

describe("when converting try-catch", () => {
    it("will execute simpleTry as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("try-catch", "simpleTry");
        const { simpleTry } = require("../resources/try-catch");
        const resultFromNode = await simpleTry();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute simpleMultipleStatements as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("try-catch", "simpleMultipleStatements");
        const { simpleMultipleStatements } = require("../resources/try-catch");
        const resultFromNode = await simpleMultipleStatements();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute tryAroundPassState as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("try-catch", "tryAroundPassState");
        const { tryAroundPassState } = require("../resources/try-catch");
        const resultFromNode = await tryAroundPassState();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute tryFinally as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("try-catch", "tryFinally");
        const { tryFinally } = require("../resources/try-catch");
        const resultFromNode = await tryFinally();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute tryCatchFinally as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("try-catch", "tryCatchFinally");
        const { tryCatchFinally } = require("../resources/try-catch");
        const resultFromNode = await tryCatchFinally();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});