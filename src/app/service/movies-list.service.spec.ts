import { TestBed, inject } from '@angular/core/testing';

import { MoviesListService } from './movies-list.service';

describe('MoviesListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoviesListService]
    });
  });

  it('should be created', inject([MoviesListService], (service: MoviesListService) => {
    expect(service).toBeTruthy();
  }));
});
