
import * as asl from "@ts2asl/asl-lib"

export const countS3buckets = asl.deploy.asStateMachine(async () =>{
    let buckets = await asl.nativeS3ListBuckets({ parameters: {} });
    let count = asl.jsonPathLength(buckets.Buckets);
    return count;
});

