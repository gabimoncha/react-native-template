import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import CustomText from 'components/CustomText';
import CustomScreen from 'components/CustomScreen';
import useKeychainBiometrics from '../hooks/useKeychainBiometrics';
import useKeychainCredentials from '../hooks/useKeychainCredentials';
import useStore from '../store';
import { useNavigation } from '@react-navigation/core';
import useMockApi from 'hooks/useMockApi';

const Onboaring = () => {
  const { t } = useTranslation('onboarding');
  const { navigate } = useNavigation();
  const { setStoreCredentials } = useKeychainBiometrics({ username: '@username', password: 'Pass1234' });

  const { userCredentials } = useKeychainCredentials();

  const mockApi = useMockApi();

  const setToken = useStore((state) => state.setToken);

  useEffect(() => {
    if (userCredentials) {
      // Authentificate .then setToken
      mockApi(() => setToken('jwtToken'));
    }
  }, [userCredentials]);

  return (
    <CustomScreen justifyContent={'space-evenly'} testID={'OnboardingScreen'}>
      <CustomText
        fontWeight={'700'}
        testID={'btnSign'}
        onPress={() => {
          // Authentificate .then setToken .then setStoreCredentials
          mockApi(() => {
            setToken('jwtToken');
            setStoreCredentials(true);
          });
        }}>
        {t('sign')}
      </CustomText>
      <CustomText
        fontWeight={'700'}
        testID={'btnForgot'}
        onPress={() => {
          // Send reset email and then deeplink to ResetPassword
          navigate('ResetPassword');
        }}>
        {t('forgot')}
      </CustomText>
    </CustomScreen>
  );
};

Onboaring.whyDidYouRender = true;

export default Onboaring;
