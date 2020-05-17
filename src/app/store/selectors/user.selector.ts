import { AppState } from '../state/app.state';

export const selectUser = (state: AppState) => state.currentUser;