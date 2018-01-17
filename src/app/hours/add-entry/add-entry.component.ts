import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Injectable } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { EntryModel } from '../../models/EntryModel';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/ProjectModel';
import { FormsModule } from '@angular/forms';
import {FormControl} from '@angular/forms';
import {NgForm} from '@angular/forms';
import { UserStoryService } from '../../services/userStory.service';
import { UserStory } from '../../models/UserStoryModel';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/CategoryModel';
import {HoursService} from '../../services/hours.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { HoursComponent } from '../hours.component';

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
  public userStoryList: UserStory[];

  public projectListOpen = false;

  entryDateControl = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  maxDate: Date;
  minDate: Date;

  constructor(private projectService: ProjectService, 
    private userStoryService: UserStoryService, private categoryService: CategoryService,
    private auth: AuthService, private hoursService: HoursService, private hoursComponent: HoursComponent) { 

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
    this.userStoryService.getAllUserStories()
    .toPromise()
    .then(res => res)
    .then(userstories => userstories.map(userstory => {
      return new UserStory(
        userstory.userStoryID,
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

      this.hoursService.createEntry(this.selectedEntry).then((data) => {
          console.log(data);
          this.hoursComponent.updateData();
        }
      );
  }

  log(anything){
    console.log('log: '+anything);
  }

  public close():void{
    this.hoursComponent.createMode=false;
  }
}
