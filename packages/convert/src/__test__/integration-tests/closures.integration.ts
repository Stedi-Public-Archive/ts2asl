import * as asl from "@ts2asl/asl-lib";
import { convertDeployExecute } from "../utility";
const { main } = require("../resources/closures");
jest.setTimeout(99999999);

describe("when converting closures", () => {
    it("will execute main as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("closures", "main");
        const resultFromNode = await main({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});