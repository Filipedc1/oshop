import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from './services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private _userService: UserService) { }

  canActivate() {
    if (this._userService.isAdmin) return true;

    return false;
  }
}
