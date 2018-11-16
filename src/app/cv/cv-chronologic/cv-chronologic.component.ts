import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-chronologic',
  templateUrl: './cv-chronologic.component.html',
  styleUrls: ['./cv-chronologic.component.css']
})
export class CvChronologicComponent implements OnInit {
  company_functions = ['Programar', 'Diseñar'];
  constructor() { }

  ngOnInit() {
  };

}
