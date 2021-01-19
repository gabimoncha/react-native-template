import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { LinkingOptions, NavigationContainer } from '@react-navigation/native';
import { getTimeSinceStartup } from 'react-native-startup-time';
import { useNetInfo } from '@react-native-community/netinfo';
import {
  getCurrentRoute,
  goBack,
  navigate,
  navigationRef,
  useNavigationMounting,
} from 'navigation/RootNavigation';
import { log } from 'utils/console';
import Router from 'navigation/Router';
import { enableScreens } from 'react-native-screens';
import { SENTRY_DSN, ENV } from '@env';
import * as Sentry from '@sentry/react-native';
import codePush, { CodePushOptions } from 'react-native-code-push';

enableScreens();

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
  useEffect(() => {
    getTimeSinceStartup().then((time) => {
      log({ startuptime: time });
    });
  }, []);

  useNavigationMounting();

  const { isConnected } = useNetInfo();

  useEffect(() => {
    const route = getCurrentRoute();
    console.log({ route, isConnected });
    if (!isConnected && route) {
      navigate('NetworkError');
    } else if (route && route.name === 'NetworkError') {
      goBack();
    }
  }, [isConnected]);

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
