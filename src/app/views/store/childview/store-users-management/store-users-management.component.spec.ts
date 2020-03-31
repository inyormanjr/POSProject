import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreUsersManagementComponent } from './store-users-management.component';

describe('StoreUsersManagementComponent', () => {
  let component: StoreUsersManagementComponent;
  let fixture: ComponentFixture<StoreUsersManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreUsersManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreUsersManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
