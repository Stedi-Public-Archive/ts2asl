import { executeStepFunction, listFunctionResources } from "../utility";
jest.setTimeout(99999999);

describe("when deploying nested-stepfunctions", () => {
    it("lambdas are less than 1 MB in size", async () => {
        const lambdas = await listFunctionResources("nested-stepfunctions");
        expect(lambdas.filter(x=>(x.CodeSize ?? 0) > 1219629)).toEqual([]);
    });
    it("will execute callStateMachineWithAwait as if it were node", async () => {
        const resultFromSfn = await executeStepFunction("nested-stepfunctions", "callStateMachineWithAwait");
        const { callStateMachineWithAwait } = require("../../../packages/convert/src/__test__/resources/nested-stepfunctions");
        const resultFromNode = await callStateMachineWithAwait({});
        expect(resultFromSfn).toEqual(resultFromNode);
    });

    it("will execute callStateMachinePassReference as if it were node", async () => {
        const resultFromSfn = await executeStepFunction("nested-stepfunctions", "callStateMachinePassReference");
        const { callStateMachinePassReference } = require("../../../packages/convert/src/__test__/resources/nested-stepfunctions");
        const resultFromNode = await callStateMachinePassReference({});
        expect(resultFromSfn).toEqual(resultFromNode);
    });

    // it("will execute callStateMachineNoAwait as if it were node", async () => {
    //     const resultFromSfn = await ExecuteStepFunction("nested-stepfunctions", "callStateMachineNoAwait");
    //     const { callStateMachineNoAwait } = require("../resources/nested-stepfunctions");
    //     const resultFromNode = await callStateMachineNoAwait({});
    //     expect(resultFromSfn).toEqual(resultFromNode);
    // });
    // it("will execute callLambdaWithAwait as if it were node", async () => {
    //     const resultFromSfn = await ExecuteStepFunction("nested-stepfunctions", "callLambdaWithAwait");
    //     const { callLambdaWithAwait } = require("../resources/nested-stepfunctions");
    //     const resultFromNode = await callLambdaWithAwait({});
    //     expect(resultFromSfn).toEqual(resultFromNode);
    // });
    // it("will execute callLambdaNoAwait as if it were node", async () => {
    //     const resultFromSfn = await ExecuteStepFunction("nested-stepfunctions", "callLambdaNoAwait");
    //     const { callLambdaNoAwait } = require("../resources/nested-stepfunctions");
    //     const resultFromNode = await callLambdaNoAwait({});
    //     expect(resultFromSfn).toEqual(resultFromNode);
    // });
    // it("will execute notAwaitedVoidExpression as if it were node", async () => {
    //     const resultFromSfn = await ExecuteStepFunction("nested-stepfunctions", "notAwaitedVoidExpression");
    //     const { notAwaitedVoidExpression } = require("../resources/nested-stepfunctions");
    //     const resultFromNode = await notAwaitedVoidExpression({});
    //     expect(resultFromSfn).toEqual(resultFromNode);
    // });
    // it("will execute childStateMachine as if it were node", async () => {
    //     const resultFromSfn = await ExecuteStepFunction("nested-stepfunctions", "childStateMachine");
    //     const { childStateMachine } = require("../resources/nested-stepfunctions");
    //     const resultFromNode = await childStateMachine({});
    //     expect(resultFromSfn).toEqual(resultFromNode);
    // });
});