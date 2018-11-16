import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-edit',
  templateUrl: './cv-edit.component.html',
  styleUrls: ['./cv-edit.component.css']
})
export class CvEditComponent implements OnInit {
  chronologicActive = false;
  functionalActive = false;

  constructor() { }

  ngOnInit() {
  }

}
