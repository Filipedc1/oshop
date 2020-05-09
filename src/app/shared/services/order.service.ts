import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from 'shared/models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private _baseUrl = 'https://localhost:44356/api/orders';

  constructor(private _http: HttpClient) { }

  placeOrder(order: Order) {
    // also clears the cart
    return this._http.post(this._baseUrl, order).toPromise();
  }

  getOrders() { 
    return this._http.get<Order>(this._baseUrl);
  }

  getOrdersByUser(userName: string) {
    return this._http.get<Order>(`${this._baseUrl}/${userName}`);
  }
}
