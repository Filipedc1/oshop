import * as ProductActions from '../actions/product.actions'
import { ProductState, initialProductState } from '../state/product.state';


export function productReducer(state = initialProductState, action: ProductActions.Actions) : ProductState
{
    switch(action.type) {
        case ProductActions.ProductActionTypes.LOAD_PRODUCTS: {
            return { ...state, loading: true };
        }
        case ProductActions.ProductActionTypes.LOAD_PRODUCTS_SUCCESS: {
            return { ...state, products: action.payload, loaded: true, loading: false};
        }
        case ProductActions.ProductActionTypes.LOAD_PRODUCTS_FAIL: {
            return { ...state, loading: false, loaded: false };
        }
        // case PizzaActions.PizzaActionTypes.ADD_PIZZA: {
        //     return { ...state, pizza: action.payload, loading: true };
        // }
        // case PizzaActions.PizzaActionTypes.ADD_PIZZA_SUCCESS: {
        //     return { ...state, pizza: action.payload, loaded: true, loading: false };
        // }
        // case PizzaActions.PizzaActionTypes.ADD_PIZZA_FAIL: {
        //     return { ...state, loading: false, loaded: false };
        // }
        default:
            return state;
    }
}