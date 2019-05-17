import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPickerExampleComponent } from './color-picker-example.component';

describe('ColorPickerExampleComponent', () => {
  let component: ColorPickerExampleComponent;
  let fixture: ComponentFixture<ColorPickerExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorPickerExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPickerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
