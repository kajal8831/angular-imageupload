import { TestBed } from '@angular/core/testing';

import { SaveimageService } from './saveimage.service';

describe('SaveimageService', () => {
  let service: SaveimageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveimageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
