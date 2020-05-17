import { IAppUser } from './../../shared/interfaces/iappuser';
import { Action } from '@ngrx/store'

export enum UserActionTypes {
    LOGIN           = "[Auth] Login",
    LOGIN_SUCCESS   = "[Auth] Login Success",
    LOGIN_FAIL      = "[Auth] Login Fail",
    CHECK_LOGIN     = "[Auth] Check Login",
    LOGOUT          = "[Auth] Logout",
}

export class Login implements Action {
    readonly type = UserActionTypes.LOGIN;
    constructor(public payload: any) {}
}

export class CheckLogin implements Action {
    readonly type = UserActionTypes.CHECK_LOGIN;
    constructor() {}
}

export class LoginSuccess implements Action {
    readonly type = UserActionTypes.LOGIN_SUCCESS;

    constructor(public payload: IAppUser) {}
}

export class LoginFail implements Action {
    readonly type = UserActionTypes.LOGIN_FAIL;

    constructor(public payload: any) {}
}

export class Logout implements Action {
    readonly type = UserActionTypes.LOGOUT;
}


export type Actions = 
    Login | 
    LoginSuccess | 
    LoginFail |
    CheckLogin |
    Logout;