import { TestBed } from '@angular/core/testing';

import { MeteoApiService } from './meteo-api.service';

describe('MeteoApiService', () => {
  let service: MeteoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeteoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
