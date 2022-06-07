import * as asl from "@ts2asl/asl-lib";
import { convertDeployExecute } from "../utility";
jest.setTimeout(99999999);

describe("when converting try-catch", () => {
    it("will execute simpleTry as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("try-catch", "simpleTry");
        const { simpleTry } = require("../resources/try-catch");
        const resultFromNode = await simpleTry({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute referenceError as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("try-catch", "referenceError");
        const { referenceError } = require("../resources/try-catch");
        const resultFromNode = await referenceError({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute simpleMultipleStatements as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("try-catch", "simpleMultipleStatements");
        const { simpleMultipleStatements } = require("../resources/try-catch");
        const resultFromNode = await simpleMultipleStatements({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute tryAroundPassState as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("try-catch", "tryAroundPassState");
        const { tryAroundPassState } = require("../resources/try-catch");
        const resultFromNode = await tryAroundPassState({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute tryFinally as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("try-catch", "tryFinally");
        const { tryFinally } = require("../resources/try-catch");
        const resultFromNode = await tryFinally({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute tryCatchFinally as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("try-catch", "tryCatchFinally");
        const { tryCatchFinally } = require("../resources/try-catch");
        const resultFromNode = await tryCatchFinally({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute tryCatchFailState as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("try-catch", "tryCatchFailState");
        const { tryCatchFailState } = require("../resources/try-catch");
        const resultFromNode = await tryCatchFailState({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});