import { convertDeployExecute } from "../utility";
jest.setTimeout(99999999);

describe("when converting throw", () => {
    it("will execute tryCatch as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("throw", "tryCatch");
        const { tryCatch } = require("../resources/throw");
        const resultFromNode = await tryCatch();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute throwErrors as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("throw", "throwErrors");
        const { throwErrors } = require("../resources/throw");
        const resultFromNode = await throwErrors();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute RetryErrors as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("throw", "RetryErrors");
        const { RetryErrors } = require("../resources/throw");
        const resultFromNode = await RetryErrors();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute CatchErrors as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("throw", "CatchErrors");
        const { CatchErrors } = require("../resources/throw");
        const resultFromNode = await CatchErrors();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});