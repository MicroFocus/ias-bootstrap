import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogsExampleComponent } from './dialogs-example.component';

describe('DialogsExampleComponent', () => {
  let component: DialogsExampleComponent;
  let fixture: ComponentFixture<DialogsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
