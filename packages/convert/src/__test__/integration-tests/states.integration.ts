import { convertDeployExecute } from "../utility";
jest.setTimeout(99999999);

describe("when converting states", () => {
    it("will execute waitForTaskToken as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("states", "waitForTaskToken");
        const { waitForTaskToken } = require("../resources/states");
        const resultFromNode = await waitForTaskToken({});
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});