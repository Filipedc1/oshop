import { IAppUser } from './../interfaces/iappuser';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as jwt_decode from 'jwt-decode';
import { AppUser } from 'shared/models/appuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _loginUrl = 'https://localhost:44356/api/user/login';

  constructor(private _http: HttpClient) { }

  login(credentials) {
      return this._http.post<IAppUser>(this._loginUrl, credentials);
  }

  isUserLoggedIn() {
    let token = localStorage.getItem('token'); 
    let user: AppUser = null;

    if (token) {
      var decodedToken = jwt_decode(token);
      user = new AppUser();
      user.username = decodedToken['username'];
      user.isAdmin = decodedToken['role'] == 'Admin' ? true : false;
      user.isLoggedIn = true;
      user.token = token;
    }

    return user;
  }

  // logout() {
  //   localStorage.removeItem('token');
  //   this.userName = null;
  //   this.isLoggedIn = false;
  // }

    //   register(n: number) {
    //     return this._http.get('http://localhost:5000/api/order/bycustomer/' + n);
    //   }
}