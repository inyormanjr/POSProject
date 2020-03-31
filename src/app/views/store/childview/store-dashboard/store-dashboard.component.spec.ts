import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreDashboardComponent } from './store-dashboard.component';

describe('StoreDashboardComponent', () => {
  let component: StoreDashboardComponent;
  let fixture: ComponentFixture<StoreDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
