export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    // '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sss|styl)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg)$': 'jest-transform-stub'
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
}
// jest.config.js atau jest.config.ts
// export default {
//   preset: 'ts-jest',
//   testEnvironment: 'jest-environment-jsdom',
//   transform: {
//     '^.+\\.tsx?$': 'ts-jest',
//     '^.+\\.svg$': 'jest-svg-transformer',
//   },
//   moduleNameMapper: {
//     '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
//   },
// };
