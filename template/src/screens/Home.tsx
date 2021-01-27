import React, { useCallback } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { FileLogger } from 'react-native-file-logger';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomText from 'components/CustomText';
import Smile from 'assets/smile.svg';
import LanguageButton from 'components/LanguageButton';

const Home = () => {
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
    <Container>
      <View>
        <LanguageButton language={'en'} />
        <LanguageButton language={'ro'} />
      </View>
      <CustomText fontWeight={'700'} textAlign={'center'} mt={60} mb={20}>
        Hello React Native World!
      </CustomText>
      <Button onPress={sendLoggedFiles}>
        <CustomText fontWeight={'700'} textAlign={'center'}>
          Send logged files!
        </CustomText>
      </Button>
      <Smile />
    </Container>
  );
};

const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
`;

const Button = styled.TouchableOpacity`
  margin: 20px;
  height: 48px;
  width: 200px;
`;

export default Home;
