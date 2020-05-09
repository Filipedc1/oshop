import { UserService } from 'shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'shared/services/order.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  orders$;

  constructor( 
    private _userService: UserService,
    private _orderService: OrderService) { 
      this.orders$ = _orderService.getOrdersByUser(_userService.userName);
    }

  ngOnInit() {
  }

}
