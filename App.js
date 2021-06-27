import 'react-native-gesture-handler';
import React from 'react';
import { View,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import onBoardingScreen from './screens/onBoardingScreen';
import AccountCreationScreen from './screens/AccountCreationScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='onBoardingScreen' headerMode='none'>
        <Stack.Screen name='onBoardingScreen' component={onBoardingScreen} />
        <Stack.Screen name='AccountCreationScreen' component={AccountCreationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}