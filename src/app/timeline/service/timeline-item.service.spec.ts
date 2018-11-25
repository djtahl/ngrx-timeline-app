import { TestBed } from '@angular/core/testing';

import { TimelineItemService } from './timeline-item.service';

describe('TimelineItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimelineItemService = TestBed.get(TimelineItemService);
    expect(service).toBeTruthy();
  });
});
