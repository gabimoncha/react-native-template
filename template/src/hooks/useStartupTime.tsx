import { useEffect } from 'react';
import { getTimeSinceStartup } from 'react-native-startup-time';

export default function useStartupTime() {
  useEffect(() => {
    getTimeSinceStartup().then((time) => {
      // Captured by FileLogger in production
      console.log({ startuptime: time });
    });
  }, []);
}
