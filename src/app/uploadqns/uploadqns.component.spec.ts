import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadqnsComponent } from './uploadqns.component';

describe('UploadqnsComponent', () => {
  let component: UploadqnsComponent;
  let fixture: ComponentFixture<UploadqnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadqnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadqnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
