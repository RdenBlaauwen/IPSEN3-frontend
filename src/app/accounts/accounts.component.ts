import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatFormFieldModule, MatInputModule } from '@angular/material';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/Employee';
import { DialogService } from '../services/DialogService';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  selectedEmployee: Employee = new Employee();
  displayedColumns: any[];
  dataSource;
  admin: boolean = false;
  constructor(private employeeService: EmployeeService, private dialogService: DialogService, private auth: AuthService) {
    this.displayedColumns = ['account_name', 'account_role', 'email', 'employeeModify', 'employeeDelete'];
    employeeService.getAllEmployees().subscribe(users =>{
      this.dataSource = new MatTableDataSource(users);
      console.log(users);
    });
   }

    applyFilter(filterValue: string) {
     filterValue = filterValue.trim(); // Remove whitespace
     filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
     this.dataSource.filter = filterValue;
   }

  ngOnInit() {
    this.admin  =this.auth.isAdmin();
  }
  modifyAccount(){
    this.employeeService.modifyEmployee(this.selectedEmployee);
  }
  openCreateDialog(){
    this.dialogService.createAccount();
  }
  selectRow(row: Employee) {
    this.selectedEmployee = row;
    this.employeeService.newEvent(row);
    
  }
  deleteEmployee(){
    this.employeeService.deleteEmployee(this.selectedEmployee.employeeId);
  }
  openDialog(){
    this.dialogService.confirm('Bevestigen', 'Weet u zeker dat u deze account wilt verwijderen? ').subscribe(res=>{
      if(res == true){
        this.deleteEmployee();
      }
    });
  }

}


