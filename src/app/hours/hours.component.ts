import { WeekModel } from './../models/WeekModel';
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
import { DayModel } from '../models/DayModel';
@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.css']
})
export class HoursComponent implements OnInit {
  displayedColumns = ['entryDescription', 'entryStatus'];
  dataSource: MatTableDataSource<DayModel>;
  weekData: WeekModel;
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
    this.maxDate = new Date(yyyy, mm, dd);
    // minimum te kiezen datum (week geleden)
    this.minDate = new Date(yyyy, mm, dd - 7);
    // this.readProjectList().then((data) => {
    //   this.
    // });

    this.readEntryData().then((data) => {
      // this.entryData = data;
      // this.filterEntries();
      this.weekData=data;
      console.log('Hier is de data: '+this.weekData.dayModels);
      this.dataSource = new MatTableDataSource<DayModel>(this.weekData.dayModels);
    }, (error) => console.log(error.SessionNotCreatedError));
    this.readProjectList();
   }

  applyFilter(filterValue: string) {
     filterValue = filterValue.trim(); // Remove whitespace
     filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
     this.dataSource.filter = filterValue;
   }

   ngOnInit() {
    
  }
  // ngAfterViewInit() {
  //   this.dataSource.sort = this.sort;
  // }

   /**
    * Deze method update de table. Hij haalt roept HoursService aan om data uit de database te krijgen.
    */
   readEntryData(): Promise<WeekModel> {
    console.log('readEntryData(): start');
    return this.hoursService.getAllEntries().toPromise()
    .then(weeks => {return weeks}
    );

    // weeks.map(week => {
    //   return new WeekModel(
    //         week.beginDate,
    //         week.endDate,
    //         // week.dayModels
    //         // day.date,
    //         // day.entryModels
    //         // entry.entryId,
    //         // entry.entryDescription,
    //         // entry.entryStatus,
    //         // entry.entryDate,
    //         // entry.entryStartTime,
    //         // entry.entryEndTime,
    //         // entry.entryIsLocked,
    //         // entry.employeeFk,
    //         // entry.entryProjectFk,
    //         // entry.entryProjectName,
    //         // entry.entrySprintFk,
    //         // entry.entrySprintName,
    //         // entry.entryUserstoryFk,
    //         // entry.entryUserstoryName,
    //         // entry.isDeleted,
    //         // entry.isCurrent,
    //         // entry.entryEmployeeName
    //       );
    //     }
    //   )

   }
   testEn(beginDate): String{
     return beginDate = '2017-12-18';
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
    // this.filterEntries();
    console.log($event);
  }

  // filterEntries() {
  //   if (this.oldVersionsChecked) {
  //     this.displayedColumns = ['entryDescription', 
  //     'entryStatus', 'entryDate', 'entryStartTime', 'entryEndTime', 'entryIsLocked','entryEmployeeName',
  //     'entryProjectName','entrySprintName','entryUserstoryName','isDeleted','isCurrent'];
  //     for (let entry of this.entryVersionData){
  //         this.entryData.push(entry);
  //     }
  //     for (let entry of this.entryData) {
  //       if (this.entryVersionData.includes(entry)){
  //         this.entryVersionData.splice(this.entryVersionData.indexOf(entry),1);
  //       }
  //     }
  //   }else{
  //     this.displayedColumns = ['entryDescription', 
  //     'entryStatus', 'entryDate', 'entryStartTime', 'entryEndTime', 'entryIsLocked','entryEmployeeName',
  //     'entryProjectName','entrySprintName','entryUserstoryName'];
  //     for (let entry of this.entryData){
  //       if (!entry.isCurrent || entry.isDeleted) {
  //         this.entryVersionData.push(entry);
  //       }
  //     }
  //     for (let entry of this.entryVersionData) {
  //       this.entryData.splice(this.entryData.indexOf(entry),1);
  //     }
  //   }
  // }

}
// export interface Entry {
//   project_name: string;
//   sprint_name: string;
//   userstory: string;
//   starttime: string;
//   endtime: string;
//   exception: boolean;
// }
