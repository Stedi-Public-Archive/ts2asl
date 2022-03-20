import { convertDeployExecute } from "../utility";

describe("when converting choice", () => {
    it("will execute choice as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("choice", "choice");
        const { choice } = require("../resources/choice");
        const resultFromNode = await choice();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    // it("will execute choiceWithSingleStatements as if it were node", async () => {
    //     const resultFromSfn = await convertDeployExecute("choice", "choiceWithSingleStatements");
    //     const { choiceWithSingleStatements } = require("../resources/choice");
    //     const resultFromNode = await choiceWithSingleStatements();
    //     expect(resultFromSfn).toEqual(resultFromNode);
    // });
    // it("will execute choiceWithShorthand as if it were node", async () => {
    //     const resultFromSfn = await convertDeployExecute("choice", "choiceWithShorthand");
    //     const { choiceWithShorthand } = require("../resources/choice");
    //     const resultFromNode = await choiceWithShorthand();
    //     expect(resultFromSfn).toEqual(resultFromNode);
    // });
});