import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TilesExampleComponent } from './tiles-example.component';

describe('TilesExampleComponent', () => {
  let component: TilesExampleComponent;
  let fixture: ComponentFixture<TilesExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TilesExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TilesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
