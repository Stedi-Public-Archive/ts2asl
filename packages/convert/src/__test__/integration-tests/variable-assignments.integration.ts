import * as asl from "@ts2asl/asl-lib";
import { convertDeployExecute } from "../utility";
jest.setTimeout(99999999);

describe("when converting variable-assignments", () => {
    it("will execute literals as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("variable-assignments", "literals");
        const { literals } = require("../resources/variable-assignments");
        const resultFromNode = await literals({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute arrayWithIdentifiers as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("variable-assignments", "arrayWithIdentifiers");
        const { arrayWithIdentifiers } = require("../resources/variable-assignments");
        const resultFromNode = await arrayWithIdentifiers({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute unassignedVariable as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("variable-assignments", "unassignedVariable");
        const { unassignedVariable } = require("../resources/variable-assignments");
        const resultFromNode = await unassignedVariable({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute assignmentToUndefined as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("variable-assignments", "assignmentToUndefined");
        const { assignmentToUndefined } = require("../resources/variable-assignments");
        const resultFromNode = await assignmentToUndefined({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute assignmentToNull as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("variable-assignments", "assignmentToNull");
        const { assignmentToNull } = require("../resources/variable-assignments");
        const resultFromNode = await assignmentToNull({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute arrayIndexer as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("variable-assignments", "arrayIndexer");
        const { arrayIndexer } = require("../resources/variable-assignments");
        const resultFromNode = await arrayIndexer({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute functions as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("variable-assignments", "functions");
        const { functions } = require("../resources/variable-assignments");
        const resultFromNode = await functions({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});