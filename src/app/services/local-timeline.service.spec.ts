import { TestBed } from '@angular/core/testing';

import { LocalTimelineService } from './local-timeline.service';

describe('LocalTimelineService', () => {
  let service: LocalTimelineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalTimelineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
