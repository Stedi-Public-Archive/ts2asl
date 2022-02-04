import * as asl from "../src"

describe("when calling ASL.Pass with object", () => {
  it("will return object", async () => {
    const result = await asl.pass({ result: { text: "text", number: 43 } });
    expect(result).toEqual({ text: "text", number: 43 });
  });
})