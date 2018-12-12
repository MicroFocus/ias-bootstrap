import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsExampleComponent } from './tags-example.component';

describe('TagsExampleComponent', () => {
  let component: TagsExampleComponent;
  let fixture: ComponentFixture<TagsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
