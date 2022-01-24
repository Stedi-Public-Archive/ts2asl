import { ASL } from "../src/asl"

describe("when calling ASL.Pass with object", () => {
  it("will return object", async () => {
    const result = await ASL.pass({ result: { text: "text", number: 43 } });
    expect(result).toEqual({ text: "text", number: 43 });
  });
})