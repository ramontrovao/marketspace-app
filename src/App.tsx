import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {THEME} from './styles/theme';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './StackNavigator';
import {AuthenticationContextProvider} from './contexts/AuthenticationContext';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={THEME}>
      <NavigationContainer>
        <AuthenticationContextProvider>
          <StackNavigator />
        </AuthenticationContextProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
