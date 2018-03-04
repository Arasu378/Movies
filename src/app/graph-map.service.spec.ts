import { TestBed, inject } from '@angular/core/testing';

import { GraphMapService } from './graph-map.service';

describe('GraphMapService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GraphMapService]
    });
  });

  it('should be created', inject([GraphMapService], (service: GraphMapService) => {
    expect(service).toBeTruthy();
  }));
});
