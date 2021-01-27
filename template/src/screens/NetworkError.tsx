import React from 'react';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomText from 'components/CustomText';
import WifiOff from 'assets/wifi-off.svg';

const NetworkError = () => (
  <Container>
    <BodyContainer>
      <WifiOff />
      <CustomText fontWeight={'700'} textAlign={'center'} mt={60} mb={20}>
        No internet connection
      </CustomText>
      <CustomText fontWeight={'500'} textAlign={'center'}>
        Please check your internet connection settings and try again.
      </CustomText>
    </BodyContainer>
  </Container>
);

const BodyContainer = styled.View`
  flex: 1;
  max-width: 294px;
  align-items: center;
  justify-content: center;
`;

const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: space-around;
  align-items: center;
`;

export default NetworkError;
