import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from "@angular/router";
import {Cv} from '../../models/cv.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('f') signinForm: NgForm;
  user: any = null;
  registerError = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.signupUser(this.signinForm.controls['username'].value, this.signinForm.controls['password'].value)
      .then((user: any) => {
      this.user = user;
        console.log(this.user);
      if (this.user != null){
        this.router.navigate(['/cv']);
      } else {
        this.registerError = true;
        console.log('Register Failed');
      }
    }).catch( reason => {
      this.registerError = true;
      console.log('Register Failed');
    });
  }

}
