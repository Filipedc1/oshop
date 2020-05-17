

export interface UserState {
    userName: string;
    isLoggedIn: boolean;
    isAdmin: boolean;
    loading: boolean;
    loaded: boolean;
    error: boolean;
}

export const initialUserState: UserState = {
    userName: null,
    isLoggedIn: false,
    isAdmin: false,
    loading: false,
    loaded: false,
    error: false,
};