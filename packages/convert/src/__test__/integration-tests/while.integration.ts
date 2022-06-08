import * as asl from "@ts2asl/asl-lib";
import { convertDeployExecute } from "../utility";
const { simpleWhile, whileWithBreak, whileWithEarlyReturn, whileWithContinue } = require("../resources/while");
jest.setTimeout(99999999);

describe("when converting while", () => {
    it("will execute simpleWhile as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("while", "simpleWhile");
        const resultFromNode = await simpleWhile({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute whileWithBreak as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("while", "whileWithBreak");
        const resultFromNode = await whileWithBreak({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute whileWithEarlyReturn as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("while", "whileWithEarlyReturn");
        const resultFromNode = await whileWithEarlyReturn({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
    it("will execute whileWithContinue as if it were node", async () => {
        const resultFromSfn = await convertDeployExecute("while", "whileWithContinue");
        const resultFromNode = await whileWithContinue({}, asl.testing.createTestContext({}));
        expect(resultFromSfn).toEqual(resultFromNode);
    });
});