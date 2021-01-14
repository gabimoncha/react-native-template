import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNetInfo } from '@react-native-community/netinfo';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { WHITE } from 'utils/colors';
import Home from 'screens/Home';
import CustomWebView from 'screens/CustomWebView';
import NetworkError from 'screens/NetworkError';

export type RootStackParamList = {
  Home: undefined;
  RootWebView: { url: string; title: string };
  NetworkError: undefined;
};

const screenOptions = {
  cardStyle: { backgroundColor: WHITE },
  headerShown: false,
};

const gestureDisabled = { gestureEnabled: false };

export const Stack = createStackNavigator<RootStackParamList>();

export default function Router() {
  return (
    <SafeAreaProvider>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="RootWebView" component={CustomWebView} />
        <Stack.Screen
          name="NetworkError"
          component={NetworkError}
          options={gestureDisabled}
        />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
}
