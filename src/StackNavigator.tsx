import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TStackParamList} from './types/navigation';
import {LoginScreen} from './screens/LoginScreen';
import {RegisterScreen} from './screens/RegisterScreen';
import {TabNavigator} from './TabNavigator';
import {useAuthentication} from './contexts/AuthenticationContext';
import {CreateProductScreen} from './screens/CreateProductScreen';

const Stack = createNativeStackNavigator<TStackParamList>();

export function StackNavigator() {
  const {isAuthenticated} = useAuthentication();

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      {!isAuthenticated && (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </>
      )}

      {isAuthenticated && (
        <>
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
          <Stack.Screen name="CreateProduct" component={CreateProductScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}
