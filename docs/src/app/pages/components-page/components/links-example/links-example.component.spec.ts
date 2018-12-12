import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksExampleComponent } from './links-example.component';

describe('LinksExampleComponent', () => {
  let component: LinksExampleComponent;
  let fixture: ComponentFixture<LinksExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinksExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
