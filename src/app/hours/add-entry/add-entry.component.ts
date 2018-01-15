import { Component, OnInit, Inject } from '@angular/core';
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
  public userStoryList: UserStory[];

  entryDateControl = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  maxDate: Date;
  minDate: Date;

  constructor(private projectService: ProjectService, 
    private userStoryService: UserStoryService, private categoryService: CategoryService,
    private auth: AuthService, private hoursService: HoursService,
    public dialogRef: MatDialogRef<AddEntryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 

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
  }

  public updateData(){
    this.projectService.getAllProjects().then((data) => {
        this.projectList = data;
        console.log('Hier is de project data: '+this.projectList);
      }
    );
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

      if(this.selectedEntry.entryId==null){
        this.hoursService.createEntry(this.selectedEntry).then((data) => {
            console.log(data);
            this.updateData();
          }
        );
      }
  }

  test(){
    console.log("DIALOG WORKS!");
  }
}
