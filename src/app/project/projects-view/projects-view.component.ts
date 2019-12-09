import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { GitHubApiService } from '../services/github-api.service';
import { IRepositoryInfo } from '../models';

@Component({
  selector: 'men-projects-view',
  templateUrl: './projects-view.component.html',
  styleUrls: ['./projects-view.component.scss']
})
export class ProjectsViewComponent implements OnInit {

  constructor(private gitHubApiService: GitHubApiService) { }

  projects$: Observable<IRepositoryInfo>;

  ngOnInit() {
    // this.gitHubApiService.getUserData('mennoguldemond').subscribe(x => {
    //   console.log(x);
    // });
    this.projects$ = this.gitHubApiService.getUserRepos('mennoguldemond');
  }

}
