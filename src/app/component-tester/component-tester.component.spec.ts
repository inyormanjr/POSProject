import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTesterComponent } from './component-tester.component';

describe('ComponentTesterComponent', () => {
  let component: ComponentTesterComponent;
  let fixture: ComponentFixture<ComponentTesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentTesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
