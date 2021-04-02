import React from 'react';
import { useNavigationMounting } from 'navigation/RootNavigation';
import { log } from 'utils/console';
import 'localization';
import Router from 'navigation/Router';
import { enableScreens } from 'react-native-screens';
import { FileLogger } from 'react-native-file-logger';
import { SENTRY_DSN, ENV } from '@env';
import * as Sentry from '@sentry/react-native';
import codePush, { CodePushOptions } from 'react-native-code-push';
import useNetworkError from 'hooks/useNetworkError';
import useStartupTime from 'hooks/useStartupTime';
import useNotifications from 'hooks/useNotifications';
import useAppState from 'react-native-appstate-hook';

enableScreens();

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

  useNavigationMounting();

  useStartupTime();

  useNetworkError();

  useAppState({
    onChange: (newAppState) => console.warn('App state changed to ', newAppState),
    onForeground: () => console.warn('App went to Foreground'),
    onBackground: () => console.warn('App went to background'),
  });

  return <Router />;
};

let codePushOptions: CodePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
};

export default codePush(codePushOptions)(App);
