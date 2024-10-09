import React, {createContext, ReactNode, useContext, useState} from 'react';

type TAuthenticationContextValues = {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
};

const AuthenticationContext = createContext({} as TAuthenticationContextValues);

export function AuthenticationContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function login() {
    setIsAuthenticated(true);
  }

  function logout() {
    setIsAuthenticated(false);
  }

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
      }}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export const useAuthentication = () => useContext(AuthenticationContext);
