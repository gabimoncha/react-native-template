import React from 'react';
import { LinkingOptions, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { navigationRef } from 'navigation/RootNavigation';
import { WHITE } from 'utils/colors';
import { authScreens, AuthStackParamList } from '@auth/screens';
import { commonScreens, CommonStackParamList, userScreens, UserStackParamList } from 'screens';
import useStore from '@auth/store';

const screenOptions = {
  cardStyle: { backgroundColor: WHITE },
  headerShown: false,
};

type ParamList = CommonStackParamList & UserStackParamList & AuthStackParamList;
export const Stack = createStackNavigator<ParamList>();

const linking: LinkingOptions = {
  prefixes: ['reactnativetemplate://'],
  config: {
    screens: {},
  },
};

export default function Router() {
  const isLoggedIn = useStore((state) => !!state.token);

  return (
    <NavigationContainer linking={linking} ref={navigationRef}>
      <SafeAreaProvider>
        <Stack.Navigator screenOptions={screenOptions}>
          {Object.entries({
            // Use some screens conditionally based on some condition
            ...(isLoggedIn ? userScreens : authScreens),
            // Use the screens normally
            ...commonScreens,
          }).map(([name, props]) => {
            return <Stack.Screen key={name} name={name as keyof ParamList} {...props} />;
          })}
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
