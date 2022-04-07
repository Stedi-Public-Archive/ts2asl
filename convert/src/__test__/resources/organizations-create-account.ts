
import * as asl from "@ts2asl/asl-lib"

export const main = asl.deploy.asStateMachine(async () => {
  let buckets = await asl.sdkS3ListBuckets({ parameters: {} })
  let count = buckets.Buckets?.length;
  return count;
});

