import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  @ViewChild('f') signinForm: NgForm;
  token: any = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.signinUser(this.signinForm.controls['username'].value, this.signinForm.controls['password'].value)
      .then((token: any) => {
        this.token = this.authService.getToken();
        if (this.token != null) {
          this.router.navigate(['/home']);
        } else {
          this.signinForm.reset();
          this.signinForm.controls['username'].markAsTouched();
          this.signinForm.controls['password'].markAsTouched();
        }
      }).catch( reason => {
      this.signinForm.reset();
      this.signinForm.controls['username'].markAsTouched();
      this.signinForm.controls['password'].markAsTouched();
    });
  }

}
