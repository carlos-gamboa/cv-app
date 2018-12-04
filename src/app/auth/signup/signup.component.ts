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
  showAlert = false;
  alertType = false;
  alertMessage = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.showAlert = false;
    this.authService.signupUser(this.signinForm.controls['username2'].value, this.signinForm.controls['password2'].value)
      .then((user: any) => {
      this.user = user;
      if (this.user != null) {
        this.showMessage(true, 'Se ha registrado exitosamente.');
        setTimeout(
          () => {
            this.router.navigate(['/home']);
        }
        , 1500);
      } else {
        this.showMessage(false, 'Los datos ingresados no son válidos.');
        this.hideMessage();
      }
    }).catch( reason => {
      this.showMessage(false, 'No fue posible registrarse, vuélvelo a intentar.');
      this.hideMessage();
    });
  }

  private showMessage (type: boolean, text: string) {
    this.alertType = type;
    this.alertMessage = text;
    this.showAlert = true;
  }

  private hideMessage () {
    setTimeout(
      () => {
        this.showAlert = false;
      }
      , 5000);
  }

}
