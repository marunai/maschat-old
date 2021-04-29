import { TestBed } from '@angular/core/testing';

import { PublicTimelineService } from './public-timeline.service';

describe('PublicTimelineService', () => {
  let service: PublicTimelineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicTimelineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
