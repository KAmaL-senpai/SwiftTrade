module.exports={
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom","./jest.setup.js"],
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx"],
};
