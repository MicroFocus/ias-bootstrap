import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleFileComponent } from './example-file.component';

describe('ExampleFileComponent', () => {
  let component: ExampleFileComponent;
  let fixture: ComponentFixture<ExampleFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
