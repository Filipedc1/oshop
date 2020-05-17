import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'shared/services/user.service';
import { Order } from 'shared/models/order';
import { Router } from '@angular/router';
import { OrderService } from 'shared/services/order.service';
import { Cart } from 'shared/models/cart';
import { AppState } from 'app/store/state/app.state';
import { Store, select } from '@ngrx/store';
import { selectUser } from 'app/store/selectors/user.selector';

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit {
  shipping: any = {}; 
  username: string;

  @Input('cart') cart: Cart;

  constructor(
    private _store: Store<AppState>,
    private _userService: UserService, 
    private _orderService: OrderService, 
    private _router: Router) { }

  ngOnInit() {
    this._store.pipe(select(selectUser))
      .subscribe(s => { 
        this.username = s.userName;
      })
  }

  async placeOrder() {
    let order = new Order(this.username, this.shipping, this.cart.shoppingCartItems);
    await this._orderService.placeOrder(order);
    this._router.navigate(['order-success']);
  }   

}
