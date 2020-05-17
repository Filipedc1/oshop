import { UserService } from 'shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'shared/services/order.service';
import { AppState } from 'app/store/state/app.state';
import { Store, select } from '@ngrx/store';
import { selectUser } from 'app/store/selectors/user.selector';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  orders$;

  constructor( 
    private _store: Store<AppState>,
    private _userService: UserService,
    private _orderService: OrderService) { 
    }

  ngOnInit() {
    let username: string;

    this._store.pipe(select(selectUser))
      .subscribe(s => { 
        username = s.userName;
      })

    this.orders$ = this._orderService.getOrdersByUser(username);
  }

}
