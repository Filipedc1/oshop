import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'app/store/state/app.state';
import { Observable, Subscription } from 'rxjs';
import { Cart } from 'shared/models/cart';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { UserService } from 'shared/services/user.service';

import * as UserActions from '../store/actions/user.actions';
import { AppUser } from './../shared/models/appuser';
import { selectUser } from './../store/selectors/user.selector';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  subscription: Subscription;
  cart$: Observable<Cart>;
  isLoggedIn: boolean = false;
  currentUser: AppUser;

  constructor(
    private _store: Store<AppState>,
    public _userService: UserService,
    private _cartService: ShoppingCartService) { 
      this.currentUser = new AppUser();
  }

  async ngOnInit() {
    this._store.pipe(select(selectUser))
      .subscribe(s => { 
        this.isLoggedIn = s.isLoggedIn;
        this.currentUser.isAdmin = s.isAdmin;
        this.currentUser.username = s.userName;
      })

    this._store.dispatch(new UserActions.CheckLogin());
    this.cart$ = await this._cartService.getCart();
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

  logout() {
    this._store.dispatch(new UserActions.Logout());
  }
}
