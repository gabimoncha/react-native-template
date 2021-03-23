import React from 'react';
import { storiesOf } from '@storybook/react-native';
import LanguageButton from './LanguageButton';
import { select } from '@storybook/addon-knobs';

storiesOf('Language button', module).add('example', () => (
  <LanguageButton language={select('language', ['en', 'ro'], 'en')} />
));
