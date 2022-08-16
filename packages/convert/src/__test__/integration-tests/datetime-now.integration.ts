import * as asl from "@ts2asl/asl-lib";
import { convertDeployExecute } from "../utility";
const { dateTimeNow, dateTimeUsingJsonPath } = require("../resources/datetime-now");
jest.setTimeout(99999999);

describe("when converting datetime-now", () => {
    it("will execute dateTimeNow as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("datetime-now", "dateTimeNow");
        const resultFromNode = await dateTimeNow({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute dateTimeUsingJsonPath as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("datetime-now", "dateTimeUsingJsonPath");
        const resultFromNode = await dateTimeUsingJsonPath({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});