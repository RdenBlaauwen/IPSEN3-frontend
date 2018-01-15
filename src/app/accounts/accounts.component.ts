import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatFormFieldModule, MatInputModule } from '@angular/material';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  displayedColumns: any[];
  dataSource;
  constructor(private employeeService: EmployeeService ) {
    this.displayedColumns = ['account_name', 'account_role', 'email'];
    employeeService.getAllEmployees().subscribe(users =>{
      this.dataSource = new MatTableDataSource(users);
    });
   }

    applyFilter(filterValue: string) {
     filterValue = filterValue.trim(); // Remove whitespace
     filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
     this.dataSource.filter = filterValue;
   }

  ngOnInit() {
  }

}


