import React, { useEffect } from 'react';
import { useNetInfo } from '@react-native-community/netinfo';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import CustomText from 'components/CustomText';
import CustomScreen from 'components/CustomScreen';
import WifiOff from 'assets/wifi-off.svg';

const NetworkError = () => {
  const { isConnected } = useNetInfo();
  const { goBack } = useNavigation();

  useEffect(() => {
    if (isConnected) {
      goBack();
    }
  }, [isConnected]);

  return (
    <CustomScreen justifyContent={'space-around'}>
      <BodyContainer>
        <WifiOff />
        <CustomText fontWeight={'700'} textAlign={'center'} mt={60} mb={20}>
          No internet connection
        </CustomText>
        <CustomText fontWeight={'500'} textAlign={'center'}>
          Please check your internet connection settings and try again.
        </CustomText>
      </BodyContainer>
    </CustomScreen>
  );
};

const BodyContainer = styled.View`
  flex: 1;
  max-width: 294px;
  align-items: center;
  justify-content: center;
`;

export default NetworkError;
