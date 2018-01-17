import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/CategoryModel';
import { Project } from '../../models/ProjectModel';
import { FormControl } from '@angular/forms/';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  selectedCategory: Category = new Category();
  projects: Project[] = [];
  fillProject = new FormControl();

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.events$.forEach(category =>{
      this.selectedCategory = category;
      this.fillProject = new FormControl(this.selectedCategory.projectFK);
    });
    
    this.categoryService.getAllProjects().subscribe(projects=>{
      this.projects = projects;
    })
  }

  modifyCategory(){
    this.categoryService.modifyCategory(this.selectedCategory);
  }

}
