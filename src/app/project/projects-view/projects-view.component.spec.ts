import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsViewComponent } from './projects-view.component';
import { SharedModule } from '../../shared/shared.module';
import { GitHubApiService } from '../services/github-api.service';
import { ProjectCardComponent } from '../project-card/project-card.component';

describe('ProjectsViewComponent', () => {
  let component: ProjectsViewComponent;
  let fixture: ComponentFixture<ProjectsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ProjectsViewComponent, ProjectCardComponent],
      providers: [GitHubApiService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
