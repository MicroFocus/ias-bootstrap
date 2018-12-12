import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsExampleComponent } from './buttons-example.component';

describe('ButtonsExampleComponent', () => {
  let component: ButtonsExampleComponent;
  let fixture: ComponentFixture<ButtonsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
