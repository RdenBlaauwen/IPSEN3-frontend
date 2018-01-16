import { WeekModel } from './../models/WeekModel';
import { ProjectService } from './../services/project.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Injectable } from '@angular/core';
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
import { WeekFilter } from '../helpers/WeekFilter';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTabChangeEvent} from '@angular/material/tabs';
import {MatTab} from '@angular/material/tabs';
import { DateHelper } from '../helpers/dateHelper';
import { FormsModule } from '@angular/forms';
import {NgForm} from '@angular/forms';
import { UserStoryService } from '../services/userStory.service';
import { UserStory } from '../models/UserStoryModel';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/CategoryModel';
import { AddEntryComponent } from './add-entry/add-entry.component';
import { EditEntryComponent } from './edit-entry/edit-entry.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.css']
})
@Injectable()
export class HoursComponent implements OnInit {
  displayedColumns = ['entryDescription', 'entryStatus','entryDate','entryStartTime',
                      'entryEndTime','entryIsLocked','entryEmployeeName','entryProjectName',
                      'entrySprintName','entryUserstoryName'];
  dataSource: MatTableDataSource<EntryModel>;
  weekFilter: WeekFilter;
  currentWeek = '18-12-2017';
  availableWeeks = ['18-12-2017','11-12-2017','04-12-2017','27-11-2017','20-11-2017','13-11-2017','06-11-2017'];
  oldVersionsChecked = false;
  public selectedRow: EntryModel;
  dateHelper = new DateHelper();
  currentRole = 'employee';

  public createMode = false;
  public updateMode = false;

  // @ViewChild(MatSort) sort: MatSort;

  constructor(private hoursService: HoursService, 
     private auth: AuthService) {

    if(this.auth.getEmployeeModel!=null){
      this.currentRole = this.auth.getEmployeeModel().employeeRole;
    } else{
      console.log('HoursComponent: employeeRole was Null!');
    }
    
    console.log(this.currentRole);
   }

  ngOnInit() {
    this.updateData();  
  }

  tabChange(event: MatTabChangeEvent){
    console.log(event.tab.textLabel);
    this.currentWeek=event.tab.textLabel;
    this.updateData();
  } 

  updateData(): void{
    console.log('updateData: ');
    this.hoursService.getAllEntries(this.currentWeek).then((data) => {
      // this.entryData = data;
      // this.filterEntries();
      this.weekFilter = new WeekFilter(data);
      
      this.dataSource = new MatTableDataSource<EntryModel>(this.weekFilter.entryData);
    }, (error) => console.log(error.SessionNotCreatedError));
  }

  dataToTable(): void{
    console.log("dataToTable()");
    this.dataSource.data=this.weekFilter.entryData;
  }
  log(x){
    console.log(x);
  }
   testEn(beginDate): String{
     return beginDate = '2017-12-18';
   }
  //  readProjectList(): Promise<Project[]> {
  //    return this.projectService.getAllProjects().toPromise()
  //    .then(res => res).then(projects => projects.map(project => {
  //       return new Project(
  //         project.projectId,
  //         project.projectName,
  //         project.projectDescription,
  //         project.projectIsDeleted,
  //         project.projectCustomerFk,
  //         project.customerName
  //       );
  //    }));
  //  }

  toggleOldVersions($event) {
    this.oldVersionsChecked = !this.oldVersionsChecked;
    if(this.oldVersionsChecked){
      this.displayedColumns = ['entryDescription', 'entryStatus','entryDate','entryStartTime',
      'entryEndTime','entryIsLocked','entryEmployeeName','entryProjectName',
      'entrySprintName','entryUserstoryName','isDeleted','isCurrent'];
    }else{
      this.displayedColumns = ['entryDescription', 'entryStatus','entryDate','entryStartTime',
      'entryEndTime','entryIsLocked','entryEmployeeName','entryProjectName',
      'entrySprintName','entryUserstoryName'];
    }
    // this.filterEntries();
    console.log($event);
  }

  public selectRow(row):void{
    this.selectedRow=row;
  }

  public openAddEntry(){
    this.createMode=true;
    this.updateMode=false;
  }
  public openEditEntry(){
    this.createMode=false;
    this.updateMode=true;
  }
}