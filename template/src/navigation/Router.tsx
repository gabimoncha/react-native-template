import React from 'react';
import { LinkingOptions, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { onNavigationReady, navigationRef, useNavigationUnmounting } from 'navigation/methods';
import { WHITE } from 'utils/colors';
import { authScreens } from '@auth/screens';
import { commonScreens, userScreens } from 'screens';
import useStore from '@auth/store';
import { RootStackParamList } from './types';

const screenOptions = {
  cardStyle: { backgroundColor: WHITE },
  headerShown: false,
};

export const Stack = createStackNavigator<RootStackParamList>();

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ['helloworld://'],
  config: {
    screens: {},
  },
};

export default function Router() {
  const isLoggedIn = useStore((state) => !!state.token);

  useNavigationUnmounting();

  return (
    <NavigationContainer linking={linking} ref={navigationRef} onReady={onNavigationReady}>
      <SafeAreaProvider>
        <Stack.Navigator screenOptions={screenOptions}>
          {Object.entries({
            // Use some screens conditionally based on some condition
            ...(isLoggedIn ? userScreens : authScreens),
            // Use the screens normally
            ...commonScreens,
          }).map(([name, props]) => {
            return <Stack.Screen key={name} name={name as keyof RootStackParamList} {...props} />;
          })}
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
