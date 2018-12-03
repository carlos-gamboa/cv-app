import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {DataStorageService} from '../services/data-storage.service';
import {CvService} from '../services/cv.service';
import {AuthService} from '../services/auth.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {environment} from '../../environments/environment';

export interface SelectOption {
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
  cvForm: FormGroup;
  selectedTemplate = 'vertical';
  selectedTheme = 'blue';

  selectedTitleFont = 'latoTitle';
  selectedTextFont = 'latoText';

  templates: SelectOption[] = [
    {value: 'horizontal', viewValue: 'Horizontal'},
    {value: 'vertical', viewValue: 'Vertical'}
  ];

  themesHorizontal: SelectOption[] = [
    {value: 'desert' , viewValue: 'Desierto'},
    {value: 'forest' , viewValue: 'Bosque'},
    {value: 'ocean' , viewValue: 'Océano'}
  ];

  themesVertical: SelectOption[] = [
    {value: 'blue' , viewValue: 'Azul'},
    {value: 'green' , viewValue: 'Verde'},
    {value: 'orange' , viewValue: 'Naranja'}
  ];

  previewIds = {
    vertical : {
      blue: '2NFQLCRQBJXykpy3jqxylRQSkYY1',
      green: '2NFQLCRQBJXykpy3jqxylRQSkYX2',
      orange: '2NFQLCRQBJXykpy3jqxylRQSkYY3'
    },
    horizontal : {
      desert: '2NFQLCRQBJXykpy3jqxylRQSkYY4',
      forest: '2NFQLCRQBJXykpy3jqxylRQSkYY5',
      ocean: '2NFQLCRQBJXykpy3jqxylRQSkYY6'
    }
  };

  fontsTitle: SelectOption[] = [
    {value: 'latoTitle', viewValue: 'Lato'},
    {value: 'georgiaTitle', viewValue: 'Georgia'},
    {value: 'openTitle', viewValue: 'OpenSans'},
    {value: 'libreTitle', viewValue: 'Libre Baskerville'}
  ];

  fontsText: SelectOption[] = [
    {value: 'latoText', viewValue: 'Lato'},
    {value: 'georgiaText', viewValue: 'Georgia'},
    {value: 'openText', viewValue: 'OpenSans'},
    {value: 'libreText', viewValue: 'Libre Baskerville'}
  ];

  skillsDisplay: SelectOption[] = [
    {value: 'circle' , viewValue: 'Círculo'},
    {value: 'bar' , viewValue: 'Barra'},
    {value: 'stars' , viewValue: 'Estrellas'}
  ];

  languageDisplays: SelectOption[] = [
    {value: 'percentage', viewValue: 'Porcentaje'},
    {value: 'text', viewValue: 'Nivel'}
  ];

  languageLevels: SelectOption[] = [
    {value: 'basico', viewValue: 'Básico'},
    {value: 'competente', viewValue: 'Competente'},
    {value: 'inter', viewValue: 'Intermedio'},
    {value: 'tecnico', viewValue: 'Técnico'},
    {value: 'experto', viewValue: 'Experto'},
    {value: 'nativo', viewValue: 'Nativo'},
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
    const socialMediaData = new FormGroup({
      'facebook': new FormControl(null, [
        Validators.pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)
      ]),
      'twitter': new FormControl(null, [
        Validators.pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)
      ]),
      'linkedin': new FormControl(null, [
        Validators.pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)
      ]),
      'instagram': new FormControl(null, [
        Validators.pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)
      ]),
      'googleplus': new FormControl(null, [
        Validators.pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)
      ]),
      'websiteURL': new FormControl(null, [
        Validators.pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)
      ]),
      'skype': new FormControl(null, [
        Validators.pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)
      ])
    });
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
        Validators.pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)
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
      'socialMediaActive': new FormControl(),
      // datos
      'chronologicData': chronologicData,
      'functionalData': functionalData,
      'skills': skills,
      'template': new FormControl('vertical', Validators.required),
      'theme':  new FormControl('blue', Validators.required),
      'certificationsData': certificationsData,
      'publicationsData': publicationsData,
      'interestsData': interestsData,
      'languages': languages,
      'socialMediaData': socialMediaData,
      // Customization
      'languageDisplay': new FormControl('percentage', Validators.required),
      'skillsDisplay': new FormControl('circle', Validators.required),
      'percentageDisplay': new FormControl('circle', Validators.required),
      'titleFont':  new FormControl('latoTitle', Validators.required),
      'textFont' : new FormControl('latoText', Validators.required),
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

  changeTheme(newValue) {
    console.log(newValue);
    this.selectedTheme = newValue;
  }


  print() {
    console.log(this.cvForm.value);
  }

  openPreview() {
      if (this.selectedTemplate === 'vertical') {
        if (this.selectedTheme === 'blue') {
          window.open(environment.activeUrl + '/cv/' + this.previewIds.vertical.blue, '_blank');
        } else if (this.selectedTheme === 'green') {
          window.open(environment.activeUrl + '/cv/' + this.previewIds.vertical.green, '_blank');
        } else { // orange
          window.open(environment.activeUrl + '/cv/' + this.previewIds.vertical.orange, '_blank');
        }
      } else { // horizontal
        if (this.selectedTheme === 'desert') {
          window.open(environment.activeUrl + '/cv/' + this.previewIds.horizontal.desert, '_blank');
        } else if (this.selectedTheme === 'forest') {
          window.open(environment.activeUrl + '/cv/' + this.previewIds.horizontal.forest, '_blank');
        } else { // ocean
          window.open(environment.activeUrl + '/cv/' + this.previewIds.horizontal.ocean, '_blank');
        }
      }
    }
}
