import React from 'react';
import { log } from 'utils/console';
import 'localization';
import Router from 'navigation/Router';
import { FileLogger } from 'react-native-file-logger';
import { SENTRY_DSN, ENV } from '@env';
import * as Sentry from '@sentry/react-native';
import codePush, { CodePushOptions } from 'react-native-code-push';
import useNotifications from 'hooks/useNotifications';
import useAppState from 'react-native-appstate-hook';

FileLogger.configure({
  maximumFileSize: 1024 * 1024 * 5, // 5MB,
  maximumNumberOfFiles: 3,
});

log({ ENV, SENTRY_DSN });

if (typeof SENTRY_DSN === 'string' && SENTRY_DSN.length > 0) {
  Sentry.init({
    dsn: SENTRY_DSN,
  });
}

const App = () => {
  useNotifications();

  useAppState({
    onChange: (newAppState) => console.log('useAppState ===> state changed to ', newAppState),
    onForeground: () => console.log('useAppState ===> app went to Foreground'),
    onBackground: () => console.log('useAppState ===> app went to background'),
  });

  return <Router />;
};

let codePushOptions: CodePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
};

export default codePush(codePushOptions)(App);
