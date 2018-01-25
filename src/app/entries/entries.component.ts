import { WeekModel } from './../models/WeekModel';
import { ProjectService } from './../services/project.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Injectable } from '@angular/core';
import {MatTableDataSource, MatFormFieldModule, MatInputModule, MatSort, MatSortModule } from '@angular/material';
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
import { CategoryService } from '../services/category.service';
import { Category } from '../models/CategoryModel';
import { AddEntryComponent } from './add-entry/add-entry.component';
import { EditEntryComponent } from './edit-entry/edit-entry.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogService} from '../services/DialogService';
import { EntryService } from '../services/entry.service';
import {MatSnackBar} from '@angular/material';
import { ExportService } from '../services/export';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
@Injectable()
export class EntryComponent implements OnInit {
  displayedColumns = ['entryDescription', 'entryStatus','entryDate','entryStartTime',
                      'entryEndTime','entryIsLocked','entryEmployeeName','entryProjectName',
                      'entrySprintName','entryUserstoryName','entryUpdate','entryDelete'];
  dataSource: MatTableDataSource<EntryModel>;
  weekFilter: WeekFilter;
  currentWeek = '18-12-2017';
  availableWeeks=[];
  oldVersionsChecked = false;
  public selectedRow: EntryModel;
  currentRole = 'employee';

  public createMode = true;
  public updateMode = false;

  // @ViewChild(MatSort) sort: MatSort;

  constructor(private hoursService: EntryService, private dateHelper: DateHelper,
     private auth: AuthService, private dialogService: DialogService,public snackBar: MatSnackBar,
     private exportService: ExportService) {
      this.generateWeekDates();
    if(this.auth.getEmployeeModel!=null){
      this.currentRole = this.auth.getEmployeeModel().employeeRole;
    } else{
      console.log('HoursComponent: employeeRole was Null!');
    }
    
   }

  ngOnInit() {
    //this.updateData();  
  }
  private generateWeekDates():void{
      // bereken welke datum het is
      const weekDate = this.dateHelper.getFirstDayOfWeekDate(new Date());
      this.currentWeek = this.dateHelper.dateToString(weekDate);
      const dd = weekDate.getDate();
      const mm =  weekDate.getMonth();
      const yyyy = weekDate.getFullYear();
      // maximum te kiezen datum (vandaag)

    for(let i=0; i<140;i+=7){
      this.availableWeeks.push(this.dateHelper.dateToString(new Date(yyyy,mm,dd-i)));
      // this.availableWeeks.push(this.dateHelper.dateToString(new Date())); 
    }
  }

  tabChange(event: MatTabChangeEvent){
    console.log(event.tab.textLabel);
    this.currentWeek=event.tab.textLabel;
    this.updateData();
  } 

  updateData(): void{
    this.hoursService.getAllEntries(this.currentWeek).then((data) => {
      // this.entryData = data;
      // this.filterEntries();
      this.weekFilter = new WeekFilter(data);
      
      this.dataSource = new MatTableDataSource<EntryModel>(this.weekFilter.entryData);
    }, (error) => console.log(error.SessionNotCreatedError));
  }

  dataToTable(): void{
    this.dataSource.data=this.weekFilter.entryData;
  }
  log(x){
  }
  toggleOldVersions($event) {
    this.oldVersionsChecked = !this.oldVersionsChecked;
    if(this.oldVersionsChecked){
      this.displayedColumns = ['entryDescription', 'entryStatus','entryDate','entryStartTime',
      'entryEndTime','entryIsLocked','entryEmployeeName','entryProjectName',
      'entrySprintName','entryUserstoryName','isDeleted','isCurrent','entryUpdate','entryDelete'];
    }else{
      this.displayedColumns = ['entryDescription', 'entryStatus','entryDate','entryStartTime',
      'entryEndTime','entryIsLocked','entryEmployeeName','entryProjectName',
      'entrySprintName','entryUserstoryName','entryUpdate','entryDelete'];
    }
    // this.filterEntries();
  }

  public openEditEntry(row):void{
    this.selectedRow=row;
    this.hoursService.selectedEntry=row;

    this.createMode=false;
    this.updateMode=true;
    this.hoursService.newEvent(row);
  }

  public openAddEntry(){
    this.createMode=true;
    this.updateMode=false;
  }
  // public openEditEntry(){
  //   this.createMode=false;
  //   this.updateMode=true;
  // }

  public deleteEntry(row){
    this.dialogService.confirm('Bevestigen', 'Weet u zeker dat u deze entry wilt verwijderen? ')
    .subscribe(res => {
      if (res.valueOf()) {
        this.hoursService.deleteEntry(row).then((data) => {
          if(data){
            this.snackBar.open('Nieuwe entry succesvol verwijderd.','Ok',{duration: 2000});
          }else{
            this.snackBar.open('Er is iets mis gegaan.','Ok',{duration: 3000});
          }
          this.updateData();
          }, (error) => console.log(error.SessionNotCreatedError));
      }
    });
  }

  public exportData(){
    this.exportService.getCSVInfo();
  }
}