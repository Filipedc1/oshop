import { IProduct } from 'shared/interfaces/iproduct';
import { ProductService } from 'shared/services/product.service';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects'
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators'

import * as ProductActions from '../actions/product.actions'
import { Injectable } from '@angular/core';

@Injectable()
export class ProductEffect {
    constructor(
        private actions$: Actions,
        private productService: ProductService
    ) {}

    @Effect()
    loadProducts$: Observable<Action> = this.actions$.pipe(
        ofType<ProductActions.LoadProducts>(ProductActions.ProductActionTypes.LOAD_PRODUCTS),
        mergeMap((actions: ProductActions.LoadProducts) => 
            this.productService.getAll().pipe(
                map((products: IProduct[]) =>
                    new ProductActions.LoadProductsSuccess(products)
                ),
                catchError(err => of(new ProductActions.LoadProductsFail(err)))
            )
        )
    );
}