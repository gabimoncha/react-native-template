import React, { useState } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import CustomText from 'components/CustomText';
import { useTranslation } from 'react-i18next';

const MemoizedComponent = React.memo(() => <View />);
const RerenderedComponent = () => <View />;

MemoizedComponent.whyDidYouRender = true;
RerenderedComponent.whyDidYouRender = true;

const Counter = () => {
  const [counter, setCounter] = useState<number>(0);
  const { t } = useTranslation();

  return (
    <Container>
      <MemoizedComponent />
      <RerenderedComponent />
      <CustomText fontWeight={'700'} textAlign={'center'}>
        {counter}
      </CustomText>
      <Button onPress={() => setCounter(counter + 1)}>
        <CustomText fontWeight={'700'} textAlign={'center'}>
          {t('increment')}
        </CustomText>
      </Button>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Button = styled.TouchableOpacity`
  margin: 20px;
  height: 48px;
  justify-content: space-evenly;
`;

export default Counter;
