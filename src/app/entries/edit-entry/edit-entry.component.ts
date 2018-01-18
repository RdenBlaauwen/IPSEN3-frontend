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
import { Subject } from 'rxjs/Subject';
import { Task } from '../../models/TaskModel';
import { TaskService } from '../../services/task.service';
import { EntryComponent } from '../entries.component';
import { EntryService } from '../../services/entry.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-edit-entry',
  templateUrl: './edit-entry.component.html',
  styleUrls: ['./edit-entry.component.css']
})
@Injectable()
export class EditEntryComponent implements OnInit {
  @ViewChild('projectSelect') projectSelect;
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
    private auth: AuthService, private hoursService: EntryService, 
    private hoursComponent: EntryComponent, public snackBar: MatSnackBar) { 

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

  ngOnInit(): void {
    //Haal selectedEvent uit eventslist
    console.log('ngAfterInit events: '+this.hoursService.events$);
    this.hoursService.events$.forEach(event =>{
      console.log('ngAfterInit1: '+event.entryDescription);
      this.selectedEntry = event;
    });
    console.log('ngAfterInit2: '+this.selectedEntry.entryDescription+this.selectedEntry.entryDate);
    this.selectedEntry=this.hoursService.selectedEntry;
    // Haal selectedEvent uit hoursService.selectedEntry. 
    // Dit omdat de eventslist het niet doet de eerste keer dat deze klasse hem roept.
    this.updateProjects();
    this.updateCategories();
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
    this.userStoryService.getAllUserStories().toPromise()
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
    });
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
    console.log('onSubmit()! description: '+this.selectedEntry.entryDescription
      +", date: "+this.selectedEntry.entryDate
      +", project: "+this.selectedEntry.entryProjectFk
      +", starttijd: "+this.selectedEntry.entryStartTime);

      this.selectedEntry.employeeFk=this.auth.getEmployeeModel().employeeId;
      if(this.validateData()){
        this.hoursService.updateEntry(this.selectedEntry).then((data) => {
          if(data){
            this.snackBar.open('Entry succesvol bijgewerkt.','Ok',{duration: 2000});
          }else{
            this.snackBar.open('Er is iets mis gegaan.','Ok',{duration: 3000});
          }
          this.hoursComponent.updateData();
        }, (error) => console.log(error.SessionNotCreatedError));
      }
  }
  private validateData(): boolean{
    if(this.selectedEntry.employeeFk==null){
      this.snackBar.open('Geweigerd: U lijkt niet ingelogd te zijn','Ok',{duration: 3000});
      return false;
    }else if(this.selectedEntry.entryDescription==null
      ||this.selectedEntry.entryDescription==""){
      this.snackBar.open('Mislukt: Vul alstublieft een beschrijving in.','Ok',{duration: 3000});
      return false;
    }else if(this.selectedEntry.entryDate==null){
      this.snackBar.open('Mislukt: Vul alstublieft een datum in.','Ok',{duration: 3000});
      return false;
    }else if(this.selectedEntry.entryStartTime==null){
      this.snackBar.open('Mislukt: Vul alstublieft een starttijd in.','Ok',{duration: 3000});
      return false;
    }else if(this.selectedEntry.entryEndTime==null){
      this.snackBar.open('Mislukt: Vul alstublieft een eindtijd in.','Ok',{duration: 3000});
      return false;
    }
    return true;
  }

  log(anything){
    console.log('log: '+anything);
  }

  public close():void{
    this.hoursComponent.updateMode=false;
  }
}
