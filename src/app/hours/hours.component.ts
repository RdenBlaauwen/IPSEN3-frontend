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
import { WeekFilter } from '../helpers/WeekFilter';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTabChangeEvent} from '@angular/material/tabs';
import {MatTab} from '@angular/material/tabs';
import { DateHelper } from '../helpers/dateHelper';
import { FormsModule } from '@angular/forms';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.css']
})
export class HoursComponent implements OnInit {
  displayedColumns = ['entryDescription', 'entryStatus','entryDate','entryStartTime',
                      'entryEndTime','entryIsLocked','entryEmployeeName','entryProjectName',
                      'entrySprintName','entryUserstoryName'];
  dataSource: MatTableDataSource<EntryModel>;
  public selectedEntry: EntryModel = new EntryModel();
  weekFilter: WeekFilter;
  projectList: Project[];
  currentWeek = '18-12-2017';
  availableWeeks = ['18-12-2017','11-12-2017','04-12-2017','27-11-2017','20-11-2017','13-11-2017','06-11-2017'];
  oldVersionsChecked = false;
  dateHelper = new DateHelper();
  entryDateControl = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  maxDate: Date;
  minDate: Date;
  currentRole = 'employee';

  // @ViewChild(MatSort) sort: MatSort;

  constructor(private hoursService: HoursService, private projectService: ProjectService, private auth: AuthService) {

    if(this.auth.getEmployeeModel!=null){
      this.currentRole = this.auth.getEmployeeModel().employeeRole;
    } else{
      console.log('HoursComponent: employeeRole was Null!');
    }
    
    console.log(this.currentRole);

    // bereken welke datum het is
    const today = new Date();
    const dd = today.getDate();
    const mm =  today.getMonth();
    const yyyy = today.getFullYear();
    // maximum te kiezen datum (vandaag)
    this.maxDate = new Date(yyyy, mm, dd);
    // minimum te kiezen datum (week geleden)
    // this.minDate = new Date(yyyy, mm, dd - 7);
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
    console.log('PROJECTS GONNA GIT LOADED');
    this.projectService.getAllProjects().then((data) => {
        this.projectList = data;
        console.log('Hier is de data: '+this.projectList);
      }
    );
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
    this.selectedEntry=row;
  }
  /**
   * Deze methode geeft de service de opdracht om een nieuw project toe te voegen of er een te editen.
   * 
   */
  public onSubmit():void{
    console.log('onSubmit()! description: '+this.selectedEntry.entryDescription
      +", date: "+this.selectedEntry.entryDate
      +", project: "+this.selectedEntry.entryProjectFk);

      this.selectedEntry.employeeFk=this.auth.getEmployeeModel().employeeId;

      if(this.selectedEntry.entryId==null){
        this.hoursService.createEntry(this.selectedEntry).then((data) => {
            console.log(data);
            this.updateData();
          }
        );
      }
  }
}