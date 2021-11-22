import { TestBed } from '@angular/core/testing';

import { FlightsapiService } from './flightsapi.service';

describe('FlightsapiService', () => {
  let service: FlightsapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightsapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
