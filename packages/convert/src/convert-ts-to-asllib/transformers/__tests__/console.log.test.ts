import { testTransform } from "../../__tests__/test-transform";
import { arrayFilterTransformer } from "../array-filter-statement";
import { consoleLogStatementTransformer } from "../log-statement";

describe("when converting console log statements", () => {
  it("can convert single string", () => {
    expect(
      testTransform("console.log('hello')", consoleLogStatementTransformer({}))
    ).toMatchInlineSnapshot(`
      "asl.pass({
          name: \\"Log ('hello')\\",
          parameters: () => 'hello',
          comment: \\"console.log('hello')\\"
      });"
    `);
  });

  it("can convert single num", () => {
    expect(testTransform("console.log(23)", consoleLogStatementTransformer({})))
      .toMatchInlineSnapshot(`
      "asl.pass({
          name: \\"Log (23)\\",
          parameters: () => 23,
          comment: \\"console.log(23)\\"
      });"
    `);
  });

  it("can convert object", () => {
    expect(
      testTransform(
        "console.log({num: 32, str: 'aaa'})",
        consoleLogStatementTransformer({})
      )
    ).toMatchInlineSnapshot(`
      "asl.pass({
          name: \\"Log ({num: 32, str: 'aaa'})\\",
          parameters: () => ({ num: 32, str: 'aaa' }),
          comment: \\"console.log({num: 32, str: 'aaa'})\\"
      });"
    `);
  });

  it("can convert function", () => {
    expect(
      testTransform(
        'console.log(asl.states.format("Starting execution of {} at {} with role of {}", context.stateMachine.name, context.execution.startTime, context.execution.roleArn))',
        consoleLogStatementTransformer({})
      )
    ).toMatchInlineSnapshot(`
      "asl.pass({
          name: \\"Log (asl.states.format(\\\\\\"S ...\\",
          parameters: () => asl.states.format(\\"Starting execution of {} at {} with role of {}\\", context.stateMachine.name, context.execution.startTime, context.execution.roleArn),
          comment: \\"console.log(asl.states.format(\\\\\\"Starting execution of {} at {} with role of {}\\\\\\", context.stateMachine.name, context.execution.startTime, context.execution.roleArn))\\"
      });"
    `);
  });
});
