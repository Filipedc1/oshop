

export interface UserState {
    userName: string;
    isLoggedIn: boolean;
    isAdmin: boolean;
}

export const initialUserState: UserState = {
    userName: null,
    isLoggedIn: false,
    isAdmin: false,
};