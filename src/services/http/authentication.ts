import {LOGIN_ROUTE} from '../../constants/http/paths';
import {api} from '../../lib/axios';
import {LoginService} from '../../types/http/authentication';

export async function login(params: LoginService.Params) {
  const data = await api.post<LoginService.Result>(LOGIN_ROUTE, params);

  return data;
}
