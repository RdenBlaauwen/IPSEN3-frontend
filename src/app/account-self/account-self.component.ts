import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Employee } from '../models/Employee';
import { AuthService } from '../services/auth.service';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-account-self',
  templateUrl: './account-self.component.html',
  styleUrls: ['./account-self.component.css']
})
export class AccountSelfComponent implements OnInit {

  public loggedUser: Employee = new Employee();

  constructor(private authService: AuthService, private employeeService: EmployeeService) { 
  
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  ngOnInit() {
    this.loggedUser = this.authService.getEmployeeModel();
  }

  updateUser(){
    this.employeeService.modifyEmployee(this.loggedUser);
  }

}
