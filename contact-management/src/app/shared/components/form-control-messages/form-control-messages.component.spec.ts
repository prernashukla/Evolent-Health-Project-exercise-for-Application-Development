import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlMessagesComponent } from './form-control-messages.component';

describe('FormControlMessagesComponent', () => {
  let component: FormControlMessagesComponent;
  let fixture: ComponentFixture<FormControlMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormControlMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormControlMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
