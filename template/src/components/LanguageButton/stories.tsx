import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { select } from '@storybook/addon-knobs';
import LanguageButton from './LanguageButton';

storiesOf('Language button', module).add('example', () => (
  <LanguageButton language={select('language', ['en', 'ro'], 'en')} />
));
