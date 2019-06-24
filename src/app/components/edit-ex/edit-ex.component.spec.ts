import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExComponent } from './edit-ex.component';

describe('EditExComponent', () => {
  let component: EditExComponent;
  let fixture: ComponentFixture<EditExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
