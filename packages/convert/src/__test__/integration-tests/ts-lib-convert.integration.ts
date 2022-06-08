import * as asl from "@ts2asl/asl-lib";
import { convertDeployExecute } from "../utility";
const { convertStringToNumber, convertStringToBoolean } = require("../resources/ts-lib-convert");
jest.setTimeout(99999999);

describe("when converting ts-lib-convert", () => {
    it("will execute convertStringToNumber as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("ts-lib-convert", "convertStringToNumber");
        const resultFromNode = await convertStringToNumber({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute convertStringToBoolean as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("ts-lib-convert", "convertStringToBoolean");
        const resultFromNode = await convertStringToBoolean({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});