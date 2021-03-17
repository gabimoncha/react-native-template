import React from 'react';
import { useTranslation } from 'react-i18next';
import CustomText from 'components/CustomText';
import CustomScreen from 'components/CustomScreen';
import { useNavigation } from '@react-navigation/core';

const ResetPassword = () => {
  const { t } = useTranslation();
  const { goBack } = useNavigation();

  return (
    <CustomScreen testID={'ResetPasswordScreen'}>
      <CustomText fontWeight={'700'} textAlign={'center'} onPress={goBack} testID={'btnBack'}>
        {t('go_back')}
      </CustomText>
      <CustomText fontWeight={'700'} textAlign={'center'}>
        {t('ResetPassword')}
      </CustomText>
    </CustomScreen>
  );
};

export default ResetPassword;
