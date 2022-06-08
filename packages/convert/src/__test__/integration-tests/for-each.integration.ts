import * as asl from "@ts2asl/asl-lib";
import { convertDeployExecute } from "../utility";
const { simpleForeach, foreachWithBreak, foreachWithContinue, foreachEarlyReturn, nestedForeach, emptyForeach } = require("../resources/for-each");
jest.setTimeout(99999999);

describe("when converting for-each", () => {
    it("will execute simpleForeach as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("for-each", "simpleForeach");
        const resultFromNode = await simpleForeach({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute foreachWithBreak as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("for-each", "foreachWithBreak");
        const resultFromNode = await foreachWithBreak({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute foreachWithContinue as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("for-each", "foreachWithContinue");
        const resultFromNode = await foreachWithContinue({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute foreachEarlyReturn as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("for-each", "foreachEarlyReturn");
        const resultFromNode = await foreachEarlyReturn({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute nestedForeach as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("for-each", "nestedForeach");
        const resultFromNode = await nestedForeach({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute emptyForeach as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("for-each", "emptyForeach");
        const resultFromNode = await emptyForeach({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});