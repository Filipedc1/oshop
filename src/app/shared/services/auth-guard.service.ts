import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from 'shared/services/user.service';
import { map } from "rxjs/operators";
import { Store, select } from '@ngrx/store';
import { AppState } from 'app/store/state/app.state';
import { selectUser } from 'app/store/selectors/user.selector';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _store: Store<AppState>, private _router: Router) { }

  // canActivate() {
  //   return this._userService.user$.pipe(map(user => {
  //     if (user) return true;

  //     this._router.navigate(['/login']);
  //     return false;
  //   }));
  // }

  canActivate(route, state: RouterStateSnapshot) {
    let isLoggedIn: boolean = false;

    this._store.pipe(select(selectUser))
      .subscribe(s => { 
        isLoggedIn = s.isLoggedIn;
      })

    if (isLoggedIn) return true;

    this._router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
