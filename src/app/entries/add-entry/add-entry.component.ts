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
  public userStoryList: Task[];

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
    this.updateCategories();
    let today = new Date();
    this.selectedEntry.entryDate= today.toISOString();
    this.selectedEntry.entryEndTime=this.dateHelper.getTimeString(today);
    // this.selectedEntry.entryDate = this.dateHelper.dateToString(new Date());
    console.log("selectedEntry.entryEndTime="+this.selectedEntry.entryEndTime);
  }
  /**
   * Haalt projecten uit database en zet ze in projectList voor in de drop down list.
   * 
   * @author Robert
   */
  public updateProjects(){
    console.log('PROJECTS GONNA GIT LOADED');
    this.projectService.getAllProjects().then((data) => {
        this.projectList = data;
        console.log('Hier is de project data: '+this.projectList);
      }
    );
  }
  public updateUserStories(){
    this.userStoryService.getAllUserStories()
    .toPromise()
    .then(res => res)
    .then(userstories => userstories.map(userstory => {
      return new Task(
        userstory.userStoryId,
        userstory.userStoryName,
        userstory.userStoryDescription,
        userstory.userStoryIsDeleted,
        userstory.isCurrent);
    })).then((data) =>{
      this.userStoryList=data;
      console.log('Hier is de userStory data: '+this.userStoryList);
    })
  }
  /**
   * Haalt categorieen uit database en zet ze in categoryList voor in de drop down list.
   * 
   * @author Robert
   */
  public updateCategories(){
    this.categoryService.getAllCategories()
    .toPromise()
    .then(res => res)
    .then(categories => categories.map(category => {
        return new Category(
          category.categoryId,
          category.categoryIsDeleted,
          category.categoryName,
          category.categoryStartDate,
          category.categoryEndDate,
          category.categoryDescription,
          category.projectFK,
          category.projectName);
      })).then((data) => {
      this.categoryList = data;
      console.log('Hier is de category data: '+this.categoryList);
    }
  );
  }
  /**
   * Deze methode geeft de service de opdracht om een nieuw project toe te voegen of er een te editen.
   * 
   */
  public onSubmit():void{
    console.log('onSubmit()! time parsing: '+this.dateHelper.stringToDate(this.selectedEntry.entryStartTime));

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
    console.log('log: '+anything);
  }

  public close():void{
    this.entryComponent.createMode=false;
  }

  public setDate(event){
    this.selectedEntry.entryDate=event.value;
    console.log('setDate: '+this.selectedEntry.entryDate);
  }

  public roundMinutes():void{
    let startTime = this.selectedEntry.entryStartTime;
    let shours = parseInt(startTime.substr(0,2));
    let sminutes = parseInt(startTime.substr(3,5));
    let smodulus = sminutes%5;
    if(smodulus<3){
      this.selectedEntry.entryStartTime=shours+":"+(sminutes-smodulus);
    }else{
      this.selectedEntry.entryStartTime=shours+":"+(sminutes+(5-smodulus));
    }
    let endTime = this.selectedEntry.entryEndTime;
    let ehours = parseInt(startTime.substr(0,2));
    let eminutes = parseInt(startTime.substr(3,5));
    let emodulus = eminutes%5;
    if(emodulus<3){
      this.selectedEntry.entryStartTime=ehours+":"+(eminutes-emodulus);
    }else{
      this.selectedEntry.entryStartTime=ehours+":"+(eminutes+(5-emodulus));
    }
    console.log('round minute: '+(eminutes%5));
    this.validateTimeDifference();
  }
}
