import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupLayoutComponent } from './group-layout.component';

describe('GroupLayoutComponent', () => {
  let component: GroupLayoutComponent;
  let fixture: ComponentFixture<GroupLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
