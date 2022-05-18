import { main } from "../src/program";

describe('when invoking program', () => {
  it("returns proper greeting", async () => {
    const result = await main({ name: "Fred" });
    expect(result.greeting).toBe("Hello Fred");
  })

  it("greets world when passed empty document", async () => {
    const result = await main({} as any);
    expect(result.greeting).toBe("Hello World");
  })

  it("no lucky number is the name", async () => {
    const first = await main({} as any);
    const second = await main({} as any);
    expect(first.luckyNumber).not.toBe(second.luckyNumber);
  })
});
