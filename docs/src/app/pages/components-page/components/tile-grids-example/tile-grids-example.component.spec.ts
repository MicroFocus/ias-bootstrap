import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TileGridsExampleComponent } from './tile-grids-example.component';

describe('TileGridsExampleComponent', () => {
  let component: TileGridsExampleComponent;
  let fixture: ComponentFixture<TileGridsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TileGridsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TileGridsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
