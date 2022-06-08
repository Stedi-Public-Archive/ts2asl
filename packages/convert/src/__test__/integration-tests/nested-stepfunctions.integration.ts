import * as asl from "@ts2asl/asl-lib";
import { convertDeployExecute } from "../utility";
const { callStateMachineWithAwait, callStateMachinePassReference, callStateMachineNoAwait, callLambdaWithAwait, notAwaitedVoidExpression, childStateMachine } = require("../resources/nested-stepfunctions");
jest.setTimeout(99999999);

describe("when converting nested-stepfunctions", () => {
    it("will execute callStateMachineWithAwait as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("nested-stepfunctions", "callStateMachineWithAwait");
        const resultFromNode = await callStateMachineWithAwait({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute callStateMachinePassReference as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("nested-stepfunctions", "callStateMachinePassReference");
        const resultFromNode = await callStateMachinePassReference({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute callStateMachineNoAwait as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("nested-stepfunctions", "callStateMachineNoAwait");
        const resultFromNode = await callStateMachineNoAwait({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute callLambdaWithAwait as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("nested-stepfunctions", "callLambdaWithAwait");
        const resultFromNode = await callLambdaWithAwait({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute notAwaitedVoidExpression as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("nested-stepfunctions", "notAwaitedVoidExpression");
        const resultFromNode = await notAwaitedVoidExpression({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute childStateMachine as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("nested-stepfunctions", "childStateMachine");
        const resultFromNode = await childStateMachine({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});