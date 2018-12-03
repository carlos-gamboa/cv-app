import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {DataStorageService} from '../services/data-storage.service';
import {CvService} from '../services/cv.service';
import {AuthService} from '../services/auth.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Cv} from '../models/cv.model';
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
  readyToShow = false;
  uid: number;
  cv: Cv = null;
  editMode = false;
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
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/home']);
    }
    this.route.params.subscribe(
      (params: Params) => {
        if (params['id'] != null) {
          this.editMode = true;
          this.uid = params['id'];
          if (this.authService.getCurrentUserId() !== params['id']) {
            this.router.navigate([`/cv/${params['id']}`]);
          }
          this.dataStorageService.getCv(this.uid.toString()).then((cv: Cv) => {
            this.cv = cv;
            this.initForm();
            this.readyToShow = true;
          });
        } else {
          this.initForm();
          this.readyToShow = true;
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
        'languageLevel': new FormControl('inter', Validators.required),
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
  }

  private initForm() {
    let name = null;
    let title = null;
    let introduction = null;
    let mail = null;
    let phone1 = null;
    let phone2 = null;
    let address = null;
    let personalProfile = null;
    let chronologicActive = false;
    let functionalActive = false;
    let skillsActive = false;
    let languagesActive = false;
    let certificationsActive = false;
    let publicationsActive = false;
    let interestsActive = false;
    let contactActive = false;
    let socialMediaActive = false;
    let template = 'vertical';
    let theme = 'blue';
    let languageDisplay = 'percentage';
    let skillsDisplay = 'circle';
    let percentageDisplay = 'circle';
    let titleFont = 'latoTitle';
    let textFont = 'latoText';
    let facebook = null;
    let twitter = null;
    let linkedin = null;
    let instagram = null;
    let google = null;
    let skype = null;
    let website = null;

    const chronologicData = new FormArray([]);
    const functionalData = new FormArray([]);
    const skills = new FormArray([]);
    const certificationsData = new FormArray([]);
    const publicationsData = new FormArray([]);
    const interestsData = new FormArray([]);
    const languages = new FormArray([]);

    if (this.editMode) {
      name = this.cv.name;
      title = this.cv.title;
      introduction = this.cv.introduction;
      mail = this.cv.mail;
      phone1 = this.cv.phone1;
      phone2 = this.cv.phone2;
      address = this.cv.address;
      personalProfile = this.cv.personalProfile;
      chronologicActive = this.cv.chronologicActive;
      functionalActive = this.cv.functionalActive;
      skillsActive = this.cv.skillsActive;
      languagesActive = this.cv.languagesActive;
      certificationsActive = this.cv.certificationsActive;
      publicationsActive = this.cv.publicationsActive;
      interestsActive = this.cv.interestsActive;
      contactActive = this.cv.contactActive;
      socialMediaActive = this.cv.socialMediaActive;
      template = this.cv.template;
      theme = this.cv.theme;
      languageDisplay = this.cv.languageDisplay;
      skillsDisplay = this.cv.skillsDisplay;
      percentageDisplay = this.cv.percentageDisplay;
      titleFont = this.cv.titleFont;
      textFont = this.cv.textFont;

      this.selectedTemplate = template;
      this.selectedTextFont = textFont;
      this.selectedTheme = theme;
      this.selectedTitleFont = titleFont;

      if (this.cv['socialMediaData']) {
        facebook = this.cv.socialMediaData.facebook;
        twitter = this.cv.socialMediaData.twitter;
        linkedin = this.cv.socialMediaData.linkedin;
        instagram = this.cv.socialMediaData.instagram;
        google = this.cv.socialMediaData.googleplus;
        website = this.cv.socialMediaData.websiteURL;
        skype = this.cv.socialMediaData.skype;
      }

      if (this.cv['chronologicData']) {
        for (const chrono of this.cv.chronologicData) {
          chronologicData.push(
            new FormGroup({
              'companyName': new FormControl(chrono.companyName, Validators.required),
              'companyRole': new FormControl(chrono.companyRole, [Validators.required]),
              'companyStart': new FormControl(chrono.companyStart, [Validators.required]),
              'companyFinish': new FormControl(chrono.companyFinish),
              'companyFunction': new FormControl(chrono.companyFunction, [Validators.required])
            })
          );
        }
      }

      if (this.cv['functionalData']) {
        for (const func of this.cv.functionalData) {
          functionalData.push(
            new FormGroup({
              'schoolName': new FormControl(func.schoolName, Validators.required),
              'schoolTitle': new FormControl(func.schoolTitle, [Validators.required]),
              'schoolCity': new FormControl(func.schoolCity, [Validators.required]),
              'schoolYear': new FormControl(func.schoolYear, [Validators.required])
            })
          );
        }
      }

      if (this.cv['skills']) {
        for (const skill of this.cv.skills) {
          skills.push(
            new FormGroup({
              'skillName': new FormControl(skill.skillName, Validators.required),
              'knowledge': new FormControl(skill.knowledge, [
                Validators.required,
                Validators.pattern(/^[1-9]?[0-9]{1}$|^100$/)
              ])
            })
          );
        }
      }

      if (this.cv['certificationsData']) {
        for (const cert of this.cv.certificationsData) {
          certificationsData.push(
            new FormGroup({
              'certificationName': new FormControl(cert.certificationName, Validators.required),
              'certificationDate': new FormControl(cert.certificationDate, [Validators.required]),
              'certificationDescription': new FormControl(cert.certificationDescription, [Validators.required]),
              'certificationURL': new FormControl(cert.certificationURL, [
                Validators.pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)
              ]),
              'certificationSchool': new FormControl(cert.certificationSchool, Validators.required)
            })
          );
        }
      }

      if (this.cv['publicationsData']) {
        for (const publication of this.cv.publicationsData) {
          publicationsData.push(
            new FormGroup({
              'publicationName': new FormControl(publication.publicationName, Validators.required),
              'publicationDate': new FormControl(publication.publicationDate, [Validators.required]),
              'publicationDescription': new FormControl(publication.publicationDescription, [Validators.required]),
              'publicationURL': new FormControl(publication.publicationURL, [
                Validators.pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)
              ]),
              'publicationSite': new FormControl(publication.publicationSite, Validators.required)
            })
          );
        }
      }

      if (this.cv['interestsData']) {
        for (const interest of this.cv.interestsData) {
          interestsData.push(
            new FormGroup({
              'interestText': new FormControl(interest.interestText, Validators.required),
              'interestName': new FormControl(interest.interestName, Validators.required)
            })
          );
        }
      }

      if (this.cv['languages']) {
        for (const lang of this.cv.languages) {
          languages.push(
            new FormGroup({
              'language': new FormControl(lang.language, [Validators.required]),
              'languageLevel': new FormControl(lang.languageLevel, Validators.required),
              'languageKnowledge': new FormControl(lang.languageKnowledge, [
                Validators.required,
                Validators.pattern(/^[1-9]?[0-9]{1}$|^100$/)
              ])
            })
          );
        }
      }
    }

    const socialMediaData = new FormGroup({
      'facebook': new FormControl(facebook, [
        Validators.pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)
      ]),
      'twitter': new FormControl(twitter, [
        Validators.pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)
      ]),
      'linkedin': new FormControl(linkedin, [
        Validators.pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)
      ]),
      'instagram': new FormControl(instagram, [
        Validators.pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)
      ]),
      'googleplus': new FormControl(google, [
        Validators.pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)
      ]),
      'websiteURL': new FormControl(website, [
        Validators.pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)
      ]),
      'skype': new FormControl(skype, [
        Validators.pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)
      ])
    });
    this.cvForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'title': new FormControl(title, Validators.required),
      'introduction': new FormControl(introduction, Validators.required),
      'mail': new FormControl(mail, [
        Validators.required,
        Validators.email
      ]),
      'phone1': new FormControl(phone1, [
        Validators.required,
        Validators.pattern(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)
      ]),
      'phone2': new FormControl(phone2, Validators.pattern(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)
      ),
      'address': new FormControl(address),
      'personalProfile': new FormControl(personalProfile, Validators.required),
      // switchs
      'chronologicActive': new FormControl(chronologicActive),
      'functionalActive': new FormControl(functionalActive),
      'skillsActive': new FormControl(skillsActive),
      'languagesActive': new FormControl(languagesActive),
      'certificationsActive': new FormControl(certificationsActive),
      'publicationsActive': new FormControl(publicationsActive),
      'interestsActive': new FormControl(interestsActive),
      'contactActive': new FormControl(contactActive),
      'socialMediaActive': new FormControl(socialMediaActive),
      // datos
      'chronologicData': chronologicData,
      'functionalData': functionalData,
      'skills': skills,
      'certificationsData': certificationsData,
      'publicationsData': publicationsData,
      'interestsData': interestsData,
      'languages': languages,
      'socialMediaData': socialMediaData,
      // Customization
      'template': new FormControl(template, Validators.required),
      'theme':  new FormControl(theme, Validators.required),
      'languageDisplay': new FormControl(languageDisplay, Validators.required),
      'skillsDisplay': new FormControl(skillsDisplay, Validators.required),
      'percentageDisplay': new FormControl(percentageDisplay, Validators.required),
      'titleFont':  new FormControl(titleFont, Validators.required),
      'textFont' : new FormControl(textFont, Validators.required),
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
    this.selectedTheme = newValue;
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
