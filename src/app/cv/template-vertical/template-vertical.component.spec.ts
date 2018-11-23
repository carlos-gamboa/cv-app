import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateVerticalComponent } from './template-vertical.component';

describe('TemplateVerticalComponent', () => {
  let component: TemplateVerticalComponent;
  let fixture: ComponentFixture<TemplateVerticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateVerticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
