import { NgModule } from '@angular/core';

import { ProjectRoutingModule } from './project-routing.module';
import { GitHubApiService } from './services/github-api.service';
import { ProjectsViewComponent } from './projects-view/projects-view.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProjectsViewComponent,
    ProjectCardComponent
  ],
  imports: [
    SharedModule,
    ProjectRoutingModule
  ],
  providers: [
    GitHubApiService
  ]
})
export class ProjectModule {}
