import React, {createContext, ReactNode, useContext, useState} from 'react';
import {useLogin} from '../hooks/http/useLogin';
import {LoginService, RegisterService} from '../types/http/authentication';
import {AxiosError} from 'axios';
import {AppError} from '../services/http/appError';
import {useRegister} from '../hooks/http/useRegister';

type TAuthenticationContextValues = {
  isAuthenticated: boolean;
  isLogging: boolean;
  loginError?: AxiosError | AppError | null;
  login: (params: LoginService.Params) => Promise<void>;
  register: (params: RegisterService.Params) => Promise<void>;
  registerError?: AxiosError | AppError | null;
  isRegistering: boolean;
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
    register: registerMutation,
    isPending: isRegistering,
    error: registerError,
  } = useRegister();

  const {
    login: loginMutation,
    isPending: isLogging,
    error: loginError,
  } = useLogin();

  async function login(params: LoginService.Params) {
    // TODO: integrate JWT with MMKV
    const result = await loginMutation(params);

    setIsAuthenticated(true);
  }

  async function register(params: RegisterService.Params) {
    // TODO: integrate JWT with MMKV
    const result = await registerMutation(params);

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
        register,
        registerError,
        isRegistering,
      }}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export const useAuthentication = () => useContext(AuthenticationContext);
