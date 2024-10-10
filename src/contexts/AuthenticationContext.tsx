import React, {createContext, ReactNode, useContext, useState} from 'react';
import {useLogin} from '../hooks/http/useLogin';
import {LoginService} from '../types/http/authentication';
import {AxiosError} from 'axios';
import {AppError} from '../services/http/appError';

type TAuthenticationContextValues = {
  isAuthenticated: boolean;
  isLogging: boolean;
  loginError?: AxiosError | AppError | null;
  login: (params: LoginService.Params) => Promise<void>;
  logout: () => void;
};

const AuthenticationContext = createContext({} as TAuthenticationContextValues);

export function AuthenticationContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const {
    login: loginMutation,
    isPending: isLogging,
    error: loginError,
  } = useLogin();

  async function login(params: LoginService.Params) {
    // TODO: integrate JWT with MMKV
    const result = await loginMutation(params);

    console.log(result);

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
        isLogging,
        loginError,
      }}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export const useAuthentication = () => useContext(AuthenticationContext);
