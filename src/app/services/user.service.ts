import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedIn: boolean = false;
  private _loginUrl = 'https://localhost:44356/api/user/login';

  constructor(private _http: HttpClient) { }

  login(credentials) {
      return this._http.post(this._loginUrl, credentials);
  }

    //   register(n: number) {
    //     return this._http.get('http://localhost:5000/api/order/bycustomer/' + n);
    //   }
}