import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  displayMenu =  false;
  loggedIn = false;
  token: any = null;
  subscription: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loggedIn = this.authService.isAuthenticated();
    this.subscription = this.authService.loggedIn
      .subscribe(
        (logged: boolean) => {
          this.loggedIn = logged;
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onLogOut() {
    this.authService.logout();
    this.loggedIn = false;
    this.router.navigate(['/landing']);
  }

  receiveStatus(event: Event) {
    if (event) {
      this.loggedIn = true;
    }
  }


}
