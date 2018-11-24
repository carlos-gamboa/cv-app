import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

export class CertificationsModel {
    certificationName: string;
    certificationDate: string;
    certificationDescription: string;
    certificationURL: string;
    certificationSchool: string;
    Form: FormGroup;

    constructor(cert: any) {
      this.certificationName = cert.certificationName;
      this.certificationDate = cert.certificationDate;
      this.certificationDescription = cert.certificationDescription;
      this.certificationURL = cert.certificationURL;
      this.certificationSchool = cert.certificationSchool;
    }

    private initForm(){
      this.Form = new FormGroup({
        'certificationURL': new FormControl(null, [
          Validators.required, 
          Validators.pattern(/(^(http:\/\/www.|https:\/\/www.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+).[a-z]{2,5}(:[0-9]{1,5})?(\/.)?$)/)
        ])
      })
    }
  }
