module.exports = {
  preset: 'react-native',
  setupFiles: [
      './node_modules/react-native-gesture-handler/jestSetup.js',
  ],
  transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
      'node_modules/(?!(jest-)?react-native|@react-native|react-navigation|@react-navigation/.*)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
