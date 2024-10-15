import {useMutation, UseMutationOptions} from '@tanstack/react-query';
import {register as registerService} from '../../services/http/authentication';
import {AxiosError, AxiosResponse} from 'axios';
import {AppError} from '../../services/http/appError';
import {RegisterService} from '../../types/http/authentication';

export const useRegister = (
  options?: UseMutationOptions<
    AxiosResponse<RegisterService.Result, any>,
    AxiosError | AppError,
    RegisterService.Params,
    unknown
  >,
) => {
  const {mutateAsync: register, ...rest} = useMutation({
    mutationFn: registerService,
    ...options,
  });

  return {
    register,
    ...rest,
  };
};
