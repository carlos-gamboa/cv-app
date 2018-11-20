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
import { LandingComponent } from './landing/landing.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import {AppRoutingModule} from './app-routing.module';
import {CvService} from './services/cv.service';
import {DataStorageService} from './services/data-storage.service';
import {AuthService} from './services/auth.service';



// Environment
import { environment } from '../environments/environment';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatDialogModule} from '@angular/material';
import { ShareUrlComponent } from './dashboard/share-url/share-url.component';

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
    LandingComponent,
    SignupComponent,
    SigninComponent,
    ShareUrlComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [
    CvService,
    DataStorageService,
    AuthService,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [ShareUrlComponent]
})
export class AppModule { }
