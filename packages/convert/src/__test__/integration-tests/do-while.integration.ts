import { convertDeployExecute } from "../utility";
jest.setTimeout(99999999);

describe("when converting do-while", () => {
    it("will execute simpleDoWhile as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("do-while", "simpleDoWhile");
        const { simpleDoWhile } = require("../resources/do-while");
        const resultFromNode = await simpleDoWhile({});
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute simpleDoAlwaysFalse as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("do-while", "simpleDoAlwaysFalse");
        const { simpleDoAlwaysFalse } = require("../resources/do-while");
        const resultFromNode = await simpleDoAlwaysFalse({});
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute doWhileWithBreak as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("do-while", "doWhileWithBreak");
        const { doWhileWithBreak } = require("../resources/do-while");
        const resultFromNode = await doWhileWithBreak({});
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute doWhileWithEarlyReturn as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("do-while", "doWhileWithEarlyReturn");
        const { doWhileWithEarlyReturn } = require("../resources/do-while");
        const resultFromNode = await doWhileWithEarlyReturn({});
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute doWhileWithContinue as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("do-while", "doWhileWithContinue");
        const { doWhileWithContinue } = require("../resources/do-while");
        const resultFromNode = await doWhileWithContinue({});
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});