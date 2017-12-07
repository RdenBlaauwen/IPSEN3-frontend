import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatFormFieldModule, MatInputModule } from '@angular/material';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.css']
})
export class HoursComponent implements OnInit {
  displayedColumns: any[];
  dataSource;
  entryData: Entry[];
  constructor() {
    this.displayedColumns = ['project_name', 'sprint_name', 'userstory', 'starttime', 'endtime', 'exception'];
    this.entryData  = [
      {project_name: 'Zed', sprint_name: "Sprint 1", userstory: 'Als kat kan ik dingen van kasten afduwen', starttime: '00:00', endtime: '00:00', exception: false},
      {project_name: 'Zoe', sprint_name: "Sprint 2", userstory: 'Als persoon kan ik niet Boris zijn', starttime: '07:00', endtime: '08:15', exception: true},
      {project_name: 'Kittan', sprint_name: "Sprint swaggerino", userstory: 'Als levend ding kan ik sterven', starttime: '17:00', endtime: '20:00', exception: false}
      
    ];
    this.dataSource = new MatTableDataSource(this.entryData);

   }
    applyFilter(filterValue: string) {
     filterValue = filterValue.trim(); // Remove whitespace
     filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
     this.dataSource.filter = filterValue;
   }
  ngOnInit() {
  }

}
export interface Entry {
  project_name: string;
  sprint_name: string;
  userstory: string;
  starttime: string;
  endtime: string;
  exception: boolean;
}