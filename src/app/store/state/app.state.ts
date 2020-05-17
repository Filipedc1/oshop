import { UserState, initialUserState } from './user.state';
import { ProductState, initialProductState } from './product.state';
import { OrderState, initialOrderState } from './order.state';
import { CartState, initialCartState } from './cart.state';


export interface AppState {
  currentUser: UserState;
  products: ProductState;
  //order: OrderState;
   cart: CartState;
}

export const initialAppState : AppState = {
  currentUser: initialUserState,
  products: initialProductState,
  //order: initialOrderState,
  cart: initialCartState
}

export function getInitialState() : AppState {
  return initialAppState;
}