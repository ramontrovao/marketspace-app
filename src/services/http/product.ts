import {PRODUCTS_ROUTE} from '../../constants/http/paths';
import {CreateProductService} from '../../types/http/product';
import {api} from '../../lib/axios';

export async function createProduct(params: CreateProductService.Params) {
  try {
    const result = await api.post<CreateProductService.Result>(
      PRODUCTS_ROUTE,
      params,
    );

    return result;
  } catch (error) {
    throw error;
  }
}
