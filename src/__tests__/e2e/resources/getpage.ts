import { ASL } from "../../../lib/ASL";

export const main = ASL.AsStateMachine(async () => {
  let page = await getPage({});
  while (page.nextPageToken) {
    await ASL.Wait({ Seconds: 2 });
    page = await getPage({ pageToken: page.nextPageToken });
  }
});


const getPage = ASL.AsLambda(async (context: { pageToken?: string }) => {
  if (!context.pageToken) {
    return {
      items: ["a", "b", "c", "d"],
      nextPageToken: "2"
    }
  } else if (context.pageToken === "2") {
    return {
      items: ["e", "f", "g", "h"],
    }
  }
});