import { useNetInfo } from '@react-native-community/netinfo';
import { navigate } from 'navigation/methods';

const mockApi = (isConnected: boolean | null) => (cb: () => void) => {
  if (isConnected === null) return;

  if (!isConnected) {
    // Navigate to Network Error screen if app is offline
    navigate('NetworkError');
  } else {
    Promise.resolve({}).then(() => {
      setTimeout(cb, 500);
    });
  }
};

export default function useMockApi() {
  const { isConnected } = useNetInfo();

  return mockApi(isConnected);
}
