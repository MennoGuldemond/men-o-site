import { TestBed } from '@angular/core/testing';

import { GitHubApiService } from './github-api.service';

describe('GitHubApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitHubApiService = TestBed.get(GitHubApiService);
    expect(service).toBeTruthy();
  });
});
