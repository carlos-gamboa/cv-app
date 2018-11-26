import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  images = [
    '../../assets/img/horizontal_desert.png',
    '../../assets/img/horizontal_forest.png',
    '../../assets/img/horizontal_ocean.png',
    '../../assets/img/Vertical_blue.png'
  ];
  constructor() { }

  ngOnInit() {
  }

}
