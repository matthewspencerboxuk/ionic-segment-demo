import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child2Page } from './child2.page';

describe('Child2Page', () => {
  let component: Child2Page;
  let fixture: ComponentFixture<Child2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
