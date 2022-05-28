module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/tests'],
  testMatch: ['**/*.integration.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
};
