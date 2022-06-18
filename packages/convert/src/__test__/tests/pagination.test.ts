import { runConvertForTest } from "../utility";
describe("when converting pagination", () => {
    let converted;
    beforeAll(() => {
        converted = runConvertForTest("pagination");
    });
    it("then main can be converted to asl", async () => {
        expect(converted.main.asl).toMatchInlineSnapshot();
    });
    it("then doSomething can be converted to asl", async () => {
        expect(converted.doSomething.asl).toMatchInlineSnapshot();
    });
});