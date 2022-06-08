import * as asl from "@ts2asl/asl-lib";
import { convertDeployExecute } from "../utility";
const { nullCoalescing, nullCoalescingWithLiteral, nullCoalescingWithinExpression, nestedNullCoalescing, nullCoalescingWithinStringFormat } = require("../resources/null-coalescing");
jest.setTimeout(99999999);

describe("when converting null-coalescing", () => {
    it("will execute nullCoalescing as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("null-coalescing", "nullCoalescing");
        const resultFromNode = await nullCoalescing({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute nullCoalescingWithLiteral as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("null-coalescing", "nullCoalescingWithLiteral");
        const resultFromNode = await nullCoalescingWithLiteral({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute nullCoalescingWithinExpression as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("null-coalescing", "nullCoalescingWithinExpression");
        const resultFromNode = await nullCoalescingWithinExpression({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute nestedNullCoalescing as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("null-coalescing", "nestedNullCoalescing");
        const resultFromNode = await nestedNullCoalescing({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute nullCoalescingWithinStringFormat as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("null-coalescing", "nullCoalescingWithinStringFormat");
        const resultFromNode = await nullCoalescingWithinStringFormat({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});