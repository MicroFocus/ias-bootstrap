import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadersExampleComponent } from './headers-example.component';

describe('HeadersExampleComponent', () => {
  let component: HeadersExampleComponent;
  let fixture: ComponentFixture<HeadersExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadersExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadersExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
