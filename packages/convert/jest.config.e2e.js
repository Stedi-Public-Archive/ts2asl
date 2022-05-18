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
    // "**/parallel.integration.ts",
    // "**/switch.integration.ts",
  ],
  testTimeout: 99999999,
  // setupFiles: ["<rootDir>/test/setupTests.ts"],
};