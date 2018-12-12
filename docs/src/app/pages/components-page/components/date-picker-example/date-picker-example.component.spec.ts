import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerExampleComponent } from './date-picker-example.component';

describe('DatePickerExampleComponent', () => {
  let component: DatePickerExampleComponent;
  let fixture: ComponentFixture<DatePickerExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatePickerExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
