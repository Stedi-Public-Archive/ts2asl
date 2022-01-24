import { ASL, Deploy } from "asl-lib/lib/asl";

export const main = Deploy.AsStateMachine(async () => {
  let page = await getPage({});
  while (page.nextPageToken) {
    await ASL.wait({ seconds: 2 });
    page = await getPage({ pageToken: page.nextPageToken });
  }
});


const getPage = Deploy.asLambda(async (context: { pageToken?: string }) => {
  if (!context.pageToken) {
    return {
      items: ["a", "b", "c", "d"],
      nextPageToken: "2"
    }
  } else // if (context.pageToken === "2") {
  {
    return {
      items: ["e", "f", "g", "h"],
    }
  }
});