import { ICartItem } from 'shared/interfaces/icartitem';
import { IProduct } from 'shared/interfaces/iproduct';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { take, map } from 'rxjs/operators';
import { Cart } from 'shared/models/cart';
import { CartItem } from 'shared/models/cartitem';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private _baseUrl = 'https://localhost:44356/api/shoppingcart';

  constructor(private _http: HttpClient) { }

  public async getCart() {
    let cartId = await this.getOrCreateCartId();
    return this._http.get<Cart>(`${this._baseUrl}/${cartId}`)
      .pipe(map(x => new Cart(x)));
  }

  public async clearCart() {
    console.log('clear cart');
    let cartId = await this.getOrCreateCartId();

    this._http.get(`${this._baseUrl}/clearcart/${cartId}`).toPromise();
    localStorage.removeItem('cartId');
  }

  public async addToCart(product: CartItem) {
    console.log('Add ITEM');
    let cartId = await this.getOrCreateCartId();

    this._http.post(`${this._baseUrl}/additemtocart/${cartId}`, product).toPromise();
  }

  public async updateItemInCart(item: CartItem) {
    let cartId = await this.getOrCreateCartId();
    this.updateProductQuantity(cartId, item, 1);
  }

  public async removeFromCart(item: CartItem) {
    let cartId = await this.getOrCreateCartId();
    this.updateProductQuantity(cartId, item, -1);
  }

  // Private methods
  private create() {
    var cart = {
      shoppingcartid: 0,
      dateCreatedUtc: moment().format('LLL')
    };

    return this._http.post(this._baseUrl, cart);
  }

  private async getOrCreateCartId() : Promise<string> {
    let cartId = localStorage.getItem('cartId');
    if (cartId) return cartId;

    console.log('try to create cart');
    let result = await this.create().toPromise();
    localStorage.setItem('cartId', result['cartId']);
    
    return result['cartId'];
  }

  private updateProductQuantity(cartId, item: CartItem, quantity: number) {
    console.log('UPDATE ITEM');
    
    let newItem: CartItem = new CartItem(item);
    newItem.quantity = quantity;

    this._http.put(`${this._baseUrl}/updateitemquantity`, newItem).toPromise();
  }

  private getProductFromCart(cartId: string, productId: number) {
    return this._http.get<ICartItem>(`${this._baseUrl}/getitemfromcart/${cartId}/${productId}`);
  }
}
