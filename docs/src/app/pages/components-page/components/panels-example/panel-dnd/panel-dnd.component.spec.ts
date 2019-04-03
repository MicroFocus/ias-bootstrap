import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelDndComponent } from './panel-dnd.component';

describe('PanelDndComponent', () => {
  let component: PanelDndComponent;
  let fixture: ComponentFixture<PanelDndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelDndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelDndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
