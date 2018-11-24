import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

export class PublicationsModel {
    publicationName: string;
    publicationDate: string;
    publicationDescription: string;
    publicationURL: string;
    publicationSite: string;
    Form: FormGroup;

    constructor(pubs: any) {
      this.publicationName = pubs.publicationName;
      this.publicationDate = pubs.publicationDate;
      this.publicationDescription = pubs.publicationDescription;
      this.publicationURL = pubs.publicationURL;
      this.publicationSite = pubs.publicationSite;
    }

    private initForm(){
      this.Form = new FormGroup({
        'publicationURL': new FormControl(null, [
          Validators.required, 
          Validators.pattern(/(^(http:\/\/www.|https:\/\/www.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+).[a-z]{2,5}(:[0-9]{1,5})?(\/.)?$)/)
        ])
      })
    }
  }
