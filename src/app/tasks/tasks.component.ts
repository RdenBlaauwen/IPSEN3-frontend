import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatFormFieldModule, MatInputModule } from '@angular/material';
import { Category } from '../models/CategoryModel';
import { CategoryService } from '../services/category.service';
import { AuthService } from '../services/auth.service';
import { DialogService } from '../services/DialogService';
import { Employee } from '../models/Employee';
import {  Task } from '../models/TaskModel';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {

  private dataSource: MatTableDataSource<Task>;
  displayedColumns = ['userStoryName', 'userStoryDescription', 'categoryName', 'projectName', 'userStoryModify', 'userStoryDelete'];
  selectedUserStory: Task = new Task();
  admin: boolean = false;
  loggedEmployeeModel: Employee;
  categories: Category[];
  constructor(private userStoryService: TaskService, auth: AuthService, private dialogService: DialogService) {
//    this.projects = this.categoryService.getAllProjects();
    this.loggedEmployeeModel = auth.getEmployeeModel();
    this.admin = auth.isAdmin();
    this.loadData().then((data) => {
      this.dataSource = new MatTableDataSource<Task>(data);
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
  loadData(): Promise<Task[]> {
    return this.userStoryService.getAllUserStories()
      .toPromise()
      .then(res => res)
      .then(userStories => userStories.map(userstory => {
        return new Task(
          userstory.userStoryId,
          userstory.userStoryName,
          userstory.userStoryDescription,
          userstory.userStoryIsDeleted,
          userstory.isCurrent,
          userstory.projectName,
          userstory.projectId,
          userstory.categoryName,
          userstory.categoryId
        );
      }));
  }
  selectRow(row) {
    this.selectedUserStory = row;
  }

  modifyUserStory() {
    this.userStoryService.setUserStoryToModify(this.selectedUserStory);
  }

  deleteUserStory() {
    this.userStoryService.removeUserStory(this.selectedUserStory);
  }

  openDialog() {
    this.dialogService.confirm('Bevestigen', 'Weet u zeker dat u deze taak wilt verwijderen? ')
    .subscribe(res => {
      if (res.valueOf()) {
        this.deleteUserStory();
      }
    });
  }
  openCreateDialog(){
    this.dialogService.createUserStory();
    console.log();
  }
  ngOnInit() {}
}