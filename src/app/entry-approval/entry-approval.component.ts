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
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogService} from '../services/DialogService';
import { EntryService } from '../services/entry.service';
import {MatSnackBar} from '@angular/material';
import { ExportService } from '../services/export';
import {SelectionModel} from '@angular/cdk/collections';

@Component({
  selector: 'app-entry-approval',
  templateUrl: './entry-approval.component.html',
  styleUrls: ['./entry-approval.component.css']
})
@Injectable()
export class EntryApprovalComponent implements OnInit {
  displayedColumns = ['entryDescription','entryDate','entryStartTime',
                      'entryEndTime','entryIsLocked','entryEmployeeName','entryProjectName',
                      'entrySprintName','entryUserstoryName','entryApproval'];
  dataSource: MatTableDataSource<EntryModel>;
  weekFilter: WeekFilter;
  entries: EntryModel[];
  public selectedRow: EntryModel;
  currentRole = 'employee';

  public createMode = true;
  public updateMode = false;

  // @ViewChild(MatSort) sort: MatSort;

  constructor(private hoursService: EntryService, private dateHelper: DateHelper,
     private auth: AuthService, private dialogService: DialogService,public snackBar: MatSnackBar,) {
    if(this.auth.getEmployeeModel!=null){
      this.currentRole = this.auth.getEmployeeModel().employeeRole;
    } else{
      console.log('HoursComponent: employeeRole was Null!');
    }
   }

  ngOnInit() {
    this.updateData();  
  }

  updateData(): void{
    this.hoursService.getAllEntriesQueued().then((data) => {
      // this.entryData = data;
      // this.filterEntries();
      //this.weekFilter = new WeekFilter(data);
      this.entries=data;
      this.dataSource = new MatTableDataSource<EntryModel>(this.entries);
    }, (error) => console.log(error.SessionNotCreatedError));
  }

  dataToTable(): void{
    this.dataSource.data=this.weekFilter.entryData;
  }
  log(x){
  }
  
  public onSubmit():void{
    let approved: number[] = [];
    let rejected: number[] = [];
    for (let entry of this.entries){
      if(entry.entryStatus=='approved'){
        approved.push(entry.entryId);
      }else if(entry.entryStatus=='rejected'){
        rejected.push(entry.entryId);
      }
    }
    if(approved.length>0){
      this.hoursService.approveEntries(approved).then((data) => {
        if(data){
          this.snackBar.open('Entries succesvol goedgekeurd.','Ok',{duration: 2000});
        }else{
          this.snackBar.open('Er is iets mis gegaan.','Ok',{duration: 3000});
        }
        this.updateData();
      }, (error) => console.log(error.SessionNotCreatedError));
    }
    if(rejected.length>0){
      this.hoursService.rejectEntries(rejected).then((data) => {
        if(data){
          this.snackBar.open('Entries succesvol afgekeurd.','Ok',{duration: 2000});
        }else{
          this.snackBar.open('Er is iets mis gegaan.','Ok',{duration: 3000});
        }
        this.updateData();
      }, (error) => console.log(error.SessionNotCreatedError));
    }
  }
}