import * as asl from "@ts2asl/asl-lib";
import { convertDeployExecute } from "../utility";
jest.setTimeout(99999999);

describe("when converting map", () => {
    it("will execute main as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("map", "main");
        const { main } = require("../resources/map");
        const resultFromNode = await main({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});