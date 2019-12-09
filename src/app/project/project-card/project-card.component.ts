import { Component, Input } from '@angular/core';
import { IRepositoryInfo } from '../models';

@Component({
  selector: 'men-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {

  @Input() projectData: IRepositoryInfo;

  openInGitHub() {
    window.open(this.projectData.html_url, '_blank');
  }

}
