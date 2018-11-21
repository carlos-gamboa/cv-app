import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {DataStorageService} from '../services/data-storage.service';
import {CvService} from '../services/cv.service';
import {AuthService} from '../services/auth.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

export interface Theme {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-cv-edit',
  templateUrl: './cv-edit.component.html',
  styleUrls: ['./cv-edit.component.css']
})
export class CvEditComponent implements OnInit {
  chronologicActive = true;
  functionalActive = true;
  changesSaved = false;
  selectFileSrc = '../../../assets/img/profile_default.png';
  cvForm: FormGroup;

  themes: Theme[] = [
    {value: 'original' , viewValue: 'Original'},
    {value: 'dark' , viewValue: 'Dark'},
    {value: 'light' , viewValue: 'Light'}

  ];


  constructor(
    private dataStorageService: DataStorageService,
    private cvService: CvService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm();
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/home']);
    }
    this.route.params.subscribe(
      (params: Params) => {
        if (params['id'] != null) {
          if (this.authService.getCurrentUserId() !== params['id']) {
            this.router.navigate([`/cv/${params['id']}`]);
          }
        }
      }
    );
  }

  onSubmit() {
    this.dataStorageService.storeCv(this.cvForm.value);
    this.changesSaved = true;
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

  onAddFunctional() {
    (<FormArray>this.cvForm.get('functionalData')).push(
      new FormGroup({
        'schoolName': new FormControl(null, Validators.required),
        'schoolTitle': new FormControl(null, [Validators.required]),
        'schoolCity': new FormControl(null, [Validators.required]),
        'schoolYear': new FormControl(null, [Validators.required])
      })
    );
  }

  onDeleteFunctional(index: number) {
    (<FormArray>this.cvForm.get('functionalData')).removeAt(index);
  }

  getFunctionalControls() {
    return (<FormArray>this.cvForm.get('functionalData')).controls;
  }

  onAddSkill() {
    (<FormArray>this.cvForm.get('skills')).push(
      new FormGroup({
        'skillName': new FormControl(null, Validators.required)
      })
    );
  }

  onDeleteSkill(index: number) {
    (<FormArray>this.cvForm.get('skills')).removeAt(index);
  }

  getSkillControls() {
    return (<FormArray>this.cvForm.get('skills')).controls;
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
    const functionalData = new FormArray([]);
    const skills = new FormArray([]);
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
      'chronologicData': chronologicData,
      'functionalData': functionalData,
      'skills': skills,
      'theme':  new FormControl('original', Validators.required)
    });
  }

  print() {
    console.log(this.cvForm.value);
  }
}
