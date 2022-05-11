import { convertDeployExecute } from "../utility";
jest.setTimeout(99999999);

describe("when converting null-coalescing", () => {
    it("will execute nullCoalescing as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("null-coalescing", "nullCoalescing");
        const { nullCoalescing } = require("../resources/null-coalescing");
        const resultFromNode = await nullCoalescing({});
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute nullCoalescingWithLiteral as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("null-coalescing", "nullCoalescingWithLiteral");
        const { nullCoalescingWithLiteral } = require("../resources/null-coalescing");
        const resultFromNode = await nullCoalescingWithLiteral({});
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute nullCoalescingWithinExpression as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("null-coalescing", "nullCoalescingWithinExpression");
        const { nullCoalescingWithinExpression } = require("../resources/null-coalescing");
        const resultFromNode = await nullCoalescingWithinExpression({});
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute nestedNullCoalescing as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("null-coalescing", "nestedNullCoalescing");
        const { nestedNullCoalescing } = require("../resources/null-coalescing");
        const resultFromNode = await nestedNullCoalescing({});
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute nullCoalescingWithinStringFormat as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("null-coalescing", "nullCoalescingWithinStringFormat");
        const { nullCoalescingWithinStringFormat } = require("../resources/null-coalescing");
        const resultFromNode = await nullCoalescingWithinStringFormat({});
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});