import { Component, OnInit } from '@angular/core';
import { UserStoryService } from '../../services/userStory.service';
import { UserStory } from '../../models/UserStoryModel'
import { Project }  from '../../models/ProjectModel'
import { Category } from '../../models/CategoryModel'
import { CustomerModel } from '../../models/CustomerModel';
import { EmployeeService } from '../../services/employee.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-userstory',
  templateUrl: './edit-userstory.component.html',
  styleUrls: ['./edit-userstory.component.css']
})
export class EditUserStoryComponent implements OnInit{
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
  selectedUserStory: UserStory = new UserStory();
  projects: Project[];
  categories: Category[];
  
  selectedProject: number;
  selectedCategory: number;

  fillProject = new FormControl();
  fillCategory = new FormControl();

  constructor(private userStoryService: UserStoryService) {
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
