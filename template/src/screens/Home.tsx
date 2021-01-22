import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomText from 'components/CustomText';
import Smile from 'assets/smile.svg';
import LanguageButton from 'components/LanguageButton';

const Home: React.FC = () => (
  <Container>
    <View>
      <LanguageButton language={'en'} />
      <LanguageButton language={'ro'} />
    </View>
    <CustomText fontWeight={'700'} textAlign={'center'} mt={60} mb={20}>
      Hello React Native World!
    </CustomText>
    <Smile />
  </Container>
);

const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: space-evenly;
  align-items: center;
`;

export default Home;
