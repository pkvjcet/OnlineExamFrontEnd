import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollstudentsComponent } from './enrollstudents.component';

describe('EnrollstudentsComponent', () => {
  let component: EnrollstudentsComponent;
  let fixture: ComponentFixture<EnrollstudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrollstudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrollstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
