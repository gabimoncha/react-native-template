module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:jest/recommended'],
  plugins: ['jest', 'detox'],
  rules: {
    curly: 'off',
  },
};
