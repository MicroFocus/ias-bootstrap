import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidationExampleComponent } from './form-validation-example.component';

describe('FormValidationExampleComponent', () => {
  let component: FormValidationExampleComponent;
  let fixture: ComponentFixture<FormValidationExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormValidationExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValidationExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
