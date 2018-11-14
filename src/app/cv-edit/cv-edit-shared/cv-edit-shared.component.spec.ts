import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvEditSharedComponent } from './cv-edit-shared.component';

describe('CvEditSharedComponent', () => {
  let component: CvEditSharedComponent;
  let fixture: ComponentFixture<CvEditSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvEditSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvEditSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
