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
  languagesActive = true;
  certificationsActive = true;
  publicationsActive = true;
  interestsActive = true;
  contactActive = true;
  changesSaved = false;
  selectFileSrc = '../../../assets/img/profile_default.png';
  selectedFile: File = null;
  cvForm: FormGroup;
  selectedTemplate = 'vertical';
  selectedTheme = 'blue';

  templates: Template[] = [
    {value: 'horizontal', viewValue: 'Horizontal'},
    {value: 'vertical', viewValue: 'Vertical'}
  ];

  themesHorizontal: Theme[] = [
    {value: 'desert' , viewValue: 'Desierto'},
    {value: 'forest' , viewValue: 'Bosque'},
    {value: 'ocean' , viewValue: 'Océano'}
  ];

  themesVertical: Theme[] = [
    {value: 'blue' , viewValue: 'Azul'},
    {value: 'green' , viewValue: 'Verde'},
    {value: 'orange' , viewValue: 'Naranja'}
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
    this.dataStorageService.storeImage(this.selectedFile);
    this.changesSaved = true;
  }

  // Seccion Experiencia
  onAddChronologic() {
    (<FormArray>this.cvForm.get('chronologicData')).push(
      new FormGroup({
        'companyName': new FormControl(null, Validators.required),
        'companyRole': new FormControl(null, [Validators.required]),
        'companyStart': new FormControl(null, [Validators.required]),
        'companyFinish': new FormControl(null),
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

  // Seccion Educacion
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

  // Seccion Habilidades
  onAddSkill() {
    (<FormArray>this.cvForm.get('skills')).push(
      new FormGroup({
        'skillName': new FormControl(null, Validators.required),
        'knowledge': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]?[0-9]{1}$|^100$/)
        ])
      })
    );
  }

  onDeleteSkill(index: number) {
    (<FormArray>this.cvForm.get('skills')).removeAt(index);
  }

  getSkillControls() {
    return (<FormArray>this.cvForm.get('skills')).controls;
  }

  // Seccion Idiomas
  onAddLanguage() {
    (<FormArray>this.cvForm.get('languages')).push(
      new FormGroup({
        'language': new FormControl(null, [Validators.required]),
        'languageKnowledge': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]?[0-9]{1}$|^100$/)
        ])
      })
    );
  }

  onDeleteLanguage(index: number) {
    (<FormArray>this.cvForm.get('languages')).removeAt(index);
  }

  getLanguageControls() {
    return (<FormArray>this.cvForm.get('languages')).controls;
  }

  // Seccion Certificaciones
  onAddCertification() {
    (<FormArray>this.cvForm.get('certificationsData')).push(
      new FormGroup({
        'certificationName': new FormControl(null, Validators.required),
        'certificationDate': new FormControl(null, [Validators.required]),
        'certificationDescription': new FormControl(null, [Validators.required]),
        'certificationURL': new FormControl(null, [
          Validators.pattern(/(^(http:\/\/www.|https:\/\/www.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+).[a-z]{2,5}(:[0-9]{1,5})?(\/.)?$)/)
        ]),
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


  // Seccion Publicaciones
  onAddPublication() {
    (<FormArray>this.cvForm.get('publicationsData')).push(
      new FormGroup({
        'publicationName': new FormControl(null, Validators.required),
        'publicationDate': new FormControl(null, [Validators.required]),
        'publicationDescription': new FormControl(null, [Validators.required]),
        'publicationURL': new FormControl(null, [
          Validators.pattern(/(^(http:\/\/www.|https:\/\/www.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+).[a-z]{2,5}(:[0-9]{1,5})?(\/.)?$)/)
        ]),
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


  // Seccion Intereses
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


  // Seccion Contacto

  onFileSelect(event) {
    if (event.target.files && event.target.files[0] && event.target.files.length > 0) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.selectFileSrc = reader.result;

      reader.readAsDataURL(file);

      this.selectedFile = <File>file;
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
    const languages = new FormArray([]);
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
      'phone2': new FormControl(null, Validators.pattern(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)
      ),
      'address': new FormControl(null),
      'personalProfile': new FormControl(null, Validators.required),
      'websiteURL': new FormControl(null, [
        Validators.pattern(/(^(http:\/\/www.|https:\/\/www.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+).[a-z]{2,5}(:[0-9]{1,5})?(\/.)?$)/)
      ]),
      // switchs
      'chronologicActive': new FormControl(false),
      'functionalActive': new FormControl(false),
      'skillsActive': new FormControl(false),
      'languagesActive': new FormControl(false),
      'certificationsActive': new FormControl(false),
      'publicationsActive': new FormControl(false),
      'interestsActive': new FormControl(false),
      'contactActive': new FormControl(false),
      // datos
      'chronologicData': chronologicData,
      'functionalData': functionalData,
      'skills': skills,
      'template': new FormControl(this.selectedTemplate, Validators.required),
      'theme':  new FormControl(this.selectedTheme, Validators.required),
      'certificationsData': certificationsData,
      'publicationsData': publicationsData,
      'interestsData': interestsData,
      'languages': languages
    });
  }

  changeSelect(e) {
    console.log(e);
    if (this.selectedTemplate === 'vertical') {
      this.selectedTheme = 'desert';
    } else {
      this.selectedTheme = 'blue';
    }
  }
  print() {
    console.log(this.cvForm.value);
  }
}
