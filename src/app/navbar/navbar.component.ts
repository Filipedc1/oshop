import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _userService: UserService) { 
  }

  ngOnInit() {

  }

  logout() {
    this._userService.logout();
    localStorage.removeItem('token');
    console.log('logout success');
  }
}
