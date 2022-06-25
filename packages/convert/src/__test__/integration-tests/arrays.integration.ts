import * as asl from "@ts2asl/asl-lib";
import { convertDeployExecute } from "../utility";
const { serializeArray, mapArray, mapArraySimple, mapArrayNestedPropertyAccess, filterArray } = require("../resources/arrays");
jest.setTimeout(99999999);

describe("when converting arrays", () => {
    it("will execute serializeArray as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("arrays", "serializeArray");
        const resultFromNode = await serializeArray({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute mapArray as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("arrays", "mapArray");
        const resultFromNode = await mapArray({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute mapArraySimple as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("arrays", "mapArraySimple");
        const resultFromNode = await mapArraySimple({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute mapArrayNestedPropertyAccess as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("arrays", "mapArrayNestedPropertyAccess");
        const resultFromNode = await mapArrayNestedPropertyAccess({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute filterArray as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("arrays", "filterArray");
        const resultFromNode = await filterArray({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});