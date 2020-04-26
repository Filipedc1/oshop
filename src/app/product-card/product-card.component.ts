import { CartItem } from './../models/cartitem';
import { ShoppingCartService } from './../shopping-cart.service';
import { IProduct } from './../interfaces/iproduct';
import { Component, OnInit, Input } from '@angular/core';
import { filter, find } from 'rxjs/operators';
import { Cart } from '../models/cart';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input('product') product: IProduct;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart: Cart;
  
  constructor(private _cartService: ShoppingCartService) { }

  ngOnInit() {
  }

  async addToCart() {
    let item = this.getProductFromCart();

    if (item) {
      this._cartService.updateItemInCart(this.product);
      item.quantity = item.quantity + 1;
    }
    else  {
      let newCartItem = await this._cartService.addToCart(this.product);
      this.shoppingCart.shoppingCartItems.push(newCartItem);
    }
  }

  removeFromCart() {
    let item = this.getProductFromCart();
    this._cartService.removeFromCart(this.product);
    item.quantity = item.quantity - 1;
  }

  private getProductFromCart() {
    return this.shoppingCart.shoppingCartItems.find(x => x.productId === this.product.productId);
  }

  getQuantity() {
    if (!this.shoppingCart) return 0;

    let item = this.shoppingCart.shoppingCartItems.find(x => x.productId === this.product.productId);
    //console.log('ITEM'); 
    //console.log(item);
    return item ? item.quantity : 0;
  }
}
