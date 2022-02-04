import * as asl from "../src"
import { internalWaitSeconds } from "../src/asl-internals";

jest.mock("../src/asl-internals");

describe("when calling ASL.Wait with Seconds", () => {
  it("will perform internalWait", async () => {
    await asl.wait({ seconds: 6 });
    expect(internalWaitSeconds).toHaveBeenCalledWith(6)
  });
})