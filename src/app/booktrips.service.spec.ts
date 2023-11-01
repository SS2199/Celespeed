import { TestBed } from '@angular/core/testing';

import { BooktripsService } from './booktrips.service';

describe('BooktripsService', () => {
  let service: BooktripsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooktripsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
