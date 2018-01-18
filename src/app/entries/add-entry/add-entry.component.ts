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
    // this.selectedEntry.entryDate = this.dateHelper.dateToString(new Date());
    // console.log("selectedEntry.entryDate="+this.selectedEntry.entryDate);
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
    console.log('onSubmit()! description: '+this.selectedEntry.entryDescription
      +", date: "+this.selectedEntry.entryDate
      +", project: "+this.selectedEntry.entryProjectFk);

      this.selectedEntry.employeeFk=this.auth.getEmployeeModel().employeeId;

      let result = this.entryService.createEntry(this.selectedEntry).then((data)=>{
        if(data){
          this.snackBar.open('Nieuwe entry succesvol toegevoegd.','Ok',{duration: 2000});
        }else{
          this.snackBar.open('Er is iets mis gegaan.','Ok',{duration: 3000});
        }
        this.entryComponent.updateData();
      }, (error) => console.log(error.SessionNotCreatedError));
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
}
