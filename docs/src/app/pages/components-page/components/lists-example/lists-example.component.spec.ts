import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsExampleComponent } from './lists-example.component';

describe('ListsExampleComponent', () => {
  let component: ListsExampleComponent;
  let fixture: ComponentFixture<ListsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
