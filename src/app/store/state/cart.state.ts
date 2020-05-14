import { Cart } from 'shared/models/cart';
import { ICart } from 'shared/interfaces/icart';


export interface CartState {
    cart: Cart;
    loading: boolean;
    loaded: boolean;
    error: boolean;
  }

export const initialCartState: CartState = {
    cart: null,
    loading: false,
    loaded: false,
    error: false
  };