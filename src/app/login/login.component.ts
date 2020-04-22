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
    public _userService: UserService, 
    private _router: Router) { }

  ngOnInit() {

  }

  login(credentials) {
    this._userService.login(credentials)
      .subscribe(result => {
        console.log('login success');
        this._userService.finishLogin(result['token']);
        this._router.navigate(['/']);
      },
      err => { 
        console.log('ERROR');
        console.log(err);
        this.invalidLogin = true;
      }
    );
  }

}
