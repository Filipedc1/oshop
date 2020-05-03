import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private _baseUrl = 'https://localhost:44356/api/orders';

  constructor(private _http: HttpClient) { }

  createOrder(order) {
    console.log(order);
    return this._http.post(this._baseUrl, order).toPromise();
  }
}
