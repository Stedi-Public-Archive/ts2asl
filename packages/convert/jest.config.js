/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  passWithNoTests: true,
  testMatch: ["**/*.test.ts"],
  // setupFiles: ["<rootDir>/test/setupTests.ts"],
};