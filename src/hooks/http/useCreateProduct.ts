import {useMutation, UseMutationOptions} from '@tanstack/react-query';
import {AxiosError, AxiosResponse} from 'axios';
import {AppError} from '../../services/http/appError';
import {createProduct as createProductService} from '../../services/http/product';
import {CreateProductService} from '../../types/http/product';

export const useCreateProduct = (
  options?: UseMutationOptions<
    AxiosResponse<CreateProductService.Result, any>,
    AxiosError | AppError,
    CreateProductService.Params,
    unknown
  >,
) => {
  const {mutateAsync: createProduct, ...rest} = useMutation({
    mutationFn: createProductService,
    ...options,
  });

  return {
    createProduct,
    ...rest,
  };
};
