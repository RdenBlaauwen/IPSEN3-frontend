import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatFormFieldModule, MatInputModule } from '@angular/material';
import { UserStory } from '../models/UserStoryModel';
import { Category } from '../models/CategoryModel';
import { CategoryService } from '../services/category.service';
import { UserStoryService} from '../services/userStory.service';
import { AuthService } from '../services/auth.service';
import { DialogService } from '../services/DialogService';
import { Employee } from '../models/Employee';

@Component({
  selector: 'app-userstories',
  templateUrl: './userstories.component.html',
  styleUrls: ['./userstories.component.css']
})

export class UserStoryComponent implements OnInit {

  private dataSource: MatTableDataSource<UserStory>;
  displayedColumns = ['userStoryName', 'userStoryDescription'];
  selectedUserStory: UserStory = new UserStory();

  loggedEmployeeModel: Employee;
  categories: Category[];
  constructor(private userStoryService: UserStoryService, auth: AuthService, private dialogService: DialogService) {
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
    return this.userStoryService.getAllCategories()
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
    this.selectedUserStory = row;
  }

  modifyCategory() {
    this.userStoryService.setCategoryToModify(this.selectedUserStory);
  }

  deleteCategory() {
    this.userStoryService.removeCategory(this.selectedUserStory);
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