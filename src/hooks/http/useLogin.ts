import {useMutation, UseMutationOptions} from '@tanstack/react-query';
import {LoginService} from '../../types/http/authentication';
import {login as loginService} from '../../services/http/authentication';
import {AxiosError, AxiosResponse} from 'axios';

export const useLogin = (
  options?: UseMutationOptions<
    AxiosResponse<LoginService.Result, any>,
    AxiosError,
    LoginService.Params,
    unknown
  >,
) => {
  const {mutateAsync: login, ...rest} = useMutation({
    mutationFn: loginService,
    ...options,
  });

  return {
    login,
    ...rest,
  };
};
