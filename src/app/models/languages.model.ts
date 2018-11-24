import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

export class LanguagesModel {

    language: string;
    knowledge: number;
    Form: FormGroup;
  
    constructor(skill: any) {
      this.language = skill.skillName;
      this.knowledge = skill.knowledge;
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
  