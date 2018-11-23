import {Component, Input, OnInit} from '@angular/core';
import {CvSharedModel} from '../../models/cv-shared.model';
import {Cv} from '../../models/cv.model';

@Component({
  selector: 'app-cv-shared',
  templateUrl: './cv-shared.component.html',
  styleUrls: ['./cv-shared.component.css']
})
export class CvSharedComponent implements OnInit {

  @Input() cv: Cv;

  constructor() {
  }

  ngOnInit() {
  }
}
