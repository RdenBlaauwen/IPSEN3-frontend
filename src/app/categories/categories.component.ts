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
  displayedColumns = ['categoryName', 'categoryDescription', 'categoryStartDate', 'categoryEndDate', 'projectFK'];
  selectedCategory: Category = new Category();
  loggedEmployeeModel: Employee;
  projects: Project[];
  constructor(private categoryService: CategoryService, auth: AuthService, private dialogService: DialogService) {
//    this.projects = this.categoryService.getAllProjects();
    this.loggedEmployeeModel = auth.getEmployeeModel();
    this.loadData().then((data) => {
      this.dataSource = new MatTableDataSource<Category>(data);
    }, (error) => console.log(error.SessionNotCreatedError));
  }

  //  MatTableDataSource function
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  //  Return promise to use to fill data
  //  !! IMPORTANT THING TO NOTE IS WE HAVE TO WAIT UNTIL WE COMPLETE THE DATA REQUEST BEFORE SHOWING !!
  loadData(): Promise<Category[]> {
    return this.categoryService.getAllCategories()
      .toPromise()
      .then(res => res)
      .then(categories => categories.map(category => {
        return new Category(
          category.categoryId,
          category.categoryIsDeleted,
          category.categoryName,
          category.categoryStartDate,
          category.categoryEndDate,
          category.categoryDescription,
          category.projectFK,
          category.projectName);
      }));
  }
  selectRow(row) {
    this.selectedCategory = row;
  }

  modifyCategory() {
    this.categoryService.setCategoryToModify(this.selectedCategory);
  }

  deleteCategory() {
    this.categoryService.removeCategory(this.selectedCategory);
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