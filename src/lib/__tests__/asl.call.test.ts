import { ASL } from "../ASL"
import { internalWaitSeconds } from "../asl-internals";


describe("when calling ASL.Task with TypescriptInvoke", () => {
  it("will invoke typescript function", async () => {
    const fn = jest.fn();

    await ASL.Task({ TypescriptInvoke: fn });
    expect(fn).toHaveBeenCalled();
  });

  it("will invoke typescript function with input", async () => {
    const fn = jest.fn();
    const input = { text: "text", number: 43 };
    await ASL.Task({ TypescriptInvoke: fn, Input: input });
    expect(fn).toHaveBeenCalledWith(input);
  });
})