import { Component, OnInit } from '@angular/core';
import{ Http, Response, RequestOptions, Headers } from '@angular/http';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { forEach } from '@angular/router/src/utils/collection';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { EmployeeService } from '../services/employee.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  employees: string[];
  email: string;
  currentEmployee: string;
  constructor(private router: Router, private auth: AuthService,
  private employeeService: EmployeeService) {}
  checkLogin(email: string, password: string)
  {
    this.currentEmployee = this.employeeService.login(email, password);
 }
 validUser()
{
}

}
