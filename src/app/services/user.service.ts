import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user$: Observable<Object>;
  public isLoggedIn: boolean = false;
  public isAdmin: boolean = false;

  private _loginUrl = 'https://localhost:44356/api/user/login';

  constructor(private _http: HttpClient) { }

  // login(credentials) {
  //     return this._http.post(this._loginUrl, credentials);
  // }

  login(credentials) {
      this.user$ = this._http.post(this._loginUrl, credentials);
      return this.user$;
  }

  finishLogin(authToken) {
    localStorage.setItem('token', authToken);
    this.isLoggedIn = true;

    var decodedToken = jwt_decode(authToken); 
    this.isAdmin = decodedToken['role'] == 'Admin' ? true : false;
    console.log('ROLE ' + decodedToken['role']);
  }

  logout() {
    this.user$ = null;
    this.isLoggedIn = false;
  }

    //   register(n: number) {
    //     return this._http.get('http://localhost:5000/api/order/bycustomer/' + n);
    //   }
}