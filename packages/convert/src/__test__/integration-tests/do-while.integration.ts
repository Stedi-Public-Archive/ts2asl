import * as asl from "@ts2asl/asl-lib";
import { convertDeployExecute } from "../utility";
const { simpleDoWhile, simpleDoAlwaysFalse, doWhileWithBreak, doWhileWithEarlyReturn, doWhileWithContinue } = require("../resources/do-while");
jest.setTimeout(99999999);

describe("when converting do-while", () => {
    it("will execute simpleDoWhile as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("do-while", "simpleDoWhile");
        const resultFromNode = await simpleDoWhile({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute simpleDoAlwaysFalse as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("do-while", "simpleDoAlwaysFalse");
        const resultFromNode = await simpleDoAlwaysFalse({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute doWhileWithBreak as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("do-while", "doWhileWithBreak");
        const resultFromNode = await doWhileWithBreak({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute doWhileWithEarlyReturn as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("do-while", "doWhileWithEarlyReturn");
        const resultFromNode = await doWhileWithEarlyReturn({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute doWhileWithContinue as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("do-while", "doWhileWithContinue");
        const resultFromNode = await doWhileWithContinue({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});