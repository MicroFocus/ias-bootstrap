import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusMessagesExampleComponent } from './status-messages-example.component';

describe('StatusMessagesExampleComponent', () => {
  let component: StatusMessagesExampleComponent;
  let fixture: ComponentFixture<StatusMessagesExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusMessagesExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusMessagesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
