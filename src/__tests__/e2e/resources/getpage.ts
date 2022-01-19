import { ASL } from "../../../lib/ASL";

export const main = ASL.AsStateMachine(async () => {
  let page = await ASL.Task({ Resource: "arn:aws:states:::apigateway:invoke", Parameters: { Param1: 2 } });
  while (page.nextPageToken) {
    await ASL.Wait({ Seconds: 2 });
    page = await ASL.Task({ Resource: "arn:aws:states:::apigateway:invoke", Parameters: { Param1: 2 } });
  }
});
