import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvSharedComponent } from './cv-shared.component';

describe('CvSharedComponent', () => {
  let component: CvSharedComponent;
  let fixture: ComponentFixture<CvSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
