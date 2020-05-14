import { IProduct } from 'shared/interfaces/iproduct';
import { ProductService } from 'shared/services/product.service';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects'
import { Observable, of, from } from 'rxjs';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators'

import * as CartActions from '../actions/cart.actions'
import { Injectable } from '@angular/core';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { ICart } from 'shared/interfaces/icart';
import { Cart } from 'shared/models/cart';

@Injectable()
export class CartEffect {
    constructor(
        private actions$: Actions,
        private cartService: ShoppingCartService
    ) {}

    // @Effect()
    // loadCart$: Observable<Action> = this.actions$.pipe(
    //     ofType<CartActions.LoadCart>(CartActions.CartActionTypes.LOAD_CART),
    //     mergeMap(async (actions: CartActions.LoadCart) => 
    //         (await this.cartService.getCart()).pipe(
    //             map((cart: Cart) =>
    //                 new CartActions.LoadCartSuccess(cart)
    //             ),
    //             catchError(err => of(new CartActions.LoadCartFail(err)))
    //         )
    //     )
    // );

    // @Effect()
    // loadCart$: Observable<Action> = this.actions$.pipe(
    //     ofType<CartActions.LoadCart>(CartActions.CartActionTypes.LOAD_CART),
    //     mergeMap(async (actions: CartActions.LoadCart) => {
    //         let cart$ = await this.cartService.getCart();
    //         return cart$.pipe(
    //             map((cart: Cart) => {
    //                 new CartActions.LoadCartSuccess(cart)
    //             }),
    //             catchError(err => of(new CartActions.LoadCartFail(err)))
    //         )
    //     })
    // );

    // @Effect()
    // loadCart$: Observable<Action> = this.actions$.pipe(
    //     ofType<CartActions.LoadCart>(CartActions.CartActionTypes.LOAD_CART),
    //     mergeMap(async (actions: CartActions.LoadCart) => 
    //         (await this.cartService.getCart()).pipe(
    //             map((cart: Cart) =>
    //                 new CartActions.LoadCartSuccess(cart)
    //             ),
    //             catchError(err => of(new CartActions.LoadCartFail(err)))
    //         )
    //     )
    // );

    // @Effect()
    // loadCar$: Observable<Action> = this.actions$.pipe(
    //     ofType<CartActions.LoadCart>(CartActions.CartActionTypes.LOAD_CART),
    //     mergeMap(async (actions: CartActions.LoadCart) => 
    //         (await this.cartService.getCart()).pipe(
    //             map((cart: Cart) =>
    //                 new CartActions.LoadCartSuccess(cart)
    //             ),
    //             catchError(err => of(new CartActions.LoadCartFail(err)))
    //         )
    //     )
    // );

}