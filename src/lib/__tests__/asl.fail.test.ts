import { ASL } from "../ASL"

describe("when calling ASL.Fail", () => {
  it("exception is thrown", async () => {

    expect(() => {
      ASL.Fail({ Cause: "bad luck" });
      console.log("sdfsdf");
    }).toThrowError("bad luck");
  });
})