/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  passWithNoTests: true,
  testMatch: ["**/*.test.ts"],
  // setupFiles: ["<rootDir>/test/setupTests.ts"],
};