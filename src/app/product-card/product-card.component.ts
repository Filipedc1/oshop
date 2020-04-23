import { ShoppingCartService } from './../shopping-cart.service';
import { IProduct } from './../interfaces/iproduct';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input('product') product: IProduct;
  @Input('show-actions') showActions = true;
  
  constructor(private _cartService: ShoppingCartService) { }

  ngOnInit() {
  }

  addToCart(product: IProduct) {
    this._cartService.addToCart(product);
  }

}
