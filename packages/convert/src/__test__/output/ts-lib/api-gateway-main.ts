import * as asl from "@ts2asl/asl-lib"

export const main = asl.deploy.asStateMachine(async () =>{
    const response = await asl.optimized.apiGatewayInvoke({
        parameters: {
            apiEndpoint: "aabbccddee.execute-api.us-east-1.amazonaws.com",
            method: "GET",
        }
    });
    asl.typescriptIf({
        name: "If (response.statusCode = ...",
        condition: () => response.statusCode === 200,
        then: async () => {
            return "ok";
        },
        comment: "if (response.statusCode === 200) {\n    return \"ok\"\n  }"
    })
    return "not-ok";
});
