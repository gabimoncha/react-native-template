import { useCallback, useEffect, useState } from 'react';
import { Alert, Platform } from 'react-native';
import useSupportedBiometry from './useSupportedBiometry';
import { log, warn } from 'utils/console';
import * as Keychain from 'react-native-keychain';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Credentials {
  username: string;
  password: string;
}

export default function useKeychainBiometrics({ username, password }: Credentials) {
  const [storeCredentials, setStoreCredentials] = useState<boolean>(false);
  const supportedBiometry = useSupportedBiometry();

  useEffect(() => {
    if (!storeCredentials) return;
    if ((Platform.OS === 'android' && supportedBiometry) || Platform.OS === 'ios') {
      Alert.alert(`Use ${supportedBiometry} next time`, `You will be prompt to use ${supportedBiometry}`, [
        {
          text: 'Yes',
          onPress: async () => {
            try {
              await Keychain.setGenericPassword(username, password, {
                accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_CURRENT_SET_OR_DEVICE_PASSCODE,
                accessible: Keychain.ACCESSIBLE.WHEN_PASSCODE_SET_THIS_DEVICE_ONLY, // iOS only
                // service: '<ADD_APP_BUNDLE_ID>',
              });
              await AsyncStorage.setItem('hasCredentials', 'true');
            } catch (err) {
              warn('Could not save credentials, ' + err);
            }
          },
        },
        {
          text: 'No',
          onPress: () => {
            log("Doesn't want to use biometrics");
          },
          style: 'cancel',
        },
      ]);
    }
  }, [storeCredentials]);

  return { setStoreCredentials };
}
