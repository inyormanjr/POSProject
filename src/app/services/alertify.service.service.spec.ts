import { TestBed } from '@angular/core/testing';

import { AlertifyService } from './alertify.service';

describe('Alertify.ServiceService', () => {
  let service: AlertifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
