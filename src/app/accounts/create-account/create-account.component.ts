import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/Employee';
import { MatDialogRef } from '@angular/material';
import { Role } from '../../models/Role';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  employee: Employee = new Employee();
  roles: Role[] = [];
  admin: boolean = false;
  constructor(private employeeService: EmployeeService, private dialog: MatDialogRef<any>, auth: AuthService) { 
    this.admin = auth.isAdmin();
  }


  createEmployee(){
    this.employeeService.createEmployee(this.employee);
    this.dialog.close();
    this.employeeService.loadEvent(true);
  }

  ngOnInit() {
    this.roles = this.employeeService.getRoles();
  }

}
