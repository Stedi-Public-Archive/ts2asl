/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  passWithNoTests: true,
  testMatch: ["**/*.e2e.ts"],
  setupFiles: ["<rootDir>/test/setupTests.ts"],
};