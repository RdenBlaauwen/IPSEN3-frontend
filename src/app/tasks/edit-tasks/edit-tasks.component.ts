import { Component, OnInit } from '@angular/core';
import { Project }  from '../../models/ProjectModel'
import { Category } from '../../models/CategoryModel'
import { CustomerModel } from '../../models/CustomerModel';
import { EmployeeService } from '../../services/employee.service';
import { FormControl } from '@angular/forms';
import { Task } from '../../models/TaskModel';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-edit-tasks',
  templateUrl: './edit-tasks.component.html',
  styleUrls: ['./edit-tasks.component.css']
})
export class EditUTaskComponent implements OnInit{
  ngOnInit(): void {
    this.userStoryService.events$.forEach(event =>{
      this.selectedUserStory = event;
      for(let cus of this.projects){
        if(cus.projectName == event.projectName){
          this.fillProject = new FormControl(cus.projectId);
        }
      }
      for(let cus of this.categories){
        if(cus.categoryName == event.categoryName){
          this.fillCategory = new FormControl(cus.categoryId);
        }
      }
    })
  }
  selectedUserStory: Task = new Task();
  projects: Project[];
  categories: Category[];
  
  selectedProject: number;
  selectedCategory: number;

  fillProject = new FormControl();
  fillCategory = new FormControl();

  constructor(private userStoryService: TaskService) {
    this.projects = userStoryService.getAllProjects();
    this.categories = userStoryService.getAllCategories();
   }

   modifyUserStory()
   {
     this.selectedUserStory.categoryId = this.selectedCategory;
     this.userStoryService.updateUserStory(this.selectedUserStory);
     console.log(this.selectedUserStory.categoryId)
   }

}
