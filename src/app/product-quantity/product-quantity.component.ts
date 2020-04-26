import { CartItem } from './../models/cartitem';
import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { Cart } from '../models/cart';
import { IProduct } from '../interfaces/iproduct';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent implements OnInit {
  @Input('product') product: CartItem;
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
      await this._cartService.addToCart(this.product);
      this.shoppingCart.shoppingCartItems.push(this.product);
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
}
