import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/CategoryModel';
import { CategoryService } from '../../services/category.service';
import { FormControl } from '@angular/forms';
import { MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS, MatDialogRef } from '@angular/material';
import { Project } from '../../models/ProjectModel';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent {
  selectedCategory: Category = new Category();
  projects: Project[];
  selectedProject: number;
  admin: boolean = false;
  constructor(private categoryService: CategoryService, public snackBar: MatSnackBar, private auth: AuthService, private dialog: MatDialogRef<any>) { 
    categoryService.getAllProjects().subscribe(projects =>{
      this.projects = projects;
    });
    this.admin = auth.isAdmin();
  }
  
  createCategory() {
    this.selectedCategory.projectFK = this.selectedProject;
    this.categoryService.insertNewCategory(this.selectedCategory);
    this.dialog.close();
    this.categoryService.loadEvent(true);
  }

}