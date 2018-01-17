import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { MatSnackBar, MatDialogRef } from '@angular/material';
import { CustomerModel } from '../../models/CustomerModel';
import { Project } from '../../models/ProjectModel';
import { Category } from '../../models/CategoryModel'
import { UserStory } from '../../models/UserStoryModel'
import { UserStoryService } from '../../services/userStory.service';

@Component({
  selector: 'app-add-userstory',
  templateUrl: './add-userstory.component.html',
  styleUrls: ['./add-userstory.component.css']
})
export class AddUserStoryComponent{
  userStory: UserStory = new UserStory();

  projects: Project[];
  categories: Category[];

  selectedProject: number;
  selectedCategory: number;
  
  constructor(private userStoryService: UserStoryService, public snackBar: MatSnackBar, private dialog: MatDialogRef<any>) { 
    this.projects = userStoryService.getAllProjects();
    this.categories = userStoryService.getAllCategories();
  }

  insertNewUserStory() {
    this.userStory.categoryId = this.selectedCategory;
    this.userStory.projectId = this.selectedProject;
    this.userStoryService.insertNewUserStory(this.userStory);
    this.dialog.close();
    history.pushState(null, '/userstory-management');
    this.openSnackBar();
  }

  openSnackBar() {
      this.snackBar.open('Nieuwe taak toegevoegd!', '', {
        duration: 1000
      });
    }
    
}
