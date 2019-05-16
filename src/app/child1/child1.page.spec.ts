import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Child1Page } from './child1.page';

describe('Child1Page', () => {
  let component: Child1Page;
  let fixture: ComponentFixture<Child1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
