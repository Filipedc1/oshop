import { ICartItem } from './../interfaces/icartitem';
import { ShoppingCartService } from './../shopping-cart.service';
import { IProduct } from './../interfaces/iproduct';
import { Component, OnInit, Input } from '@angular/core';
import { filter, find } from 'rxjs/operators';
import { ICart } from '../interfaces/icart';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input('product') product: IProduct;
  @Input('show-actions') showActions = true;
  @Input('shopping-cart') shoppingCart: ICart;
  
  constructor(private _cartService: ShoppingCartService) { }

  ngOnInit() {
  }

  addToCart(product: IProduct) {
    this._cartService.addToCart(product);
  }

  getQuantity() {
    if (!this.shoppingCart) return 0;

    let item = this.shoppingCart.shoppingCartItems.find(x => x.productId === this.product.productId);
    //console.log('ITEM'); 
    //console.log(item);
    return item ? item.quantity : 0;
  }
}
