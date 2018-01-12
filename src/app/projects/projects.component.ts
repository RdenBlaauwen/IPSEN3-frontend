import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatFormFieldModule, MatInputModule } from '@angular/material';
import { ProjectService } from '../services/project.service';
import { Project } from '../models/ProjectModel';
import { AuthService } from '../services/auth.service';
import { Employee } from '../models/Employee';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {
  private dataSource: MatTableDataSource<Project>;
  displayedColumns = ['projectName', 'projectDescription', 'customerName'];
  selectedProject: Project;
  loggedEmployeeModel: Employee;
  constructor(private projectService: ProjectService, auth: AuthService) {
    this.loggedEmployeeModel = auth.getEmployeeModel();
    this.projectService.getAllProjects().then((data) => {
      this.dataSource = new MatTableDataSource<Project>(data);
    }, (error) => console.log(error.SessionNotCreatedError));
  }

  //  MatTableDataSource function
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  //  Return promise to use to fill data
  //  !! IMPORTANT THING TO NOTE IS WE HAVE TO WAIT UNTIL WE COMPLETE THE DATA REQUEST BEFORE SHOWING !!
  // loadData(): Promise<Project[]> {
  //   return this.projectService.getAllProjects();
  // }
  selectRow(row) {
    this.selectedProject = row;
  }
  modifyProject()
  {
    this.projectService.setProjectToModify(this.selectedProject);
  }
  deleteProject()
  {
    this.projectService.removeProject(this.selectedProject);
  }
  ngOnInit() {}
}
