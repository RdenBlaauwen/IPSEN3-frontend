import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/CategoryModel';
import { Project } from '../../models/ProjectModel';
import { FormControl } from '@angular/forms/';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  selectedCategory: Category = new Category();
  projects: Project[] = [];
  fillProject = new FormControl();
  admin: boolean = false;
  constructor(private categoryService: CategoryService, private auth: AuthService) { }

  ngOnInit() {
    this.categoryService.events$.forEach(category =>{
      this.selectedCategory = category;
      this.fillProject = new FormControl(this.selectedCategory.projectFK);
    });
    
    this.categoryService.getAllProjects().subscribe(projects=>{
      this.projects = projects;
    });
    this.admin = this.auth.isAdmin();
  }

  modifyCategory(){
    this.categoryService.modifyCategory(this.selectedCategory);
    this.categoryService.loadEvent(true);
  }

}
