import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  images = [
    '../../assets/img/horizontal1.PNG',
    '../../assets/img/horizontal2.PNG',
    '../../assets/img/vertical1.PNG',
    '../../assets/img/vertical2.PNG'
  ];
  @ViewChild('carousel') carouselRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onReadMore () {
    this.carouselRef.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
  }
}
