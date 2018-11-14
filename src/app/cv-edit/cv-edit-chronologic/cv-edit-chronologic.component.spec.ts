import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvEditChronologicComponent } from './cv-edit-chronologic.component';

describe('CvEditChronologicComponent', () => {
  let component: CvEditChronologicComponent;
  let fixture: ComponentFixture<CvEditChronologicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvEditChronologicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvEditChronologicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
