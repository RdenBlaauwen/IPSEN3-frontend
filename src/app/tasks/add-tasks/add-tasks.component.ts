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
    this.admin  =auth.isAdmin();
  }

  checkCategories(projectId: number){
      this.userStoryService.getCategoriesProject(projectId).subscribe(categoriesObservable =>{
        this.categories = categoriesObservable;
      })
  }

  insertNewUserStory() {
    this.userStoryService.insertNewUserStory(this.userStory);
    this.dialog.close();
  }
    
}
