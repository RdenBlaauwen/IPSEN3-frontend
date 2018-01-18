import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { MatSnackBar, MatDialogRef } from '@angular/material';
import { CustomerModel } from '../../models/CustomerModel';
import { Project } from '../../models/ProjectModel';
import { Category } from '../../models/CategoryModel'
import { Task } from '../../models/TaskModel';
import { TaskService } from '../../services/task.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTaskComponent{
  userStory: Task = new Task();

  projects: Project[];
  categories: Category[];
  admin: boolean = false;
  selectedProject: number;
  selectedCategory: number;
  
  constructor(private userStoryService: TaskService, public snackBar: MatSnackBar, private dialog: MatDialogRef<any>, auth: AuthService) { 
    this.projects = userStoryService.getAllProjects();
    this.categories = userStoryService.getAllCategories();
    this.admin  =auth.isAdmin();
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