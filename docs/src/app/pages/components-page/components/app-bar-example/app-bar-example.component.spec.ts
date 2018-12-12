import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBarExampleComponent } from './app-bar-example.component';

describe('AppBarExampleComponent', () => {
  let component: AppBarExampleComponent;
  let fixture: ComponentFixture<AppBarExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBarExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBarExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
