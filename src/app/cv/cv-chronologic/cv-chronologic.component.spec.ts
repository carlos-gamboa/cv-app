import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvChronologicComponent } from './cv-chronologic.component';

describe('CvChronologicComponent', () => {
  let component: CvChronologicComponent;
  let fixture: ComponentFixture<CvChronologicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvChronologicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvChronologicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
