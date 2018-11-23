import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {environment} from '../environments/environment';
import {NavigationEnd, Router} from '@angular/router';
import {CvService} from './services/cv.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  hideElement = false;

  constructor(private cvService: CvService) {
    cvService.changeEmittedHideHeader.subscribe(
      state => {
        this.hideElement = state;
      });
  }

  ngOnInit() {
    firebase.initializeApp(environment.firebaseConfig);
  }

}
