import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {SignupComponent} from './auth/signup/signup.component';
import {SigninComponent} from './auth/signin/signin.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CvComponent} from './cv/cv.component';
import {CvEditComponent} from './cv-edit/cv-edit.component';

const appRoutes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'home', component: DashboardComponent },
  { path: 'cv/:id', component: CvComponent },
  { path: 'cv/new', component: CvEditComponent },
  { path: 'cv/:id/edit', component: CvEditComponent },
  { path: '**', component: LandingComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
