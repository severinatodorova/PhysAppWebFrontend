import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExComponent } from './create-ex.component';

describe('CreateExComponent', () => {
  let component: CreateExComponent;
  let fixture: ComponentFixture<CreateExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
