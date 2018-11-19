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
  loginError: boolean = false;

  @Output() childForm = new EventEmitter();


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.authService.signinUser(this.signinForm.controls['username'].value, this.signinForm.controls['password'].value)
      .then((token: any)=>{
        this.loginError = false;
        this.token = this.authService.getToken();
        console.log(this.authService.getToken());
        console.log(this.token);
        if (this.token != null){
          this.isLoggedIn();
          this.router.navigate(['/cv']);
        }
        else{
          this.loginError = true;
          console.log("Login Failed");
        }
      }).catch( reason => {
      this.loginError = true;
      console.log("Login Failed");
    });
  }

  isLoggedIn() {
    this.childForm.emit(true);
  }

}
