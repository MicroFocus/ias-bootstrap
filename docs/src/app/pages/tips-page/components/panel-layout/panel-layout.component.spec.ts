import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelsLayoutComponent } from './panels-layout.component';

describe('PanelsLayoutComponent', () => {
  let component: PanelsLayoutComponent;
  let fixture: ComponentFixture<PanelsLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelsLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
