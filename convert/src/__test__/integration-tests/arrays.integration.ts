import { convertDeployExecute } from "../utility";

describe("when converting arrays", () => {
    it("will execute serializeArray as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("arrays", "serializeArray");
        const { serializeArray } = require("../resources/arrays");
        const resultFromNode = await serializeArray();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute mapArray as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("arrays", "mapArray");
        const { mapArray } = require("../resources/arrays");
        const resultFromNode = await mapArray();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute mapArraySimple as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("arrays", "mapArraySimple");
        const { mapArraySimple } = require("../resources/arrays");
        const resultFromNode = await mapArraySimple();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute mapArrayNestedPropertyAccess as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("arrays", "mapArrayNestedPropertyAccess");
        const { mapArrayNestedPropertyAccess } = require("../resources/arrays");
        const resultFromNode = await mapArrayNestedPropertyAccess();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute filterArray as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("arrays", "filterArray");
        const { filterArray } = require("../resources/arrays");
        const resultFromNode = await filterArray();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute jsonPathExpressions as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("arrays", "jsonPathExpressions");
        const { jsonPathExpressions } = require("../resources/arrays");
        const resultFromNode = await jsonPathExpressions();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});