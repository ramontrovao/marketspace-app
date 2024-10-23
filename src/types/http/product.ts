import {TProduct} from '../product';

export namespace CreateProductService {
  export type Params = {
    name: string;
    description: string;
    is_new: boolean;
    price: number;
    accept_trade: boolean;
    payment_methods: string[];
  };

  export type Result = TProduct;
}
