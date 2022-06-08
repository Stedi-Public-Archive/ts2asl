import * as asl from "@ts2asl/asl-lib";
import { convertDeployExecute } from "../utility";
const { dynamoDBPutItemIfNotExists, countDynamoDBItems, cloudWatchPutMetricData } = require("../resources/sdk-states");
jest.setTimeout(99999999);

describe("when converting sdk-states", () => {
    it("will execute dynamoDBPutItemIfNotExists as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("sdk-states", "dynamoDBPutItemIfNotExists");
        const resultFromNode = await dynamoDBPutItemIfNotExists({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute countDynamoDBItems as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("sdk-states", "countDynamoDBItems");
        const resultFromNode = await countDynamoDBItems({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute cloudWatchPutMetricData as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("sdk-states", "cloudWatchPutMetricData");
        const resultFromNode = await cloudWatchPutMetricData({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});