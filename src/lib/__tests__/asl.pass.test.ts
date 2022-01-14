import { ASL } from "../ASL"
import { internalWaitSeconds } from "../asl-internals";


describe("when calling ASL.Pass with object", () => {
  it("will return object", async () => {
    const result = await ASL.Pass({ Result: { text: "text", number: 43 } });
    expect(result).toEqual({ text: "text", number: 43 });
  });
})