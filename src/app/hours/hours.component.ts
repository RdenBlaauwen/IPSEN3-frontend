import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatFormFieldModule, MatInputModule } from '@angular/material';
import {HoursService} from '../services/hours.service';
import { EntryModel } from '../models/EntryModel';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.css']
})
export class HoursComponent implements OnInit {
  displayedColumns: any[];
  dataSource;
  entryData: EntryModel[];
  constructor(private hoursService: HoursService) {

    this.displayedColumns = ['entryDescription', 
    'entryStatus', 'entryDate', 'entryStartTime', 'entryEndTime', 'entryIsLocked','employeeFk',
  'entryProjectFk','entrySprintFk','entryUserstoryFk','isDeleted','isCurrent'];
  this.readEntryData().then((data) => {
    this.dataSource = new MatTableDataSource<EntryModel>(data);
  }, (error) => console.log(error.SessionNotCreatedError));
   }
    applyFilter(filterValue: string) {
     filterValue = filterValue.trim(); // Remove whitespace
     filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
     this.dataSource.filter = filterValue;
   }

   /**
    * Deze method update de table. Hij haalt roept HoursService aan om data uit de database te krijgen.
    */
   readEntryData(): Promise<EntryModel[]> {
    // this.entryData  = [
    //   {project_name: 'Zed', sprint_name: "Sprint 1", userstory: 'Als kat kan ik dingen van kasten afduwen', starttime: '00:00', endtime: '00:00', exception: false},
    //   {project_name: 'Zoe', sprint_name: "Sprint 2", userstory: 'Als persoon kan ik niet Boris zijn', starttime: '07:00', endtime: '08:15', exception: true},
    //   {project_name: 'Kittan', sprint_name: "Sprint swaggerino", userstory: 'Als levend ding kan ik sterven', starttime: '17:00', endtime: '20:00', exception: false}
    // ];
    return this.hoursService.getAllEntries().toPromise()
    .then(res => res)
    .then(entries => entries.map(entry => {
      return new EntryModel(
        entry.entryId,
        entry.entryDescription,
        entry.entryStatus,
        entry.entryDate,
        entry.entryStartTime,
        entry.entryEndTime,
        entry.entryIsLocked,
        entry.employeeFk,
        entry.entryProjectFk,
        entry.entrySprintFk,
        entry.entryUserstoryFk,
        entry.isDeleted,
        entry.isCurrent);
    }));
   }
  ngOnInit() {
    this.readEntryData();
  }

}
// export interface Entry {
//   project_name: string;
//   sprint_name: string;
//   userstory: string;
//   starttime: string;
//   endtime: string;
//   exception: boolean;
// }