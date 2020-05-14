import { Order } from 'shared/models/order';


export interface OrderState {
    order: Order;
    total: number;
    placed: Date;
    loading: boolean;
    loaded: boolean;
    error: boolean;
  }

export const initialOrderState: OrderState = {
    order: null,
    total: 0,
    placed: null,
    loading: false,
    loaded: false,
    error: false
  };