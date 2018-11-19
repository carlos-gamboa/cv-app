import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

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
    this.authService.signupUser(this.signinForm.controls['username2'].value, this.signinForm.controls['password2'].value)
      .then((user: any) => {
      this.user = user;
      if (this.user != null) {
        setTimeout(
          () => {
            this.router.navigate(['/home']);
        }
        , 1500);
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
