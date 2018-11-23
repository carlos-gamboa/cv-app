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
  elements: any[] = [];
  currentSection: string;
  id: string;

  @Input() cv: Cv;
  @ViewChild('home') set contentHome(content: ElementRef) {
    this.elements['home'] = content;
  }
  @ViewChild('about') set contentAbout(content: ElementRef) {
    this.elements['about'] = content;
  }
  @ViewChild('resume') set contentResume(content: ElementRef) {
    this.elements['resume'] = content;
  }
  @ViewChild('skills') set contentSkills(content: ElementRef) {
    this.elements['skills'] = content;
  }
  @ViewChild('certifications') set contentCertifications(content: ElementRef) {
    this.elements['certifications'] = content;
  }
  @ViewChild('publications') set contentPublications(content: ElementRef) {
    this.elements['publications'] = content;
  }
  @ViewChild('interests') set contentInterests(content: ElementRef) {
    this.elements['interests'] = content;
  }
  @ViewChild('contact') set contentContact(content: ElementRef) {
    this.elements['contact'] = content;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.currentSection = 'home';
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
    if (
      (this.elements['contact']) &&
      (window.scrollY > (this.elements['contact'].nativeElement.getBoundingClientRect().top + window.scrollY))
    ) {
      this.currentSection = 'contact';
    } else if (
      (this.elements['interests']) &&
      (window.scrollY > (this.elements['interests'].nativeElement.getBoundingClientRect().top + window.scrollY))
    ) {
      this.currentSection = 'interests';
    } else if (
      (this.elements['publications']) &&
      (window.scrollY > (this.elements['publications'].nativeElement.getBoundingClientRect().top + window.scrollY))
    ) {
      this.currentSection = 'publications';
    } else if (
      (this.elements['certifications']) &&
      (window.scrollY > (this.elements['certifications'].nativeElement.getBoundingClientRect().top + window.scrollY))
    ) {
      this.currentSection = 'certifications';
    } else if (
      (this.elements['resume']) &&
      (window.scrollY > (this.elements['resume'].nativeElement.getBoundingClientRect().top + window.scrollY))
    ) {
      this.currentSection = 'resume';
    } else if (
      (this.elements['skills']) &&
      (window.scrollY > (this.elements['skills'].nativeElement.getBoundingClientRect().top + window.scrollY))
    ) {
      this.currentSection = 'skills';
    } else if (
      (this.elements['about']) &&
      (window.scrollY > (this.elements['about'].nativeElement.getBoundingClientRect().top + window.scrollY))
    ) {
      this.currentSection = 'about';
    } else if (this.elements['home']) {
      this.currentSection = 'home';
    }
  }

  private scrollTo(element: string) {
    setTimeout(() => {
      this.elements[element].nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
      this.currentSection = element;
    }, 50);
  }

}
