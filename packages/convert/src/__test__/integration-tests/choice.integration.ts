import * as asl from "@ts2asl/asl-lib";
import { convertDeployExecute } from "../utility";
const { choice, choiceWithSingleStatements, choiceWithShorthand } = require("../resources/choice");
jest.setTimeout(99999999);

describe("when converting choice", () => {
    it("will execute choice as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("choice", "choice");
        const resultFromNode = await choice({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute choiceWithSingleStatements as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("choice", "choiceWithSingleStatements");
        const resultFromNode = await choiceWithSingleStatements({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute choiceWithShorthand as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("choice", "choiceWithShorthand");
        const resultFromNode = await choiceWithShorthand({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});