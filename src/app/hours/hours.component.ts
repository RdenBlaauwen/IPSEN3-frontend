import { ProjectService } from './../services/project.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatFormFieldModule, MatInputModule, MatSort, MatSortModule } from '@angular/material';
import {HoursService} from '../services/hours.service';
import { EntryModel } from '../models/EntryModel';
import { Project } from '../models/ProjectModel';
import {FormControl} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Employee } from '../models/Employee';
import { EventEmitter, ChangeDetectorRef} from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.css']
})
export class HoursComponent implements OnInit {
  displayedColumns: any[];
  dataSource;
  entryData: EntryModel[];
  entryVersionData = [];
  projectList: Project[];
  oldVersionsChecked = false;

  entryDateControl = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  maxDate: Date;
  minDate: Date;

  currentRole = 'employee';

  // @ViewChild(MatSort) sort: MatSort;

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
    // minimum te kiezen datum (week geleden)
    this.minDate = new Date(yyyy,mm,dd-7);
    // this.readProjectList().then((data) => {
    //   this.
    // });
   }
  applyFilter(filterValue: string) {
     filterValue = filterValue.trim(); // Remove whitespace
     filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
     this.dataSource.filter = filterValue;
   }

   ngOnInit() {
    this.readEntryData().then((data) => {
      this.entryData = data;
      this.filterEntries();
      this.dataSource = new MatTableDataSource<EntryModel>(this.entryData);
    }, (error) => console.log(error.SessionNotCreatedError));
    this.readProjectList();
  }
  // ngAfterViewInit() {
  //   this.dataSource.sort = this.sort;
  // }

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
        entry.entryProjectName,
        entry.entrySprintFk,
        entry.entrySprintName,
        entry.entryUserstoryFk,
        entry.entryUserstoryName,
        entry.isDeleted,
        entry.isCurrent,
        entry.entryEmployeeName);
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

  toggleOldVersions($event) {
    this.oldVersionsChecked = !this.oldVersionsChecked;
    this.filterEntries();
    console.log($event);
  }

  filterEntries() {
    if (this.oldVersionsChecked) {
      this.displayedColumns = ['entryDescription', 
      'entryStatus', 'entryDate', 'entryStartTime', 'entryEndTime', 'entryIsLocked','entryEmployeeName',
      'entryProjectName','entrySprintName','entryUserstoryName','isDeleted','isCurrent'];
      for (let entry of this.entryVersionData){
          this.entryData.push(entry);
      }
      for (let entry of this.entryData) {
        if (this.entryVersionData.includes(entry)){
          this.entryVersionData.splice(this.entryVersionData.indexOf(entry),1);
        }
      }
      
    }else{
      this.displayedColumns = ['entryDescription', 
      'entryStatus', 'entryDate', 'entryStartTime', 'entryEndTime', 'entryIsLocked','entryEmployeeName',
      'entryProjectName','entrySprintName','entryUserstoryName'];
      for (let entry of this.entryData){
        if (!entry.isCurrent || entry.isDeleted) {
          this.entryVersionData.push(entry);
        }
      }
      for (let entry of this.entryVersionData) {
        this.entryData.splice(this.entryData.indexOf(entry),1);
      }
    }
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