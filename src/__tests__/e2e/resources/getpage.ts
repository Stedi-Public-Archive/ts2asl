import { asl, Deploy } from "asl-lib";


export const main = Deploy.asStateMachine(async () => {
  let page = await getPage({});
  while (page.nextPageToken) {
    await asl.wait({ seconds: 2 });
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