import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user$: Observable<Object>;
  private _loginUrl = 'https://localhost:44356/api/user/login';

  constructor(private _http: HttpClient) { }

  // login(credentials) {
  //     return this._http.post(this._loginUrl, credentials);
  // }

  login(credentials) {
      this.user$ = this._http.post(this._loginUrl, credentials);
      return this.user$;
  }

  logout() {
    this.user$ = null;
  }

    //   register(n: number) {
    //     return this._http.get('http://localhost:5000/api/order/bycustomer/' + n);
    //   }
}