import { useEffect, useState, useRef } from 'react';
import * as Keychain from 'react-native-keychain';
import { warn } from 'utils/console';

export default function useSupportedBiometry() {
  const [supportedBiometry, setSupportedBiometry] = useState<Keychain.BIOMETRY_TYPE | null>(null);
  const isMounted = useRef(true);

  useEffect(() => {
    Keychain.getSupportedBiometryType({})
      .then((type) => {
        if (isMounted.current) {
          setSupportedBiometry(type);
        }
      })
      .catch((e) => {
        warn('useSupportedBiometry:', e);
      });

    return () => {
      isMounted.current = false;
    };
  }, []);

  return supportedBiometry;
}
