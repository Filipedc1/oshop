import { Observable } from 'rxjs';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';
import { Component, OnInit } from '@angular/core';
import { Cart } from 'shared/models/cart';


@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  cart$: Observable<Cart>;
  
  constructor(private _cartService: ShoppingCartService) { }

  async ngOnInit() {
    this.cart$ = await this._cartService.getCart();
  }
}
