import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean;

  constructor(
    private _userService: UserService, 
    private _router: Router) { }

  ngOnInit() {
  }

  login(credentials) {
    this._userService.login(credentials)
      .subscribe(result => {
        console.log('login success');
        localStorage.setItem('token', result['token']);
        this._router.navigate(['/']);
      },
      err => { 
        console.log(err);
        this.invalidLogin = true;
      }
    );
  }

}
