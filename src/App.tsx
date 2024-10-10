import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {THEME} from './styles/theme';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './StackNavigator';
import {AuthenticationContextProvider} from './contexts/AuthenticationContext';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={THEME}>
        <NavigationContainer>
          <AuthenticationContextProvider>
            <StackNavigator />
          </AuthenticationContextProvider>
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
