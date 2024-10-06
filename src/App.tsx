import React from 'react';
import {LoginScreen} from './screens/LoginScreen';
import {ThemeProvider} from 'styled-components/native';
import {THEME} from './styles/theme';
import {StatusBar} from 'react-native';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={THEME}>
      <StatusBar translucent backgroundColor="transparent" />
      <LoginScreen />
    </ThemeProvider>
  );
}

export default App;
