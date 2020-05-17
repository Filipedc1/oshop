import * as UserActions from '../actions/user.actions'
import { UserState, initialUserState } from '../state/user.state';


export function userReducer(state = initialUserState, action: UserActions.Actions) : UserState
{
    switch(action.type) {
        case UserActions.UserActionTypes.LOGIN: {
            return { ...state, loading: true };
        }
        case UserActions.UserActionTypes.LOGIN_SUCCESS: {
            return { 
                ...state, 
                isLoggedIn: true, 
                loaded: true, 
                loading: false,
                userName: action.payload.username,
                isAdmin: action.payload.isAdmin
            };
        }
        case UserActions.UserActionTypes.LOGIN_FAIL: {
            return { ...state, loading: false, loaded: false };
        }
        case UserActions.UserActionTypes.CHECK_LOGIN: {
            return { ...state, loading: true };
        }
        case UserActions.UserActionTypes.LOGOUT: {
            return initialUserState;
        }
        default:
            return state;
    }
}