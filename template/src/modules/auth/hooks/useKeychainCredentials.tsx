import { useEffect, useState, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Keychain from 'react-native-keychain';
import useSupportedBiometry from './useSupportedBiometry';
import { warn } from 'utils/console';

export default function useKeychainCredentials() {
  const [userCredentials, setUserCredentials] = useState<false | Keychain.UserCredentials>(false);
  const supportedBiometry = useSupportedBiometry();
  const isMounted = useRef(true);

  useEffect(() => {
    (async () => {
      const hasCredentials = await AsyncStorage.getItem('hasCredentials');
      if (!hasCredentials) return;
      try {
        const credentials = await Keychain.getGenericPassword({
          accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_CURRENT_SET_OR_DEVICE_PASSCODE,
          accessible: Keychain.ACCESSIBLE.WHEN_PASSCODE_SET_THIS_DEVICE_ONLY,
          authenticationPrompt: {
            title: 'Authentication needed',
            subtitle: `Use ${supportedBiometry} to sign in`,
            cancel: 'Cancel',
          },
        });
        if (isMounted.current) {
          setUserCredentials(credentials);
        }
      } catch (e) {
        warn('useKeychainCredentials:', e);
      }
    })();

    return () => {
      isMounted.current = false;
    };
  }, []);

  return { userCredentials };
}
