import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public userName: string;
  public isLoggedIn: boolean = false;
  public isAdmin: boolean = false;

  private _loginUrl = 'https://localhost:44356/api/user/login';

  constructor(private _http: HttpClient) { }

  login(credentials) {
      return this._http.post(this._loginUrl, credentials);
  }

  finishLogin(authToken) {
    localStorage.setItem('token', authToken);
    this.isLoggedIn = true;

    var decodedToken = jwt_decode(authToken); 
    this.userName = decodedToken['username'];
    console.log(decodedToken['username']);
    this.isAdmin = decodedToken['role'] == 'Admin' ? true : false;
  }

  isUserLoggedIn() {
    let token = localStorage.getItem('token'); 

    if (token) {
      var decodedToken = jwt_decode(token);
      this.userName = decodedToken['username'];
      this.isAdmin = decodedToken['role'] == 'Admin' ? true : false;
      this.isLoggedIn = true;
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.userName = null;
    this.isLoggedIn = false;
  }

    //   register(n: number) {
    //     return this._http.get('http://localhost:5000/api/order/bycustomer/' + n);
    //   }
}