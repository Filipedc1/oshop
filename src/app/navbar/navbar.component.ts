import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  username: string;

  constructor() { }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('token');
    console.log('logout success');
  }
}
