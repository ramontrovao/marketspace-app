import {
  LOGIN_ROUTE,
  REFRESH_TOKEN_ROUTE,
  REGISTER_ROUTE,
} from '../../constants/http/paths';
import {api} from '../../lib/axios';
import {
  LoginService,
  RefreshTokenService,
  RegisterService,
} from '../../types/http/authentication';

export async function login(params: LoginService.Params) {
  try {
    const result = await api.post<LoginService.Result>(LOGIN_ROUTE, params);

    return result;
  } catch (error) {
    throw error;
  }
}

export async function register(params: RegisterService.Params) {
  try {
    const result = await api.post<RegisterService.Result>(
      REGISTER_ROUTE,
      params,
      {headers: {'Content-Type': 'multipart/form-data'}},
    );

    return result;
  } catch (error) {
    throw error;
  }
}

export async function refreshToken() {
  try {
    const result = await api.post<RefreshTokenService.Result>(
      REFRESH_TOKEN_ROUTE,
    );

    return result;
  } catch (error) {
    throw error;
  }
}
