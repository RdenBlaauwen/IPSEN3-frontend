import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatFormFieldModule, MatInputModule } from '@angular/material';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  displayedColumns: any[];
  dataSource;
  projectData: Project[];
  constructor() {
    this.displayedColumns = ['project_name','project_description', 'customer_name'];
    this.projectData  = [
      {project_name: 'Zed', project_description: "Dit project bestaat zodat mensen zonder skill kunnen spelen.", customer_name: 'Meowmel'},
      {project_name: 'Zoe', project_description: "Nieuwe release, moet monitoren.", customer_name: 'Terratomere'},
      {project_name: 'Kittan', project_description: "Perfectly balanced.", customer_name: 'Bob'}
      
    ];
    this.dataSource = new MatTableDataSource(this.projectData);

   }
    applyFilter(filterValue: string) {
     filterValue = filterValue.trim(); // Remove whitespace
     filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
     this.dataSource.filter = filterValue;
   }
  ngOnInit() {
  }

}
export interface Project {
  project_name: string;
  project_description: string;
  customer_name: string;
}