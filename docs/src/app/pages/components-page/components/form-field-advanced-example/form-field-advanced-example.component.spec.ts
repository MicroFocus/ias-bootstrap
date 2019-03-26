import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldAdvancedExampleComponent } from './form-field-advanced-example.component';

describe('FormFieldAdvancedExampleComponent', () => {
  let component: FormFieldAdvancedExampleComponent;
  let fixture: ComponentFixture<FormFieldAdvancedExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFieldAdvancedExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldAdvancedExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
