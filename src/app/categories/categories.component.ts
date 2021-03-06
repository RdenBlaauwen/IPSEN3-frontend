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
  currentRole: string = 'employee';
  closeSidenav: boolean = false;
  constructor(private categoryService: CategoryService, private auth: AuthService, private dialogService: DialogService) {
//    this.projects = this.categoryService.getAllProjects();
    this.loggedEmployeeModel = auth.getEmployeeModel();
    // this.admin = this.auth.isAdmin();
    this.currentRole=this.auth.getEmployeeModel().employeeRole;

    if(this.currentRole=='administration'){
      this.displayedColumns = ['categoryName', 'categoryDescription', 'categoryStartDate', 'categoryEndDate', 'projectFK', 'categoryModify', 'categoryDelete'];
    } else{
      this.displayedColumns = ['categoryName', 'categoryDescription', 'categoryStartDate', 'categoryEndDate', 'projectFK'];
    }
  }

  loadData(){
    this.categoryService.getAllCategories().subscribe( categories=>{
      this.dataSource = new MatTableDataSource<Category>(categories);
    }, (error) => console.log(error.SessionNotCreatedError));
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
    setTimeout(()=>{ this.loadData();},100);
  }

  openCreateDialog(){
    this.dialogService.createCategory();
    
  }
  openDialog() {
    this.dialogService.confirm('Bevestigen', 'Weet u zeker dat u deze categorie wilt verwijderen? ', 'LET OP: Alle taken die gekoppeld zijn aan deze category worden ook verwijderd')
    .subscribe(res => {
      if (res.valueOf()) {
        this.deleteCategory();
      }
    });
  }
  ngOnInit() {
    this.loadData();
    this.loadAfterChanges();
  }

  loadAfterChanges(){
    this.categoryService.loadTrigger$.forEach(res=>{
      if(res == true){
        setTimeout(()=>{ this.loadData();},100);
      }
    })
  }
}