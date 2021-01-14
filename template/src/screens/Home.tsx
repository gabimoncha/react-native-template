import React from 'react';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomText from 'components/CustomText';
import Smile from 'assets/smile.svg';

const NetworkError: React.FC = () => (
  <Container>
    <CustomText fontWeight={'700'} textAlign={'center'} mt={60} mb={20}>
      Hello React Native World!
    </CustomText>
    <Smile />
  </Container>
);

const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
`;

export default NetworkError;
