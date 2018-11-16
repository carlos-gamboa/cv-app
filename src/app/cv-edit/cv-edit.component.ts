import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cv-edit',
  templateUrl: './cv-edit.component.html',
  styleUrls: ['./cv-edit.component.css']
})
export class CvEditComponent implements OnInit {
  chronologicActive = true;
  functionalActive = true;
  selectFileSrc = '../../../assets/img/profile_default.png';
  cvForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    //Do something
  }

  onAddChronologic() {
    (<FormArray>this.cvForm.get('chronologicData')).push(
      new FormGroup({
        'companyName': new FormControl(null, Validators.required),
        'companyRole': new FormControl(null, [Validators.required]),
        'companyStart': new FormControl(null, [Validators.required]),
        'companyFinish': new FormControl(null, [Validators.required]),
        'companyFunction': new FormControl(null, [Validators.required])
      })
    );
  }

  onDeleteChronologic(index: number) {
    (<FormArray>this.cvForm.get('chronologicData')).removeAt(index);
  }

  getChronologicControls() {
    return (<FormArray>this.cvForm.get('chronologicData')).controls;
  }

  onFileSelect(event) {
    if (event.target.files && event.target.files[0] && event.target.files.length > 0) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.selectFileSrc = reader.result;

      reader.readAsDataURL(file);
    }
    console.log(event);
  }

  private initForm() {
    const chronologicData = new FormArray([]);
    this.cvForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'title': new FormControl(null, Validators.required),
      'mail': new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      'phone1': new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)
      ]),
      'phone2': new FormControl(null, [
        Validators.required,
        Validators.pattern(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)
      ]),
      'address': new FormControl(null, Validators.required),
      'personalProfile': new FormControl(null, Validators.required),
      'chronologicActive': new FormControl(false),
      'functionalActive': new FormControl(false),
      'chronologicData': chronologicData
    });
  }

  print() {
    console.log(this.cvForm.value);
  }
}
