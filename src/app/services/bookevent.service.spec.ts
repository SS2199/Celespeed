import { TestBed } from '@angular/core/testing';

import { BookEventService } from './bookevent.service';

describe('BookeventService', () => {
  let service: BookEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
