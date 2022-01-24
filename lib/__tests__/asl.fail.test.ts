import { ASL } from "../src/asl"

describe("when calling ASL.Fail", () => {
  it("exception is thrown", async () => {

    expect(() => {
      ASL.fail({ cause: "bad luck" });
      console.log("sdfsdf");
    }).toThrowError("bad luck");
  });
})