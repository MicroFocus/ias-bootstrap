import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipsPageComponent } from './tips-page.component';

describe('TipsPageComponent', () => {
  let component: TipsPageComponent;
  let fixture: ComponentFixture<TipsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
