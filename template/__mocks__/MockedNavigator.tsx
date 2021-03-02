import React, { ComponentType } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

type Props = {
  component: ComponentType<any>;
  params: {};
};
const MockedNavigator = ({ component, params = {} }: Props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MockedScreen" component={component} initialParams={params} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MockedNavigator;
