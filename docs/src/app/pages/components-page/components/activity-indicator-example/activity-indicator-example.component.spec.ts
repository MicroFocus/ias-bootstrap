import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityIndicatorExampleComponent } from './activity-indicator-example.component';

describe('ActivityIndicatorExampleComponent', () => {
  let component: ActivityIndicatorExampleComponent;
  let fixture: ComponentFixture<ActivityIndicatorExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityIndicatorExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityIndicatorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
