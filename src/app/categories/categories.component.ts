import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatFormFieldModule, MatInputModule } from '@angular/material';
import { Category } from '../models/CategoryModel'
import { Employee } from '../models/Employee'
import { Project } from '../models/ProjectModel'
import { CategoryService } from '../services/category.service'
import { AuthService } from '../services/auth.service';
import { DialogService } from '../services/DialogService'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoryComponent implements OnInit {

  private dataSource: MatTableDataSource<Category>;
  displayedColumns = ['categoryName', 'categoryDescription', 'categoryStartDate', 'categoryEndDate', 'projectFK', 'categoryModify', 'categoryDelete'];
  selectedCategory: Category = new Category();
  loggedEmployeeModel: Employee;
  projects: Project[];
  admin: boolean = false;
  constructor(private categoryService: CategoryService, private auth: AuthService, private dialogService: DialogService) {
//    this.projects = this.categoryService.getAllProjects();
    this.loggedEmployeeModel = auth.getEmployeeModel();
    this.categoryService.getAllCategories().subscribe( categories=>{
      this.dataSource = new MatTableDataSource<Category>(categories);
    }, (error) => console.log(error.SessionNotCreatedError));
    this.admin = this.auth.isAdmin();
  }

  //  MatTableDataSource function
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  selectRow(row) {
    this.selectedCategory = row;
    this.categoryService.newEvent(row);
  }
  deleteCategory() {
    this.categoryService.removeCategory(this.selectedCategory.categoryId);
  }

  openCreateDialog(){
    this.dialogService.createCategory();
  }
  openDialog() {
    this.dialogService.confirm('Bevestigen', 'Weet u zeker dat u deze categorie wilt verwijderen? ')
    .subscribe(res => {
      if (res.valueOf()) {
        this.deleteCategory();
      }
    });
  }
  ngOnInit() {}
}