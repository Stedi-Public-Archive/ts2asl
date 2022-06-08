import * as asl from "@ts2asl/asl-lib";
import { convertDeployExecute } from "../utility";
const { main, numericComparison } = require("../resources/boolean-evalation");
jest.setTimeout(99999999);

describe("when converting boolean-evalation", () => {
    it("will execute main as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("boolean-evalation", "main");
        const resultFromNode = await main({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute numericComparison as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("boolean-evalation", "numericComparison");
        const resultFromNode = await numericComparison({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});