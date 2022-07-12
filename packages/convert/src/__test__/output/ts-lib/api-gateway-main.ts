import * as asl from "@ts2asl/asl-lib"

export const main = asl.deploy.asStateMachine(async () =>{
    const response = await asl.optimized.apiGatewayInvoke({
        parameters: {
            ApiEndpoint: "aabbccddee.execute-api.us-east-1.amazonaws.com",
            Method: "GET",
        }
    });
    asl.typescriptIf({
        name: "If (response.StatusCode = ...",
        condition: () => response.StatusCode === 200,
        then: async () => {
            return "ok";
        },
        comment: "if (response.StatusCode === 200) {\n    return \"ok\"\n  }"
    })
    return "not-ok";
});
