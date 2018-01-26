import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { MatSnackBar, MatDialogRef } from '@angular/material';
import { CustomerModel } from '../../models/CustomerModel';
import { Project } from '../../models/ProjectModel';
import { Category } from '../../models/CategoryModel'
import { Task } from '../../models/TaskModel';
import { TaskService } from '../../services/task.service';
import { AuthService } from '../../services/auth.service';
import { CategoryService } from '../../services/category.service';
import { TasksComponent} from '../tasks.component';

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
  
  constructor(private taskService: TaskService,private categoryService: CategoryService,
     public snackBar: MatSnackBar, private dialog: MatDialogRef<any>, auth: AuthService) { 
    this.projects = taskService.getAllProjects();
    this.admin  =auth.isAdmin();
    this.getCategories();
  }

  checkCategories(projectId: number){
      this.taskService.getCategoriesProject(projectId).subscribe(categoriesObservable =>{
        this.categories = categoriesObservable;
      })
  }
  getCategories(){
    this.categoryService.getAllCategories().subscribe(categoriesObservable =>{
      this.categories = categoriesObservable;
      console.log("Catgeories opgehaald: "+this.categories);
    })

}
  insertNewUserStory() {
    this.taskService.insertNewUserStory(this.userStory);
    this.dialog.close();
    this.taskService.loadEvent(true);
  } 
}
