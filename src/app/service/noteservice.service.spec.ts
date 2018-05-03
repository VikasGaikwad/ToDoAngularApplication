import { TestBed, inject } from '@angular/core/testing';

import { NoteserviceService } from './noteservice.service';

describe('NoteserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoteserviceService]
    });
  });

  it('should be created', inject([NoteserviceService], (service: NoteserviceService) => {
    expect(service).toBeTruthy();
  }));
});
