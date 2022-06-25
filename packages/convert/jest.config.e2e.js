/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  passWithNoTests: true,
  testPathIgnorePatterns: [
    "node_modules",
    "closures.integration.ts", //tested in CDk-stacks, depends on a lambda deployment, copy of another test in for-each
    "hello-world.integration.ts",//tested in CDk-stacks, depends on a lambda deployment
    "parallel.integration.ts",//tested in CDk-stacks, depends on a lambda deployment
    "input-validation.integration.ts", //FAILS on throwing error in node (false negative)
    "map.integration.ts", //TODO, depends on a service integration
    "switch.integration.ts", //TODO, depends on a service integration
    "throw.integration.ts", //FAILS on throwing error in node (false negative)
    "variables.integration.ts", //TODO, depends on comparing context.executionId (false negative)
    "pagination.integration.ts", //TODO, depends on a service integration
    "states.integration.ts", //TODO, depends on a service integration
    "kyc.integration.ts", //TODO, depends on a service integration
    "sdk-states.integration.ts", //TODO, depends on a service integration
    "nested-stepfunctions.integration.ts" //tested in CDk-stacks depends on a 2nd step func deployment
  ],
  testMatch: ["**/*.integration.ts"],
  testTimeout: 99999999,
};