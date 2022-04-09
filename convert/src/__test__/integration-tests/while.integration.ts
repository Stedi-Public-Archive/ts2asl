import { convertDeployExecute } from "../utility";
jest.setTimeout(99999999);

describe("when converting while", () => {
    it("will execute simpleWhile as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("while", "simpleWhile");
        const { simpleWhile } = require("../resources/while");
        const resultFromNode = await simpleWhile();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute whileWithBreak as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("while", "whileWithBreak");
        const { whileWithBreak } = require("../resources/while");
        const resultFromNode = await whileWithBreak();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute whileWithEarlyReturn as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("while", "whileWithEarlyReturn");
        const { whileWithEarlyReturn } = require("../resources/while");
        const resultFromNode = await whileWithEarlyReturn();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute whileWithContinue as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("while", "whileWithContinue");
        const { whileWithContinue } = require("../resources/while");
        const resultFromNode = await whileWithContinue();
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});