import { TestBed } from '@angular/core/testing';

import { GitHubApiService } from './github-api.service';
import { SharedModule } from 'src/app/shared/shared.module';

describe('GitHubApiService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [SharedModule],
      providers: [GitHubApiService]
    })
  );

  it('should be created', () => {
    const service: GitHubApiService = TestBed.get(GitHubApiService);
    expect(service).toBeTruthy();
  });
});
