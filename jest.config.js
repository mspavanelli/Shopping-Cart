module.exports = {
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  collectCoverageFrom: [
    '<rootDir>/src/components/**/*.(js|jsx|ts|tsx)',
    '<rootDir>/src/pages/**/*.(js|jsx|ts|tsx)',
  ],
}
