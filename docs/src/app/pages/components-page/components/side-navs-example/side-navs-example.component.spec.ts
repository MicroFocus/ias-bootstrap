import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavsExampleComponent } from './side-navs-example.component';

describe('SideNavsExampleComponent', () => {
  let component: SideNavsExampleComponent;
  let fixture: ComponentFixture<SideNavsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
