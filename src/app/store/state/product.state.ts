import { IProduct } from 'shared/interfaces/iproduct';


export interface ProductState {
    products: IProduct[];
    loading: boolean;
    loaded: boolean;
    error: boolean;
  }

export const initialProductState: ProductState = {
    products: [],
    loading: false,
    loaded: false,
    error: false
  };