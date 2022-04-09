import { convertDeployExecute } from "../utility";
jest.setTimeout(99999999);

describe("when converting sdk-states", () => {
    it("will execute dynamoDBPutItemIfNotExists as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("sdk-states", "dynamoDBPutItemIfNotExists");
        const { dynamoDBPutItemIfNotExists } = require("../resources/sdk-states");
        const resultFromNode = await dynamoDBPutItemIfNotExists();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute countDynamoDBItems as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("sdk-states", "countDynamoDBItems");
        const { countDynamoDBItems } = require("../resources/sdk-states");
        const resultFromNode = await countDynamoDBItems();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute cloudWatchPutMetricData as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("sdk-states", "cloudWatchPutMetricData");
        const { cloudWatchPutMetricData } = require("../resources/sdk-states");
        const resultFromNode = await cloudWatchPutMetricData();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});