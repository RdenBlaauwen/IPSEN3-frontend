import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatFormFieldModule, MatInputModule } from '@angular/material';

@Component({
  selector: 'app-sprints',
  templateUrl: './sprints.component.html',
  styleUrls: ['./sprints.component.css']
})
export class SprintsComponent implements OnInit {
  displayedColumns: any[];
  dataSource;
  sprintData: Sprint[];
  constructor() {
    this.displayedColumns = ['sprint_name', 'project_name', 'sprint_description', 'sprint_start_date', 'sprint_end_date'];
    this.sprintData  = [
      {sprint_name: 'Sprint 1', project_name: 'Actus', sprint_description: 'Sprint number 1', sprint_start_date: "21-12-2017", sprint_end_date: '28-12-2017'},
      {sprint_name: 'Sprint 2', project_name: 'Actus', sprint_description: 'Sprint number 2', sprint_start_date: "28-12-2017", sprint_end_date: '5-01-2018'},
      {sprint_name: 'Testing', project_name: 'Kitten!', sprint_description: 'This one is just for tests.', sprint_start_date: "Need to change this to datetype", sprint_end_date: '5-01-2018'},
      
    ];
    this.dataSource = new MatTableDataSource(this.sprintData);

   }
    applyFilter(filterValue: string) {
     filterValue = filterValue.trim(); // Remove whitespace
     filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
     this.dataSource.filter = filterValue;
   }
  ngOnInit() {
  }

}
export interface Sprint {
  sprint_name: string;
  project_name: string;
  sprint_description: string;
  sprint_start_date: string;
  sprint_end_date: string;
}