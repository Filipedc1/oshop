import { IProduct } from 'shared/interfaces/iproduct';
import { Action, createAction, props } from '@ngrx/store'

export enum ProductActionTypes {
    LOAD_PRODUCTS          = "[PRODUCT] Load Products",
    LOAD_PRODUCTS_SUCCESS   = "[PRODUCT] Load Products Success",
    LOAD_PRODUCTS_FAIL      = "[PRODUCT] Load Products Fail",
    // ADD_PIZZA             = "[PIZZA] Add Pizza",
    // ADD_PIZZA_SUCCESS     = "[PIZZA] Add Pizza Success",
    // ADD_PIZZA_FAIL        = "[PIZZA] Add Pizza Fail",
    REMOVE_PRODUCT          = "[PRODUCT] Remove Product",
    REMOVE_PRODUCT_SUCCESS  = "[PRODUCT] Remove Product Success",
    REMOVE_PRODUCT_FAIL     = "[PRODUCT] Remove Product Fail"
}

export class LoadProducts implements Action {
    readonly type = ProductActionTypes.LOAD_PRODUCTS;
}

export class LoadProductsSuccess implements Action {
    readonly type = ProductActionTypes.LOAD_PRODUCTS_SUCCESS;

    constructor(public payload: IProduct[]) {}
}

export class LoadProductsFail implements Action {
    readonly type = ProductActionTypes.LOAD_PRODUCTS_FAIL;

    constructor(public payload: any) {}
}


export type Actions = 
    LoadProducts | 
    LoadProductsSuccess | 
    LoadProductsFail;