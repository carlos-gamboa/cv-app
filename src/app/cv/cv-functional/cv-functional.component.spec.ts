import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvFunctionalComponent } from './cv-functional.component';

describe('CvFunctionalComponent', () => {
  let component: CvFunctionalComponent;
  let fixture: ComponentFixture<CvFunctionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvFunctionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvFunctionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
