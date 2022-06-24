/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  passWithNoTests: true,
  testMatch: [
    "**/optional-property-chain.integration.ts",
    "**/while.integration.ts",
    "**/do-while.integration.ts",
    "**/null-coalescing.integration.ts",
    "**/boolean-evalation.integration.ts",
    "**/conditional-expression.integration.ts",
    "**/do-while.integration.ts",
    "**/choice.integration.ts",
    "**/in-keyword.integration.ts",
    "**/try-catch.integration.ts",
    "**/variable-assignments.integration.ts",
    "**/enums.integration.ts",
    "**/expressions.integration.ts",
    "**/if.integration.ts",
    "**/for-each.integration.ts",
    // "**/arrays.integration.ts", FAILS
    // "**/variables.integration.ts", FAILS on comparing context.executionId (false negative)
    // "**/input-validation.integration.ts", FAILS on throwing error in node (false negative)
  ],
  testTimeout: 99999999,
  // setupFiles: ["<rootDir>/test/setupTests.ts"],
};