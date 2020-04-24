import { IProduct } from './interfaces/iproduct';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICart } from './interfaces/icart';
import * as moment from 'moment';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private _baseUrl = 'https://localhost:44356/api/shoppingcart';

  constructor(private _http: HttpClient) { }

  private create() {
    var cart = {
      shoppingcartid: 0,
      dateCreated: moment().format('LLL')
    };

    return this._http.post(this._baseUrl, cart);
  }

  public async getCart() {
    let cartId = await this.getOrCreateCartId();
    return this._http.get<ICart>(`${this._baseUrl}/${cartId}`);
  }

  private async getOrCreateCartId() : Promise<string> {
    let cartId = localStorage.getItem('cartId');
    if (cartId) return cartId;

    console.log('try to create cart');
    let result = await this.create().toPromise();
    localStorage.setItem('cartId', result['cartId']);
    
    return result['cartId'];
  }

  public async addToCart(product: IProduct) {
    let cartId = await this.getOrCreateCartId();
    let item$ = this.getProductFromCart(cartId, product.productId);

    item$.pipe(take(1)).subscribe(async item => {
      if (item) 
        await this.updateProductQuantity(cartId, product).toPromise();
      else 
        await this.addItemToCart(product, cartId).toPromise();
    });
  }

  private addItemToCart(product: IProduct, cartId) {
    console.log('ADD ITEM');

    var item = {
      productId: product.productId,
      quantity: 1,
      shoppingCartId: cartId
    };

    return this._http.post(`${this._baseUrl}/additemtocart/${cartId}`, item);
  }

  private updateProductQuantity(cartId, product: IProduct) {
    console.log('UPDATE ITEM');

    var item = {
      productId: product.productId,
      shoppingCartId: cartId
    };

    return this._http.put(`${this._baseUrl}/updateitemquantity`, item);
  }

  private getProductFromCart(cartId: string, productId: number) {
    return this._http.get(`${this._baseUrl}/getitemfromcart/${cartId}/${productId}`);
  }
}
