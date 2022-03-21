/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  passWithNoTests: true,
  testMatch: ["**/*.integration.ts"],
  testTimeout: 99999999,
  // setupFiles: ["<rootDir>/test/setupTests.ts"],
};