import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {Cv} from './models/cv.model';
import {CvService} from './services/cv.service';
import {DataStorageService} from './services/data-storage.service';
import * as firebase from 'firebase';
import {environment} from '../environments/environment';
import {AuthService} from './services/auth.service';
import {HttpClient} from "@angular/common/http";
import {forEach} from '@angular/router/src/utils/collection';
import {SkillsModel} from './models/skills.model';
import {FunctionalModel} from './models/functional.model';
import {ChronologicModel} from './models/chronological.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {





  constructor(private http:HttpClient, public cvService: CvService, public dataStorageService: DataStorageService, public authService: AuthService) {
  }

  ngOnInit() {
    firebase.initializeApp(environment.firebaseConfig);

  }






}
