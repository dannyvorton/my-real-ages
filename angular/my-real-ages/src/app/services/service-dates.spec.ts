import { TestBed } from '@angular/core/testing';

import { ServiceDates } from './service-dates';

describe('ServiceDates', () => {
  let service: ServiceDates;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceDates);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
