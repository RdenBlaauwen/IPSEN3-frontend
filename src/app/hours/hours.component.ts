import { ProjectService } from './../services/project.service';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatFormFieldModule, MatInputModule } from '@angular/material';
import {HoursService} from '../services/hours.service';
import { EntryModel } from '../models/EntryModel';
import { Project } from '../models/ProjectModel';
import {FormControl} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Employee } from '../models/Employee';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.css']
})
export class HoursComponent implements OnInit {
  displayedColumns: any[];
  dataSource;
  entryData: EntryModel[];
  projectList: Project[];
  oldVersionsChecked = false;

  entryDateControl = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  maxDate: Date;
  minDate: Date;

  currentRole = 'employee';

  constructor(private hoursService: HoursService, private projectService: ProjectService, private auth: AuthService) {

    this.currentRole = this.auth.getEmployeeModel().employeeRole;
    console.log(this.currentRole);

    // bereken welke datum het is
    const today = new Date();
    const dd = today.getDate();
    const mm =  today.getMonth();
    const yyyy = today.getFullYear();
    // maximum te kiezen datum (vandaag)
    this.maxDate = new Date(yyyy,mm,dd);
    //minimum te kiezen datum (week geleden)
    this.minDate = new Date(yyyy,mm,dd-7);

    this.displayedColumns = ['entryDescription', 
    'entryStatus', 'entryDate', 'entryStartTime', 'entryEndTime', 'entryIsLocked','employeeFk',
  'entryProjectFk','entrySprintFk','entryUserstoryFk','isDeleted','isCurrent'];
    this.readEntryData().then((data) => {
      this.dataSource = new MatTableDataSource<EntryModel>(data);
    }, (error) => console.log(error.SessionNotCreatedError));

    // this.readProjectList().then((data) => {
    //   this.
    // });
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
   readProjectList(): Promise<Project[]> {
     return this.projectService.getAllProjects().toPromise()
     .then(res => res).then(projects => projects.map(project => {
        return new Project(
          project.projectId,
          project.projectName,
          project.projectDescription,
          project.projectIsDeleted,
          project.projectCustomerFk,
          project.customerName
        );
     }));
   }
  ngOnInit() {
    this.readEntryData();
    this.readProjectList();
  }

  toggleOldVersions($event) {
    this.oldVersionsChecked = !this.oldVersionsChecked;
    console.log($event);
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