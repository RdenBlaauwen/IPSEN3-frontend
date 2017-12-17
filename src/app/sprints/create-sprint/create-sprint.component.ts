import { Component, OnInit } from '@angular/core';
import { SprintModel } from '../../models/SprintModel';
import { SprintService } from '../../services/sprint.service';
import { FormControl } from '@angular/forms';
import { MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { Project } from '../../models/ProjectModel';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-create-sprint',
  templateUrl: './create-sprint.component.html',
  styleUrls: ['./create-sprint.component.css']
})
export class CreateSprintComponent {
  date = new Date().toDateString();
  serializedDate = new FormControl((new Date()).toISOString());
  sprint: SprintModel = new SprintModel();
  projects: Project[];
  selectedProject: number;
  startDate: string;
  constructor(private sprintService: SprintService) {
    this.projects = sprintService.getAllProjects();
   }
  
  createSprint()
  {
    this.sprint.projectFK = this.selectedProject;
    this.sprintService.postSprintModel(this.sprint);
  }

}