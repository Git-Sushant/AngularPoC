import { TestBed } from '@angular/core/testing';

import { BlogDataServiceService } from './blog-data-service.service';

describe('BlogDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogDataServiceService = TestBed.get(BlogDataServiceService);
    expect(service).toBeTruthy();
  });
});
