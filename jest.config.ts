/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  testEnvironment: "jsdom",
  coverageDirectory: "coverage",
  collectCoverage: true,
  // collectCoverageFrom: ["src/**/*.{js,jsx}", "!src/**/*stories.{js,jsx}"],
  // setupFiles: ["./src/SetupTests.js"],
  // coveragePathIgnorePatterns: [
  //   "<rootDir>/node_modules/",
  //   ".story.js",
  //   "<rootDir>/assetsTransformer.js",
  //   "<rootDir>/coverage",
  //   "<rootDir>/src/assets",
  //   "<rootDir>/src/utils/commandCentermockData.js",
  // ],
  // testPathIgnorePatterns: [
  //   "<rootDir>/node_modules/",
  //   "<rootDir>/coverage",
  //   "<rootDir>/src/utils/commandCentermockData.js",
  // ],
  // transform: {
  //   "^.+\\.js?$": "babel-jest",
  //   "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
  //     "./assetsTransformer.js",
  // },

  // verbose: true,
  // moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/test/jest/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/test/jest/__mocks__/styleMock.js",
  },
  clearMocks: true
};
