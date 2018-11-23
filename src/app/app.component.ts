import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {environment} from '../environments/environment';
import {NavigationEnd, Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  hideElement = false;

  constructor(private  router : Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event.url);
        if (event.url.match('^\\/cv\\/[a-zA-Z0-9]{28}$') && event.url.length === 32){
          this.hideElement = true;
        }  else {
          this.hideElement = false;
        }
      }
    });
  }

  ngOnInit() {
    firebase.initializeApp(environment.firebaseConfig);
  }

}
