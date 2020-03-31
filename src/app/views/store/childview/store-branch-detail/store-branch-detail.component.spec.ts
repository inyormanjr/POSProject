import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreBranchDetailComponent } from './store-branch-detail.component';

describe('StoreBranchDetailComponent', () => {
  let component: StoreBranchDetailComponent;
  let fixture: ComponentFixture<StoreBranchDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreBranchDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreBranchDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
