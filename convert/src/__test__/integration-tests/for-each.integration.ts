import { convertDeployExecute } from "../utility";
jest.setTimeout(99999999);

describe("when converting for-each", () => {
    it("will execute simpleForeach as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("for-each", "simpleForeach");
        const { simpleForeach } = require("../resources/for-each");
        const resultFromNode = await simpleForeach();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute foreachWithBreak as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("for-each", "foreachWithBreak");
        const { foreachWithBreak } = require("../resources/for-each");
        const resultFromNode = await foreachWithBreak();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute foreachWithContinue as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("for-each", "foreachWithContinue");
        const { foreachWithContinue } = require("../resources/for-each");
        const resultFromNode = await foreachWithContinue();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute foreachEarlyReturn as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("for-each", "foreachEarlyReturn");
        const { foreachEarlyReturn } = require("../resources/for-each");
        const resultFromNode = await foreachEarlyReturn();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute nestedForeach as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("for-each", "nestedForeach");
        const { nestedForeach } = require("../resources/for-each");
        const resultFromNode = await nestedForeach();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});