import React from 'react';
import {LoginScreen} from './screens/LoginScreen';
import {ThemeProvider} from 'styled-components/native';
import {THEME} from './styles/theme';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RegisterScreen} from './screens/RegisterScreen';
import {TStackParamList} from './types/navigation';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator<TStackParamList>();

  return (
    <ThemeProvider theme={THEME}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
