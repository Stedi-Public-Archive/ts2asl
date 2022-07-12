import * as asl from "@ts2asl/asl-lib"

export const main = asl.deploy.asStateMachine(async () => {
  const response = await asl.optimized.apiGatewayInvoke({
    parameters: {
      ApiEndpoint: "aabbccddee.execute-api.us-east-1.amazonaws.com",
      Method: "GET",
  }});

  if (response.StatusCode === 200) {
    return "ok"
  }

  return "not-ok";
});
