import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Injectable } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { EntryModel } from '../../models/EntryModel';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/ProjectModel';
import { FormsModule } from '@angular/forms';
import {FormControl} from '@angular/forms';
import {NgForm} from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/CategoryModel';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Task } from '../../models/TaskModel';
import { TaskService } from '../../services/task.service';
import { EntryService } from '../../services/entry.service';
import { EntryComponent } from '../entries.component';
import {MatSnackBar} from '@angular/material';
import { DateHelper } from '../../helpers/dateHelper';
import {MatExpansionModule} from '@angular/material/expansion';
import {Time, TimeUnit, Direction} from '../../helpers/time';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
@Injectable()
export class AddEntryComponent implements OnInit {
  public selectedEntry: EntryModel = new EntryModel();
  public projectList: Project[];
  public categoryList: Category[];
  public userStoryList: Task[] = [];

  public projectListOpen = false;

  entryDateControl = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  maxDate: Date;
  minDate: Date;

  constructor(private projectService: ProjectService, 
    private userStoryService: TaskService, private categoryService: CategoryService,
    private auth: AuthService, private entryService: EntryService, 
    private entryComponent: EntryComponent,public snackBar: MatSnackBar, private dateHelper: DateHelper) { 

      // bereken welke datum het is
    const today = new Date();
    const dd = today.getDate();
    const mm =  today.getMonth();
    const yyyy = today.getFullYear();
    // maximum te kiezen datum (vandaag)
    this.maxDate = new Date(yyyy, mm, dd);
    // minimum te kiezen datum (week geleden)
    this.minDate = new Date(yyyy, mm, dd - 7);
  }

  ngOnInit() {
    this.updateProjects();
    let today = new Date();
    this.selectedEntry.entryDate= today.toISOString();
    this.selectedEntry.entryEndTime=this.dateHelper.getTimeString(today);
    // this.selectedEntry.entryDate = this.dateHelper.dateToString(new Date());
    // console.log("selectedEntry.entryEndTime="+this.selectedEntry.entryEndTime);

    // let time = new SimpleTime();
    // time.setFormat('H:m:s');
    // time.roundTimeUnit(TimeUnit.Minutes,5,Direction.Standard);
    // time.setByString('5:11:5');
    // time.setFormat('HH:mm');
    // console.log('toString output is: '+time.toString());

    // console.log(' h: '+time.getHours()+' m: '+time.getMinutes()+' s: '+time.getSeconds()+' S: '+time.getMillisecond());
  }

  /**
   * Haalt projecten uit database en zet ze in projectList voor in de drop down list.
   * 
   * @author Robert
   */
  public updateProjects(){
    this.projectService.getAllProjects().then((data) => {
        this.projectList = data;
      });
      this.userStoryList = null;
  }

  loadCategoriesProject(projectId: number){
    this.userStoryService.getCategoriesProject(projectId).subscribe(categoriesObservable =>{
      this.categoryList = categoriesObservable;
    })
  }

  loadTasksCategory(categoryId: number){
      this.userStoryService.getTasksCategory(categoryId).subscribe(tasksObservable =>{
        this.userStoryList = tasksObservable;
      })

  }
  /**
   * Deze methode geeft de service de opdracht om een nieuw project toe te voegen of er een te editen.
   * 
   */
  public onSubmit():void{

      this.selectedEntry.employeeFk=this.auth.getEmployeeModel().employeeId;
      if(this.validateData()){
        let result = this.entryService.createEntry(this.selectedEntry).then((data)=>{
          if(data){
            this.snackBar.open('Nieuwe entry succesvol toegevoegd.','Ok',{duration: 2000});
          }else{
            this.snackBar.open('Er is iets mis gegaan.','Ok',{duration: 3000});
          }
          this.entryComponent.updateData();
        }, (error) => console.log(error.SessionNotCreatedError));
      }
  }

  private validateData(): boolean{
    if(this.selectedEntry.employeeFk==null){
      this.snackBar.open('Geweigerd: U lijkt niet ingelogd te zijn','Ok',{duration: 3000});
      return false;
    }else if(this.selectedEntry.entryDescription==null){
      this.snackBar.open('Vul alstublieft een beschrijving in.','Ok',{duration: 3000});
      return false;
    }else if(this.selectedEntry.entryDate==null){
      this.snackBar.open('Vul alstublieft een datum in.','Ok',{duration: 3000});
      return false;
    }else if(this.selectedEntry.entryStartTime==null){
      this.snackBar.open('Vul alstublieft een starttijd in.','Ok',{duration: 3000});
      return false;
    }else if(this.selectedEntry.entryEndTime==null){
      this.snackBar.open('Vul alstublieft een eindtijd in.','Ok',{duration: 3000});
      return false;
    }
    return this.validateTimeDifference();
  }
  private validateTimeDifference(): boolean{
    let parsedStartTime = this.dateHelper.stringToDate(this.selectedEntry.entryStartTime);
    let parsedEndTime = this.dateHelper.stringToDate(this.selectedEntry.entryEndTime);
    if(parsedStartTime>=parsedEndTime){
      this.snackBar.open('Vul alstublieft een begintijd in die minder is dan de starttijd.','Ok',{duration: 3000});
      return false;
    }
    return true;
  }

  log(anything){
  }

  public setDate(event){
    this.selectedEntry.entryDate=event.value;
  }

  public roundMinutes():void{
    let time = new Time();
    time.setFormat('HH:mm');
    time.setByString(this.selectedEntry.entryStartTime);
    time.roundTimeUnit(TimeUnit.Minutes,5,Direction.Standard);
    this.selectedEntry.entryStartTime=time.toString();
    time.setByString(this.selectedEntry.entryEndTime);
    this.selectedEntry.entryEndTime=time.toString();
    this.validateTimeDifference();
  }
}
