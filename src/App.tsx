import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {THEME} from './styles/theme';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './StackNavigator';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={THEME}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
