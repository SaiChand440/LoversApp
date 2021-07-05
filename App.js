import 'react-native-gesture-handler';
import React from 'react';
import { View,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import onBoardingScreen from './screens/onBoardingScreen';
import AccountCreationScreen from './screens/AccountCreationScreen';
import BankCreationScreen from './screens/BankCreationScreen';
import { Provider as PaperProvider } from 'react-native-paper';
import MyDetailsCreationScreen from './screens/MyDetailsCreationScreen';
import MyPartnerDetailsCreationScreen from './screens/MyPartnerDetailsCreationScreen';
import AdditionalCurrencyCreationScreen from './screens/AdditionalCurrencyCreationScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Stack.Navigator initialRouteName='BankCreationScreen' headerMode='none'>
          <Stack.Screen name='onBoardingScreen' component={onBoardingScreen} />
          <Stack.Screen name='AccountCreationScreen' component={AccountCreationScreen} />
          <Stack.Screen name='BankCreationScreen' component={BankCreationScreen} />
          <Stack.Screen name='MyDetailsCreationScreen' component={MyDetailsCreationScreen} />
          <Stack.Screen name='MyPartnerDetailsCreationScreen' component={MyPartnerDetailsCreationScreen} />
          <Stack.Screen name='AdditionalCurrencyCreationScreen' component={AdditionalCurrencyCreationScreen} />
        </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}