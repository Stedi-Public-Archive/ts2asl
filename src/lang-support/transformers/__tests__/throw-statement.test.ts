import { testTransform } from "../../__tests__/test-transform"
import { throwStatementTransformer } from "../throw-statement";

describe("when converting throw statements", () => {

  it("then throw statement will become ASL.Failed", () => {
    expect(testTransform("throw new Error()", throwStatementTransformer)).toBe("ASL.Failed({ Error: 'Error' })");
  });

  it("then throw statement will become ASL.Failed with argument", () => {
    expect(testTransform("throw new Error('bad luck')", throwStatementTransformer)).toBe("ASL.Failed({ Error: 'Error', Cause: 'bad luck' })");
  });

  it("then throw statement will become ASL.Failed with argument", () => {
    expect(testTransform("throw new Error(\"bad luck\")", throwStatementTransformer)).toBe("ASL.Failed({ Error: 'Error', Cause: 'bad luck' })");
  });

  it("then throw statement will become ASL.Failed with argument", () => {
    expect(testTransform("throw new SpecialError(\"bad luck\")", throwStatementTransformer)).toBe("ASL.Failed({ Error: 'SpecialError', Cause: 'bad luck' })");
  });


  // it("then throw statement of something ", () => {
  //   expect(testTransform("throw new Error('bad luck')", throwStatementTransformer)).toBe("ASL.Failed('bad luck')");
  // });

})