import React, { useCallback } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { FileLogger } from 'react-native-file-logger';
import CustomText from 'components/CustomText';
import Smile from 'assets/smile.svg';
import { LanguageButton } from 'components/LanguageButton';
import Counter from 'components/Counter';
import { useTranslation } from 'react-i18next';
import * as CrispChatSdk from 'react-native-crisp-chat-sdk';
import CustomScreen from 'components/CustomScreen';
import useStore from '@auth/store';

const Home = () => {
  const { t } = useTranslation();

  const setToken = useStore(({ setToken }) => setToken);

  React.useEffect(() => {
    CrispChatSdk.setUserEmail('your_email@example.com');
  }, []);

  const sendLoggedFiles = useCallback(() => {
    FileLogger.sendLogFilesByEmail({
      to: '<your_email@example.com>',
      subject: 'App logs',
      body: 'Attached logs',
    })
      .then(() => {
        setTimeout(() => {
          FileLogger.deleteLogFiles();
        }, 5000);
      })
      .catch((err) => {
        if ('message' in err) {
          FileLogger.error(err.message);
        } else {
          FileLogger.error(JSON.stringify(err));
        }
      });
  }, []);

  return (
    <CustomScreen justifyContent={'space-evenly'} testID={'HomeScreen'}>
      <Counter />
      <View>
        <LanguageButton language={'en'} />
        <LanguageButton language={'ro'} />
      </View>
      <CustomText fontWeight={'700'} textAlign={'center'} mt={60} mb={20}>
        {t('hello')}
      </CustomText>
      <CustomText fontWeight={'700'} textAlign={'center'} onPress={CrispChatSdk.show} my={20} testID={'btnCrispChat'}>
        {t('chat')}
      </CustomText>
      <CustomText fontWeight={'700'} textAlign={'center'} onPress={sendLoggedFiles} my={20} testID={'btnLogs'}>
        {t('sendLogs')}
      </CustomText>
      <CustomText
        fontWeight={'700'}
        textAlign={'center'}
        onPress={() => {
          setToken('');
        }}
        my={20}
        testID={'btnLogout'}>
        {t('logout')}
      </CustomText>
      <Smile />
    </CustomScreen>
  );
};

const Button = styled.TouchableOpacity`
  margin: 20px;
  height: 48px;
  justify-content: space-evenly;
`;

Home.whyDidYouRender = true;

export default Home;
