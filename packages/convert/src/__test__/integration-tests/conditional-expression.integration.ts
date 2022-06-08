import * as asl from "@ts2asl/asl-lib";
import { convertDeployExecute } from "../utility";
const { conditional, conditionalWithLiteral, conditionalWithinExpression, nestedConditional, conditionalWithinStringFormat } = require("../resources/conditional-expression");
jest.setTimeout(99999999);

describe("when converting conditional-expression", () => {
    it("will execute conditional as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("conditional-expression", "conditional");
        const resultFromNode = await conditional({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute conditionalWithLiteral as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("conditional-expression", "conditionalWithLiteral");
        const resultFromNode = await conditionalWithLiteral({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute conditionalWithinExpression as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("conditional-expression", "conditionalWithinExpression");
        const resultFromNode = await conditionalWithinExpression({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute nestedConditional as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("conditional-expression", "nestedConditional");
        const resultFromNode = await nestedConditional({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute conditionalWithinStringFormat as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("conditional-expression", "conditionalWithinStringFormat");
        const resultFromNode = await conditionalWithinStringFormat({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});