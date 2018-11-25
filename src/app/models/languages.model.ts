import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

export class LanguagesModel {

    language: string;
    knowledge: number;
    Form: FormGroup;
  
    constructor(languages: any) {
      this.language = languages.language;
      this.knowledge = languages.knowledge;
    }

    private initForm(){
      this.Form = new FormGroup({
        'knowledge': new FormControl(null, [
          Validators.required, 
          Validators.pattern(/^[1-9]?[0-9]{1}$|^100$/)
        ])
      })
    }
  }
  