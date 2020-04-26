import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { Cart } from '../models/cart';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart$: Observable<Cart>;

  constructor(private _cartService: ShoppingCartService) { }

  async ngOnInit() {
    this.cart$ = await this._cartService.getCart();
  }

}
