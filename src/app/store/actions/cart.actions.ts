import { Action, createAction, props } from '@ngrx/store'
import { ICart } from 'shared/interfaces/icart';
import { Cart } from 'shared/models/cart';

export enum CartActionTypes {
    LOAD_CART           = "[CART] Load CART ",
    LOAD_CART_SUCCESS   = "[CART] Load CART Success",
    LOAD_CART_FAIL      = "[CART] Load CART Fail",
}

export class LoadCart implements Action {
    readonly type = CartActionTypes.LOAD_CART;
}

export class LoadCartSuccess implements Action {
    readonly type = CartActionTypes.LOAD_CART_SUCCESS;

    constructor(public payload: Cart) {}
}

export class LoadCartFail implements Action {
    readonly type = CartActionTypes.LOAD_CART_FAIL;

    constructor(public payload: any) {}
}


export type Actions = 
    LoadCart | 
    LoadCartSuccess | 
    LoadCartFail;