import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ct2Component } from './ct2.component';

describe('Ct2Component', () => {
  let component: Ct2Component;
  let fixture: ComponentFixture<Ct2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ct2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ct2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
