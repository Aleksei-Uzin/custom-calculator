const config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'html'],
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],
}

module.exports = config
