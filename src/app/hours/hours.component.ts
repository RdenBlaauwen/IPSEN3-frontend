import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatFormFieldModule, MatInputModule } from '@angular/material';
import {HoursService} from '../services/hours.service';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.css']
})
export class HoursComponent implements OnInit {
  displayedColumns: any[];
  dataSource;
  entryData: Entry[];
  constructor(private hoursService: HoursService) {

    this.displayedColumns = ['project_name', 'sprint_name', 'userstory', 'starttime', 'endtime', 'exception'];
    this.dataSource = new MatTableDataSource(this.entryData);
   }
    applyFilter(filterValue: string) {
     filterValue = filterValue.trim(); // Remove whitespace
     filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
     this.dataSource.filter = filterValue;
   }

   /**
    * Deze method update de table. Hij haalt roept HoursService aan om data uit de database te krijgen.
    */
   updateEntryData(){
    this.entryData  = [
      {project_name: 'Zed', sprint_name: "Sprint 1", userstory: 'Als kat kan ik dingen van kasten afduwen', starttime: '00:00', endtime: '00:00', exception: false},
      {project_name: 'Zoe', sprint_name: "Sprint 2", userstory: 'Als persoon kan ik niet Boris zijn', starttime: '07:00', endtime: '08:15', exception: true},
      {project_name: 'Kittan', sprint_name: "Sprint swaggerino", userstory: 'Als levend ding kan ik sterven', starttime: '17:00', endtime: '20:00', exception: false}
    ];
   }
  ngOnInit() {
    this.updateEntryData();
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