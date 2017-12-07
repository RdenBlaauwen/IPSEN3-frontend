import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatFormFieldModule, MatInputModule } from '@angular/material';

@Component({
  selector: 'app-userstories',
  templateUrl: './userstories.component.html',
  styleUrls: ['./userstories.component.css']
})
export class UserstoriesComponent implements OnInit {
  displayedColumns: any[];
  dataSource;
  userstoryData: Userstory[];
  constructor() {
    this.displayedColumns = ['userstory_number','userstory_description', 'sprint_name', 'project_name'];
    this.userstoryData  = [
      {userstory_number: 32, userstory_description: "Als weeb kan ik Fox Hime spelen.", sprint_name: 'Sprint 1', project_name: 'Actus'},
      {userstory_number: 15, userstory_description: "Als gebruiker kan ik mijzelf Steakholder maken.", sprint_name: 'Sprint 6', project_name: 'Zoeswaggerino'},
      {userstory_number: 10, userstory_description: "Als administrator kan ik coole OP stuff doen.", sprint_name: 'Subsprint 1.5', project_name: 'This one is just for tests.'},
      
    ];
    this.dataSource = new MatTableDataSource(this.userstoryData);

   }
    applyFilter(filterValue: string) {
     filterValue = filterValue.trim(); // Remove whitespace
     filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
     this.dataSource.filter = filterValue;
   }
  ngOnInit() {
  }

}
export interface Userstory {
  userstory_number: number;
  userstory_description: string;
  sprint_name: string;
  project_name: string;
}


