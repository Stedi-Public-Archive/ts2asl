import { convertDeployExecute } from "../utility";
jest.setTimeout(99999999);

describe("when converting tasks", () => {
    it("will execute countS3buckets as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("tasks", "countS3buckets");
        const { countS3buckets } = require("../resources/tasks");
        const resultFromNode = await countS3buckets();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});