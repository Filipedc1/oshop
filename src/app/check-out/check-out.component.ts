import { UserService } from './../services/user.service';
import { OrderService } from './../order.service';
import { Subscription } from 'rxjs';
import { ShoppingCartService } from './../shopping-cart.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Cart } from '../models/cart';
import * as moment from 'moment';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit, OnDestroy {
  shipping = {}; 
  cart: Cart;
  subscription: Subscription;
  
  constructor(
    private _userService: UserService,
    private _cartService: ShoppingCartService,
    private _orderService: OrderService) { }

  async ngOnInit() {
    let cart$ = await this._cartService.getCart();
    this.subscription = cart$.subscribe(cart => this.cart = cart);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  placeOrder() {
    let order = {
      datePlaced: moment().format('LLL'),
      shipping: this.shipping,
      items: this.cart.shoppingCartItems,
      username: this._userService.userName
    }

    this._orderService.createOrder(order);
  }   
}
