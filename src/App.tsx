import React from 'react';
import {LoginScreen} from './screens/LoginScreen';
import {ThemeProvider} from 'styled-components/native';
import {THEME} from './styles/theme';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={THEME}>
      <LoginScreen />
    </ThemeProvider>
  );
}

export default App;
