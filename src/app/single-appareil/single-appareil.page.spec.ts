import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAppareilPage } from './single-appareil.page';

describe('SingleAppareilPage', () => {
  let component: SingleAppareilPage;
  let fixture: ComponentFixture<SingleAppareilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleAppareilPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleAppareilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
