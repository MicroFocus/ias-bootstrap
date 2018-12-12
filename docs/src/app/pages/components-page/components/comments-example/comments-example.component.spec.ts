import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsExampleComponent } from './comments-example.component';

describe('CommentsExampleComponent', () => {
  let component: CommentsExampleComponent;
  let fixture: ComponentFixture<CommentsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
