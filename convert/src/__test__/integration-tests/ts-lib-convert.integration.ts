import { convertDeployExecute } from "../utility";
jest.setTimeout(99999999);

describe("when converting ts-lib-convert", () => {
    it("will execute convertStringToNumber as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("ts-lib-convert", "convertStringToNumber");
        const { convertStringToNumber } = require("../resources/ts-lib-convert");
        const resultFromNode = await convertStringToNumber();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute convertStringToBoolean as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("ts-lib-convert", "convertStringToBoolean");
        const { convertStringToBoolean } = require("../resources/ts-lib-convert");
        const resultFromNode = await convertStringToBoolean();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});