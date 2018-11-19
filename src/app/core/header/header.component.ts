import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  displayMenu =  false;
  loggedIn = false;
  token: any = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loggedIn = this.authService.isAuthenticated();
  }

  onLogOut() {
    this.authService.logout();
    this.loggedIn = false;
  }

  receiveStatus(event: Event) {
    if (event) {
      this.loggedIn = true;
    }
  }


}
