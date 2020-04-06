import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreManagementComponent } from './store-management.component';

describe('StoreManagementComponent', () => {
  let component: StoreManagementComponent;
  let fixture: ComponentFixture<StoreManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
