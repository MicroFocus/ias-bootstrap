import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardLayoutComponent } from './standard-layout.component';

describe('StandardLayoutComponent', () => {
  let component: StandardLayoutComponent;
  let fixture: ComponentFixture<StandardLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
