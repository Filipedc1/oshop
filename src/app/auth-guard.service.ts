import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from './services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private _userService: UserService) { }

  // canActivate() {

  // }
}
