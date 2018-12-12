import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelsExampleComponent } from './panels-example.component';

describe('PanelsExampleComponent', () => {
  let component: PanelsExampleComponent;
  let fixture: ComponentFixture<PanelsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
