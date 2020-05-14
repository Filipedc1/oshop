import { AppState } from '../state/app.state';

export const selectCart = (state: AppState) => state.cart.cart;