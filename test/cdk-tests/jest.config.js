module.exports = {
  roots: ['<rootDir>/tests'],
  testMatch: ['**/*.integration.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
};
