// https://asl.stedi.com/?share=eJxNUNFOGzEQ_Bk_UFmcekmA5i1pCBB6hEBSoJUukgNLcpLPPtl7UlrNx2P7EoSf1rMzs7M7sXVNhjGWN6S1lc_W6TdJe1U3mqR9l7wjOa7Vf2vkkhWTl4Uy21ZtSba-Mlu5UN5Ln1oIDMdjRlF5Tr8Irv41hMjCnPaMia03lSE8km81Y6vtRmk0jt6rPTQxk_NQ2OAVpq038XenGsyYar9QvIPIjqyAOcXWYWYMucgS2VETxjRhzoyxi4that5CCKdqStJ5omUCQmRBmEX77EnpllAk99jKuhKLFC4hh7j78A4bdJliVnLVa6E8L8NB700yC5ruCtmtt2Zll-zCzU5SzG_r78jRQ3-9FocKA4g-xBnOcYEfGEKM8RMTjC4xxVWJa4zyHvI-8gHys7IsAymwbzDDLX5B9FBEi-II3nXgPILzzneIeyxwmkfxA8QjlljhN57wXH7FVwFP2AVeSrx02j_4G3t5SJt_sj8AXQnXpA
import * as asl from "@cloudscript/asl-lib"

export const main = asl.deploy.asStateMachine(async (_input: {}, _context: asl.StateMachineContext<{}>) => {
  const numbers = [0, 1, 2, 3];
  const letters = ["a", "b", "c", "d"];
  const global = "prefix";
  for (const number of numbers) {
    for (const letter of letters) {
      const combined = { number, letter, global };
      doSomething(combined);
    }
  }
});


export const doSomething = asl.deploy.asLambda(x => { })