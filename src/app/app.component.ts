import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {environment} from '../environments/environment';
import { ChangeDetectorRef } from '@angular/core';
import {CvService} from './services/cv.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  hideElement = false;

  constructor(private cvService: CvService, private cdRef:ChangeDetectorRef) {
  }

  ngAfterViewChecked()
  {
    this.cvService.changeEmittedHideHeader.subscribe(
      state => {
        this.hideElement = state;
      });
    this.cdRef.detectChanges();
  }

  ngOnInit() {
    firebase.initializeApp(environment.firebaseConfig);
  }

}
