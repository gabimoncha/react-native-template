import React from 'react';
import { StatusBar } from 'react-native';
import { LinkingOptions, NavigationContainer } from '@react-navigation/native';
import { navigationRef, useNavigationMounting } from 'navigation/RootNavigation';
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

const linking: LinkingOptions = {
  prefixes: ['reactnativetemplate://'],
  config: {
    screens: {},
  },
};

const App = () => {
  useNotifications();

  useNavigationMounting();

  useStartupTime();

  useNetworkError();

  return (
    <NavigationContainer linking={linking} ref={navigationRef}>
      <StatusBar barStyle="dark-content" />
      <Router />
    </NavigationContainer>
  );
};

let codePushOptions: CodePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
};

export default codePush(codePushOptions)(App);
