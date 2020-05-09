import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'shared/services/user.service';
import { Order } from 'shared/models/order';
import { Router } from '@angular/router';
import { OrderService } from 'shared/services/order.service';
import { Cart } from 'shared/models/cart';

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit {
  shipping: any = {}; 

  @Input('cart') cart: Cart;

  constructor(
    private _userService: UserService, 
    private _orderService: OrderService, 
    private _router: Router) { }

  ngOnInit() {
  }

  async placeOrder() {
    let order = new Order(this._userService.userName, this.shipping, this.cart.shoppingCartItems);
    await this._orderService.placeOrder(order);
    this._router.navigate(['order-success']);
  }   

}