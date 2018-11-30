import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateHorizontalComponent } from './template-horizontal.component';

describe('TemplateHorizontalComponent', () => {
  let component: TemplateHorizontalComponent;
  let fixture: ComponentFixture<TemplateHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
