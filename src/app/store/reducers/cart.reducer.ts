import * as CartActions from '../actions/cart.actions'
import { CartState, initialCartState } from '../state/cart.state';


export function cartReducer(state = initialCartState, action: CartActions.Actions) : CartState
{
    switch(action.type) {
        case CartActions.CartActionTypes.LOAD_CART: {
            return { ...state, loading: true };
        }
        case CartActions.CartActionTypes.LOAD_CART_SUCCESS: {
            return { ...state, cart: action.payload, loaded: true, loading: false};
        }
        case CartActions.CartActionTypes.LOAD_CART_FAIL: {
            return { ...state, loading: false, loaded: false, error: true };
        }
        default:
            return state;
    }
}