import { Cart } from 'shared/models/cart';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { UserService } from 'shared/services/user.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  subscription: Subscription;
  cart$: Observable<Cart>;

  constructor(
    public _userService: UserService,
    private _cartService: ShoppingCartService) { 
 
  }

  async ngOnInit() {
    this._userService.isUserLoggedIn();
    this.cart$ = await this._cartService.getCart();
  }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

  logout() {
    this._userService.logout();
    console.log('logout success');
  }
}
