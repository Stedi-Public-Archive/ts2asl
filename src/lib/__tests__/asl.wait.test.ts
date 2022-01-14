import { ASL } from "../ASL"
import { internalWaitSeconds } from "../asl-internals";

jest.mock("../asl-internals");

describe("when calling ASL.Wait with Seconds", () => {
  it("will perform internalWait", async () => {
    await ASL.Wait({ Seconds: 6 });
    expect(internalWaitSeconds).toHaveBeenCalledWith(6)
  });
})