import { ICartItem } from './interfaces/icartitem';
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
    console.log('ADD ITEM');
    let cartId = await this.getOrCreateCartId();

    var item: ICartItem = {
      productId: product.productId,
      quantity: 1,
      shoppingCartId: Number(cartId)
    };

    this._http.post(`${this._baseUrl}/additemtocart/${cartId}`, item).toPromise();

    return item;
  }

  public async updateItemInCart(product: IProduct) {
    let cartId = await this.getOrCreateCartId();
    this.updateProductQuantity(cartId, product, 1);
  }

  public async removeFromCart(product: IProduct) {
    let cartId = await this.getOrCreateCartId();
    this.updateProductQuantity(cartId, product, -1);
  }

  // public async addToCart(product: IProduct) {
  //   this.addOrUpdate(product, 1); // no need to await since we are not returning back a value.
  // }

  // public async removeFromCart(product: IProduct) {
  //   this.addOrUpdate(product, -1);
  // }

  // Dont need to get product from Cart (DB call) when we already have the
  // cart items in our Cart on the component!

  // private async addOrUpdate(product: IProduct, quantity?: number) {
  //   let cartId = await this.getOrCreateCartId();
  //   let item$ = this.getProductFromCart(cartId, product.productId);

  //   item$.pipe(take(1)).subscribe(item => {
  //     if (item) 
  //       this.updateProductQuantity(cartId, product, quantity);
  //     else 
  //       this.addItemToCart(product, cartId);
  //   });
  // }

  // private addItemToCart(product: IProduct, cartId) {
  //   console.log('ADD ITEM');

  //   var item: ICartItem = {
  //     productId: product.productId,
  //     quantity: 1,
  //     shoppingCartId: cartId
  //   };

  //   this._http.post(`${this._baseUrl}/additemtocart/${cartId}`, item).toPromise();
  // }

  private updateProductQuantity(cartId, product: IProduct, quantity: number) {
    console.log('UPDATE ITEM');

    var item: ICartItem = {
      productId: product.productId,
      quantity: quantity,
      shoppingCartId: cartId
    };

    this._http.put(`${this._baseUrl}/updateitemquantity`, item).toPromise();
  }

  private getProductFromCart(cartId: string, productId: number) {
    return this._http.get<ICartItem>(`${this._baseUrl}/getitemfromcart/${cartId}/${productId}`);
  }
}
