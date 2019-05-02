import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidePanelsExampleComponent } from './side-panels-example.component';

describe('SidePanelsExampleComponent', () => {
  let component: SidePanelsExampleComponent;
  let fixture: ComponentFixture<SidePanelsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidePanelsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidePanelsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
