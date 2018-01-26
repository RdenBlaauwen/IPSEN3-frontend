import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
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
@Injectable()
export class TasksComponent implements OnInit {

  private dataSource: MatTableDataSource<Task>;
  displayedColumns = ['userStoryName', 'userStoryDescription', 'categoryName', 'projectName', 'userStoryModify', 'userStoryDelete'];
  selectedUserStory: Task = new Task();
  loggedEmployeeModel: Employee;
  categories: Category[];
  currentRole = 'employee';
  constructor(private userStoryService: TaskService, auth: AuthService, private dialogService: DialogService) {
//    this.projects = this.categoryService.getAllProjects();
    this.currentRole= auth.getEmployeeModel().employeeRole;
    if(this.currentRole=='administration'){
      this.displayedColumns = ['userStoryName', 'userStoryDescription', 'categoryName', 'projectName', 'userStoryModify', 'userStoryDelete'];
    } else{
      this.displayedColumns = ['userStoryName', 'userStoryDescription', 'categoryName', 'projectName'];
    }
    this.loggedEmployeeModel = auth.getEmployeeModel();
    
  }
  ngOnInit() {
    this.userStoryService.loadTrigger$.forEach(res=>{
      if(res == true){
        setTimeout(()=>{ this.loadData();},100);
      }
    });
    this.loadData();
  }
  //  MatTableDataSource function
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  //  Return promise to use to fill data
  //  !! IMPORTANT THING TO NOTE IS WE HAVE TO WAIT UNTIL WE COMPLETE THE DATA REQUEST BEFORE SHOWING !!
  loadData() {
    this.userStoryService.getAllUserStories().subscribe(data => {
      console.log("loadData: "+data);
      this.dataSource = new MatTableDataSource<Task>(data);
    }, (error) => console.log(error.SessionNotCreatedError));
  }
  selectRow(row) {
    this.selectedUserStory = row;
    this.userStoryService.newEvent(row);
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
        setTimeout(()=>{ this.loadData();},100);
      }
    });
  }
  openCreateDialog(){
    this.dialogService.createUserStory();
  }
  
}