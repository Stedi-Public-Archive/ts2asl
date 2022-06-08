import * as asl from "@ts2asl/asl-lib";
import { convertDeployExecute } from "../utility";
const { simpleTry, referenceError, simpleMultipleStatements, tryAroundPassState, tryFinally, tryCatchFinally, tryCatchFailState } = require("../resources/try-catch");
jest.setTimeout(99999999);

describe("when converting try-catch", () => {
    it("will execute simpleTry as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("try-catch", "simpleTry");
        const resultFromNode = await simpleTry({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute referenceError as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("try-catch", "referenceError");
        const resultFromNode = await referenceError({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute simpleMultipleStatements as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("try-catch", "simpleMultipleStatements");
        const resultFromNode = await simpleMultipleStatements({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute tryAroundPassState as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("try-catch", "tryAroundPassState");
        const resultFromNode = await tryAroundPassState({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute tryFinally as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("try-catch", "tryFinally");
        const resultFromNode = await tryFinally({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute tryCatchFinally as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("try-catch", "tryCatchFinally");
        const resultFromNode = await tryCatchFinally({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute tryCatchFailState as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("try-catch", "tryCatchFailState");
        const resultFromNode = await tryCatchFailState({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});