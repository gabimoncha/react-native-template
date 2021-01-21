import React from 'react';
import styled from 'styled-components/native';
import { useTranslation } from 'react-i18next';
import CustomText from './CustomText';

const LanguageButton: React.FC<{ language: 'en' | 'ro' }> = ({ language }) => {
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
  padding: 12px 8px;
  border-radius: 4px;
  height: 24px;
  justify-content: center;
  align-items: center;
`;

export default LanguageButton;
