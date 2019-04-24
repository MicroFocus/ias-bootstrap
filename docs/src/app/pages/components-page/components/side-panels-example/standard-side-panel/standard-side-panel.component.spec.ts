import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardSidePanelComponent } from './standard-side-panel.component';

describe('StandardSidePanelComponent', () => {
  let component: StandardSidePanelComponent;
  let fixture: ComponentFixture<StandardSidePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardSidePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardSidePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
