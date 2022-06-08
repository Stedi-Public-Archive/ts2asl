import * as asl from "@ts2asl/asl-lib";
import { convertDeployExecute } from "../utility";
const { compareEnum, compareStringEnum } = require("../resources/enums");
jest.setTimeout(99999999);

describe("when converting enums", () => {
    it("will execute compareEnum as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("enums", "compareEnum");
        const resultFromNode = await compareEnum({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute compareStringEnum as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("enums", "compareStringEnum");
        const resultFromNode = await compareStringEnum({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});