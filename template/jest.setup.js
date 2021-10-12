import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock.js';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo);
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('@sentry/react-native', () => ({
  init: jest.fn(),
}));

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('nanoid/non-secure', () => ({
  nanoid: () => 'routeUniqId',
}));

const FRAME_TIME = 10;

global.requestAnimationFrame = (cb) => {
  setTimeout(cb, FRAME_TIME);
};

jest.mock('react-native/Libraries/Components/Switch/Switch', () => {
  const mockComponent = require('react-native/jest/mockComponent');
  return mockComponent('react-native/Libraries/Components/Switch/Switch');
});
