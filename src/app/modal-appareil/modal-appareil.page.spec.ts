import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAppareilPage } from './modal-appareil.page';

describe('ModalAppareilPage', () => {
  let component: ModalAppareilPage;
  let fixture: ComponentFixture<ModalAppareilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAppareilPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAppareilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
