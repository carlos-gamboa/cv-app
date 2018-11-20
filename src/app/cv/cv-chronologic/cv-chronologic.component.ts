import {Component, Input, OnInit} from '@angular/core';
import {Cv} from '../../models/cv.model';

@Component({
  selector: 'app-cv-chronologic',
  templateUrl: './cv-chronologic.component.html',
  styleUrls: ['./cv-chronologic.component.css']
})
export class CvChronologicComponent implements OnInit {
  @Input() cv: Cv;
  constructor() { }

  ngOnInit() {
    console.log('hola');
    console.log(this.cv);
  }

}
