import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'app/store/state/app.state';
import { UserService } from 'shared/services/user.service';

import * as UserActions from '../store/actions/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean;

  constructor(
    private _store: Store<AppState>,
    public _userService: UserService, 
    private _router: Router) { }

  ngOnInit() {

  }

  login(credentials) {
    this._store.dispatch(new UserActions.Login(credentials));
  }

}
