import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatFormFieldModule, MatInputModule } from '@angular/material';
import { DataSource } from "@angular/cdk/table";
import { ProjectService } from "../services/project.service";
import { Project } from "../models/ProjectModel";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/shareReplay';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {

  private dataSource: ProjectDataSource | null;
  displayedColumns = ['project_name','project_description', 'project_status'];

  applyFilter(filterValue: string) {
    console.log(filterValue);
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    console.log(this.dataSource.ProjectSubject.getValue());
  }

  constructor(private projectService: ProjectService) {
    this.dataSource = new ProjectDataSource(this.projectService);
    console.log(this.dataSource.ProjectSubject.getValue());
  }

  ngOnInit() {
    this.dataSource = new ProjectDataSource(this.projectService);
    console.log(this.dataSource.ProjectSubject.getValue());
  }
}

export class ProjectDataSource extends MatTableDataSource<any>{
  ProjectObservable = this.projectService.getAllProjects();
  ProjectSubject = new BehaviorSubject<Project[]>([]);

  constructor(private projectService: ProjectService){
    super();
    this.ProjectObservable
      .subscribe(projects => this.ProjectSubject.next(projects));
    console.log(this.ProjectSubject.getValue());
  }

  connect(): BehaviorSubject<Project[]>{
    return this.ProjectSubject;
  }

  disconnect(){ }
}
