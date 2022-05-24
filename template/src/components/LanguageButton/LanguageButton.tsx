import React from 'react';
import styled from 'styled-components/native';
import { useTranslation } from 'react-i18next';
import CustomText from '../CustomText';

type Props = {
  language: 'en' | 'ro';
};

const LanguageButton = ({ language }: Props) => {
  const { t, i18n } = useTranslation('languages');

  const onPress = () => {
    i18n.changeLanguage(language);
  };

  return (
    <Container onPress={onPress}>
      <CustomText fontSize={16}>{t(language)}</CustomText>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  margin: 8px 4px;
  padding: 8px;
  border-radius: 4px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

export default LanguageButton;
