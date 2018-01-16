import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/Employee';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, private dialog: MatDialogRef<any>) { }


  createEmployee(){
    this.employeeService.createEmployee(this.employee);
    this.dialog.close();
  }

  ngOnInit() {
  }

}
