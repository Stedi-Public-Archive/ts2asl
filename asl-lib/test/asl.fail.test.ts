import * as asl from "../src"

describe("when calling ASL.Fail", () => {
  it("exception is thrown", async () => {

    expect(() => {
      asl.fail({ cause: "bad luck" });
      console.log("sdfsdf");
    }).toThrowError("bad luck");
  });
})