import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from './services/user.service';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _userService: UserService, private _router: Router) { }

  // canActivate() {
  //   return this._userService.user$.pipe(map(user => {
  //     if (user) return true;

  //     this._router.navigate(['/login']);
  //     return false;
  //   }));
  // }

  canActivate(route, state: RouterStateSnapshot) {
    if (this._userService.isLoggedIn) return true;

    this._router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
