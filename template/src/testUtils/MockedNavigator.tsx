import React, { ComponentType } from 'react';
import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { WHITE } from 'utils/colors';

const Stack = createStackNavigator();

type Props = {
  componentName?: string;
  component?: ComponentType<any>;
  secondComponentName?: string;
  secondComponent?: ComponentType<any>;
  params?: object;
  secondParams?: object;
};

const screenOptions: StackNavigationOptions = {
  cardStyle: { backgroundColor: WHITE },
  headerShown: false,
  animationEnabled: false,
};

const MockedNavigator = ({
  componentName = 'MockedComponent',
  component = () => <View />,
  secondComponentName = 'MockedSecondComponent',
  secondComponent = () => <View />,
  params = {},
  secondParams = {},
}: Props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name={componentName} component={component} initialParams={params} />
        <Stack.Screen name={secondComponentName} component={secondComponent} initialParams={secondParams} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MockedNavigator;
