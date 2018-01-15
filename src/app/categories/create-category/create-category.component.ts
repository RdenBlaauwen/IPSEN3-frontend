import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/CategoryModel';
import { CategoryService } from '../../services/category.service';
import { FormControl } from '@angular/forms';
import { MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { Project } from '../../models/ProjectModel';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent {
  date = new Date().toDateString();
  serializedDate = new FormControl((new Date()).toISOString());
  category: Category = new Category();
  projects: Project[];
  selectedProject: number;
  startDate: string;
  constructor(private categoryService: CategoryService, public snackBar: MatSnackBar) { 
    this.projects = categoryService.getAllProjects();
  }
  
   insertNewCategory() {
    this.category.projectFK = this.selectedProject;
    this.categoryService.insertNewCategory(this.category);
    this.openSnackBar();
  }

  openSnackBar() {
    this.snackBar.open('New Project Inserted!', '', {
      duration: 1000
    });
  }

}