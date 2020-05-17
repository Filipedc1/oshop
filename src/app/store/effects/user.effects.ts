import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';

import * as UserActions from '../actions/user.actions';
import { IAppUser } from './../../shared/interfaces/iappuser';
import { UserService } from './../../shared/services/user.service';

@Injectable()
export class UserEffect {
    constructor(
        private actions$: Actions,
        private userService: UserService,
        private router: Router
    ) {}

    @Effect()
    login$: Observable<Action> = this.actions$.pipe(
        ofType<UserActions.Login>(UserActions.UserActionTypes.LOGIN),
        mergeMap((actions: UserActions.Login) => 
            this.userService.login(actions.payload).pipe(
                map((user: IAppUser) =>
                    new UserActions.LoginSuccess(user)
                ),
                catchError(err => of(new UserActions.LoginFail(err)))
            )
        )
    );

    @Effect({ dispatch: false })
    loginSuccess$: Observable<any> = this.actions$.pipe(
        ofType<UserActions.LoginSuccess>(UserActions.UserActionTypes.LOGIN_SUCCESS),
        tap((user) => {
            localStorage.setItem('token', user.payload.token);
            this.router.navigate(['/']);
        })
    );
  
    @Effect()
    checkLogin$: Observable<any> = this.actions$.pipe(
        ofType<UserActions.CheckLogin>(UserActions.UserActionTypes.CHECK_LOGIN),
        map(() => {
            let user = this.userService.isUserLoggedIn();
            if (user) {
                return new UserActions.LoginSuccess(user)
            }

            return new UserActions.LoginFail(null)
        })
    );

    @Effect({ dispatch: false })
    logout$: Observable<any> = this.actions$.pipe(
        ofType<UserActions.Logout>(UserActions.UserActionTypes.LOGOUT),
        tap((user) => {
            localStorage.removeItem('token');
        })
    );
}