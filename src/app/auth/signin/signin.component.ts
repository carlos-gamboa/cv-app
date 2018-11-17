import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  @ViewChild('f') signinForm: NgForm;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.signinForm.value);
  }

}
