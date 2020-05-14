import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { AppState } from '../state/app.state';
import { productReducer } from '../reducers/product.reducer';
import { cartReducer } from './cart.reducer';


export const reducers: ActionReducerMap<AppState> = {
  products: productReducer,
  cart: cartReducer
};


export const metaReducers: MetaReducer<AppState>[] = [];
