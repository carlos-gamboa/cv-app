import {Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {Cv} from '../../models/cv.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-template-vertical',
  templateUrl: './template-vertical.component.html',
  styleUrls: [
    './template-vertical.component.css',
    './styles/animate.css',
    './styles/flexslider.css',
    './styles/icomoon.css'
  ]
})
export class TemplateVerticalComponent implements OnInit {
  @Input() cv: Cv;
  @ViewChild('home') public home: ElementRef;
  @ViewChild('about') public about: ElementRef;
  @ViewChild('resume') public resume: ElementRef;
  @ViewChild('publications') public publications: ElementRef;
  @ViewChild('interests') public interests: ElementRef;
  @ViewChild('contact') public contact: ElementRef;
  elements: any[] = [];
  currentSection: string;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.currentSection = 'home';
    this.elements['home'] = this.home;
    this.elements['about'] = this.about;
    this.elements['resume'] = this.resume;
    this.elements['publications'] = this.publications;
    this.elements['interests'] = this.interests;
    this.elements['contact'] = this.contact;
    this.route.fragment.subscribe(
      (fragment: string) => {
        if (fragment) {
          this.scrollTo(fragment);
        }
      });
    this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
      }
    );
  }

  @HostListener('window:scroll', ['$event'])
  doSomething(event) {
    if (window.scrollY > (this.contact.nativeElement.getBoundingClientRect().top + window.scrollY)) {
      this.currentSection = 'contact';
    } else if (window.scrollY > (this.interests.nativeElement.getBoundingClientRect().top + window.scrollY)) {
      this.currentSection = 'interests';
    } else if (window.scrollY > (this.publications.nativeElement.getBoundingClientRect().top + window.scrollY)) {
      this.currentSection = 'publications';
    } else if (window.scrollY > (this.resume.nativeElement.getBoundingClientRect().top + window.scrollY)) {
      this.currentSection = 'resume';
    } else if (window.scrollY > (this.about.nativeElement.getBoundingClientRect().top + window.scrollY)) {
      this.currentSection = 'about';
    } else {
      this.currentSection = 'home';
    }
  }

  private scrollTo(element: string) {
    this.elements[element].nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
    console.log(this.elements[element].nativeElement.getBoundingClientRect().top + window.scrollY);
    this.currentSection = element;
  }

}
