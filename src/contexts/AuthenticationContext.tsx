import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import {useLogin} from '../hooks/http/useLogin';
import {LoginService} from '../types/http/authentication';
import {AxiosError} from 'axios';
import {AppError} from '../services/http/appError';
import {useRegister} from '../hooks/http/useRegister';
import {storageService} from '../services/storage/storageService';

interface RegisterProps {
  avatar: {
    uri?: string;
    type?: string;
    name?: string;
  };
  name: string;
  email: string;
  tel: string;
  password: string;
}

type TAuthenticationContextValues = {
  isAuthenticated: boolean;
  isLogging: boolean;
  loginError?: AxiosError | AppError | null;
  login: (params: LoginService.Params) => Promise<void>;
  register: (params: RegisterProps) => Promise<void>;
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

  const token = storageService.getItem('token');

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
    const {
      data: {token, ...rest},
    } = await loginMutation(params);

    storageService.setItem('token', token);
    storageService.setItem('refresh_token', rest['refresh-token']);

    setIsAuthenticated(true);
  }

  async function register({avatar, name, email, tel, password}: RegisterProps) {
    const formData = new FormData();
    formData.append('avatar', avatar);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('tel', tel);
    formData.append('password', password);

    await registerMutation(formData);
    await login({email, password});
  }

  function logout() {
    setIsAuthenticated(false);
  }

  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
    }
  }, [token]);

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
