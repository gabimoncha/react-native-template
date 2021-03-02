import { useEffect } from 'react';
import { useNetInfo } from '@react-native-community/netinfo';
import { getCurrentRoute, goBack, navigate } from 'navigation/RootNavigation';

export default function useNetworkError() {
  const { isConnected } = useNetInfo();

  useEffect(() => {
    if (isConnected === null) return;
    const route = getCurrentRoute();

    // Captured by FileLogger in production
    console.log({ route, isConnected });
    if (!isConnected && route) {
      navigate('NetworkError');
    } else if (route && route.name === 'NetworkError') {
      goBack();
    }
  }, [isConnected]);
}
