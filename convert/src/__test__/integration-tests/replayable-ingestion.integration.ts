import { convertDeployExecute } from "../utility";
describe("when converting replayable-ingestion", () => {
    it("will execute main as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("replayable-ingestion", "main");
        const { main } = require("../resources/replayable-ingestion");
        const resultFromNode = await main();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute replayWorker as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("replayable-ingestion", "replayWorker");
        const { replayWorker } = require("../resources/replayable-ingestion");
        const resultFromNode = await replayWorker();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});