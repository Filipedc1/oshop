import { IAppUser } from './../interfaces/iappuser';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as jwt_decode from 'jwt-decode';
import { AppUser } from 'shared/models/appuser';

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _loginUrl = 'https://localhost:44356/api/user/login';

  constructor(private _http: HttpClient, public _jwtHelper: JwtHelperService) { }

  login(credentials) : Observable<IAppUser> {
      return this._http.post<IAppUser>(this._loginUrl, credentials);
  }

  logout() : void {
    localStorage.removeItem('token');
  }

  getLoggedInUser() : AppUser {
    let isAuthenticated = this.isAuthenticated();
    if (!isAuthenticated) {
      return null;
    }

    let token = this.getToken();  
    let user: AppUser = null;

    var decodedToken = this._jwtHelper.decodeToken(token);
    user = new AppUser();
    user.username = decodedToken['username'];
    user.isAdmin = decodedToken['role'] == 'Admin' ? true : false;
    user.isLoggedIn = true;
    user.token = token;

    return user;
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public isAuthenticated(): boolean {
    let token = this.getToken(); 

    if (token) {
      let isExpired = this._jwtHelper.isTokenExpired(token);
      if (isExpired) {
        this.logout();
        return false;
      }

      return true;
    }

    return false;
  }
}