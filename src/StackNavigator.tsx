import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TStackParamList} from './types/navigation';
import {LoginScreen} from './screens/LoginScreen';
import {RegisterScreen} from './screens/RegisterScreen';
import {TabNavigator} from './TabNavigator';

const Stack = createNativeStackNavigator<TStackParamList>();

export function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
    </Stack.Navigator>
  );
}
