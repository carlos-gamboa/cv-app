import {Component, Input, OnInit} from '@angular/core';
import {Cv} from '../../models/cv.model';

@Component({
  selector: 'app-cv-functional',
  templateUrl: './cv-functional.component.html',
  styleUrls: ['./cv-functional.component.css']
})
export class CvFunctionalComponent implements OnInit {

  @Input() cv: Cv;

  constructor() { }

  ngOnInit() {
  }

}
