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
      this._cartService.updateItemInCart(item);
      item.quantity = item.quantity + 1;
    }
    else  {
      console.log(this.product);

      var newItem = new CartItem();
      newItem.productId = this.product.productId;
      newItem.productName = this.product.name;
      newItem.price = this.product.price;
      newItem.quantity = 1;
      newItem.imageUrl = this.product.imageUrl;
      newItem.categoryId = this.product.categoryId;
      newItem.shoppingCartId = Number(this.shoppingCart.shoppingCartId);
      newItem._totalPrice = 0;
   

      // var newItem: CartItem = {
      //   productId: this.product.productId,
      //   productName: this.product.name,
      //   price: this.product.price,
      //   quantity: 1,
      //   imageUrl: this.product.imageUrl,
      //   categoryId: this.product.categoryId,
      //   shoppingCartId: Number(this.shoppingCart.shoppingCartId),
      //   _totalPrice: 0
      // };
      
      this._cartService.addToCart(newItem);
      this.shoppingCart.shoppingCartItems.push(newItem);
    }
  }

  private getProductFromCart() {
    return this.shoppingCart.shoppingCartItems.find(x => x.productId === this.product.productId);
  }
}
