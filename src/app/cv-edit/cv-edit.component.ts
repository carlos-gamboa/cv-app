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

export interface Template {
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
  skillsActive = true;
  certificationsActive = true;
  publicationsActive = true;
  interestsActive = true;
  contactActive = true;
  changesSaved = false;
  selectFileSrc = '../../../assets/img/profile_default.png';
  cvForm: FormGroup;
  selectedTemplate = 'vertical';
  selectedTheme = null;

  templates: Template[] = [
    {value: 'horizontal', viewValue: 'Horizontal'},
    {value: 'vertical', viewValue: 'Vertical'}
  ];

  themesHorizontal: Theme[] = [
    {value: 'original1' , viewValue: 'Original1'},
    {value: 'dark1' , viewValue: 'Dark1'},
    {value: 'light1' , viewValue: 'Light1'}
  ];

  themesVertical: Theme[] = [
    {value: 'original2' , viewValue: 'Original2'},
    {value: 'dark2' , viewValue: 'Dark2'},
    {value: 'light2' , viewValue: 'Light2'}
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

  //Seccion Experiencia
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

  //Seccion Educacion
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

  //Seccion Habilidades
  onAddSkill() {
    (<FormArray>this.cvForm.get('skills')).push(
      new FormGroup({
        'skillName': new FormControl(null, Validators.required),
        'knowledge': new FormControl(null, Validators.required)
      })
    );
  }

  onDeleteSkill(index: number) {
    (<FormArray>this.cvForm.get('skills')).removeAt(index);
  }

  getSkillControls() {
    return (<FormArray>this.cvForm.get('skills')).controls;
  }

  //Seccion Certificaciones
  onAddCertification() {
    (<FormArray>this.cvForm.get('certificationsData')).push(
      new FormGroup({
        'certificationName': new FormControl(null, Validators.required),
        'certificationDate': new FormControl(null, [Validators.required]),
        'certificationDescription': new FormControl(null, [Validators.required]),
        'certificationURL': new FormControl(null, [Validators.required]),
        'certificationSchool': new FormControl(null, Validators.required)
      })
    );
  }

  onDeleteCertification(index: number) {
    (<FormArray>this.cvForm.get('certificationsData')).removeAt(index);
  }

  getCertificationsControls() {
    return (<FormArray>this.cvForm.get('certificationsData')).controls;
  }


  //Seccion Publicaciones
  onAddPublication() {
    (<FormArray>this.cvForm.get('publicationsData')).push(
      new FormGroup({
        'publicationName': new FormControl(null, Validators.required),
        'publicationDate': new FormControl(null, [Validators.required]),
        'publicationDescription': new FormControl(null, [Validators.required]),
        'publicationURL': new FormControl(null, [Validators.required]),
        'publicationSite': new FormControl(null, Validators.required)
      })
    );
  }

  onDeletePublication(index: number) {
    (<FormArray>this.cvForm.get('publicationsData')).removeAt(index);
  }

  getPublicationsControls() {
    return (<FormArray>this.cvForm.get('publicationsData')).controls;
  }


  //Seccion Intereses
  onAddInterest() {
    (<FormArray>this.cvForm.get('interestsData')).push(
      new FormGroup({
        'interestText': new FormControl(null, Validators.required),
        'interestName': new FormControl(null, Validators.required)
      })
    );
  }

  onDeleteInterest(index: number) {
    (<FormArray>this.cvForm.get('interestsData')).removeAt(index);
  }

  getInterestControls() {
    return (<FormArray>this.cvForm.get('interestsData')).controls;
  }


  //Seccion Contacto

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
    const certificationsData = new FormArray([]);
    const publicationsData = new FormArray([]);
    const interestsData = new FormArray([]);
    this.cvForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'title': new FormControl(null, Validators.required),
      'introduction': new FormControl(null, Validators.required),
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
      'websiteURL': new FormControl(null, Validators.required),
      //switchs
      'chronologicActive': new FormControl(false),
      'functionalActive': new FormControl(false),
      'skillsActive': new FormControl(false),
      'certificationsActive': new FormControl(false),
      'publicationsActive': new FormControl(false),
      'interestsActive': new FormControl(false),
      'contactActive': new FormControl(false),
      //datos
      'chronologicData': chronologicData,
      'functionalData': functionalData,
      'skills': skills,
      'template': new FormControl('horizontal', Validators.required),
      'theme':  new FormControl(this.selectedTheme, Validators.required),
      'certificationsData': certificationsData,
      'publicationsData': publicationsData,
      'interestsData': interestsData
    });
  }
  print() {
    console.log(this.cvForm.value);
  }
}
