import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvEditFunctionalComponent } from './cv-edit-functional.component';

describe('CvEditFunctionalComponent', () => {
  let component: CvEditFunctionalComponent;
  let fixture: ComponentFixture<CvEditFunctionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvEditFunctionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvEditFunctionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
