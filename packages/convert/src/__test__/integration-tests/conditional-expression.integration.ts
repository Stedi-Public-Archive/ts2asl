import * as asl from "@ts2asl/asl-lib";
import { convertDeployExecute } from "../utility";
jest.setTimeout(99999999);

describe("when converting conditional-expression", () => {
    it("will execute conditional as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("conditional-expression", "conditional");
        const { conditional } = require("../resources/conditional-expression");
        const resultFromNode = await conditional({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute conditionalWithLiteral as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("conditional-expression", "conditionalWithLiteral");
        const { conditionalWithLiteral } = require("../resources/conditional-expression");
        const resultFromNode = await conditionalWithLiteral({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute conditionalWithinExpression as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("conditional-expression", "conditionalWithinExpression");
        const { conditionalWithinExpression } = require("../resources/conditional-expression");
        const resultFromNode = await conditionalWithinExpression({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute nestedConditional as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("conditional-expression", "nestedConditional");
        const { nestedConditional } = require("../resources/conditional-expression");
        const resultFromNode = await nestedConditional({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute conditionalWithinStringFormat as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("conditional-expression", "conditionalWithinStringFormat");
        const { conditionalWithinStringFormat } = require("../resources/conditional-expression");
        const resultFromNode = await conditionalWithinStringFormat({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});