import { TestBed, inject } from '@angular/core/testing';

import { MovieDetailServiceService } from './movie-detail-service.service';

describe('MovieDetailServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieDetailServiceService]
    });
  });

  it('should be created', inject([MovieDetailServiceService], (service: MovieDetailServiceService) => {
    expect(service).toBeTruthy();
  }));
});
