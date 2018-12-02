import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
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
import { environment } from '../environments/environment';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatDialogModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import { ShareUrlComponent } from './dashboard/share-url/share-url.component';
import { TemplateHorizontalComponent } from './cv/template-horizontal/template-horizontal.component';
import { TemplateVerticalComponent } from './cv/template-vertical/template-vertical.component';
// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
//star bars
import { BarRatingModule } from "ngx-bar-rating";

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
    TemplateHorizontalComponent,
    TemplateVerticalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSelectModule,
    NgbCarouselModule,
    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#FF6347",
      innerStrokeColor: "#FFA500",
      animationDuration: 300,
      showSubtitle: false
    }),
    BarRatingModule
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
