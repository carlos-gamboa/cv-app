import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { CvComponent } from './cv/cv.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CvSharedComponent } from './cv/cv-shared/cv-shared.component';
import { CvChronologicComponent } from './cv/cv-chronologic/cv-chronologic.component';
import { CvFunctionalComponent } from './cv/cv-functional/cv-functional.component';
import { CvEditComponent } from './cv-edit/cv-edit.component';
import { CvEditSharedComponent } from './cv-edit/cv-edit-shared/cv-edit-shared.component';
import { CvEditChronologicComponent } from './cv-edit/cv-edit-chronologic/cv-edit-chronologic.component';
import { CvEditFunctionalComponent } from './cv-edit/cv-edit-functional/cv-edit-functional.component';
import { LandingComponent } from './landing/landing.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import {AppRoutingModule} from './app-routing.module';
import {CvService} from './services/cv.service';
import {DataStorageService} from './services/data-storage.service';
import {AuthService} from './services/auth.service';

// Firebase import
import { AngularFireModule } from 'angularfire2';

// Firebase config
export const firebaseConfig = {
  apiKey: "AIzaSyB2rqJRJVLJsjQT8SQYQ6pJXTub41A81p4",
  authDomain: "cv-app-40b38.firebaseapp.com",
  databaseURL: "https://cv-app-40b38.firebaseio.com",
  projectId: "cv-app-40b38",
  storageBucket: "cv-app-40b38.appspot.com",
  messagingSenderId: "557048975608"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CvComponent,
    DashboardComponent,
    CvSharedComponent,
    CvChronologicComponent,
    CvFunctionalComponent,
    CvEditComponent,
    CvEditSharedComponent,
    CvEditChronologicComponent,
    CvEditFunctionalComponent,
    LandingComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    CvService,
    DataStorageService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
