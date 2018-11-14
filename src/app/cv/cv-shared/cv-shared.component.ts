import { Component, OnInit } from '@angular/core';
import {CvSharedModel} from '../../models/cv-shared.model';

@Component({
  selector: 'app-cv-shared',
  templateUrl: './cv-shared.component.html',
  styleUrls: ['./cv-shared.component.css']
})
export class CvSharedComponent implements OnInit {

  selectFileSrc = '../../../assets/img/profile_default.png';
  formData: CvSharedModel;
  constructor() {
    this.formData = new CvSharedModel();
  }

  ngOnInit() {
  }

  onFileSelect(event) {
    if (event.target.files && event.target.files[0] && event.target.files.length > 0) {
      this.formData.profilePicture = event.target.files[0];
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.selectFileSrc = reader.result;

      reader.readAsDataURL(file);
    }

    console.log(event);
  }



  display() {
    console.log(this.formData);
    return false;
  }


}
