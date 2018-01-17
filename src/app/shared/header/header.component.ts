import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

<<<<<<< HEAD
  constructor(private employeeService: EmployeeService, private authService: AuthService, private router: Router) { }

  public logoutUser() {
    this.employeeService.removeSessions();
    this.employeeService.goLogin();
  }
=======
  constructor(private authService: AuthService, private router: Router, private employeeService: EmployeeService) { }
>>>>>>> 324077878e31bceb7b4bd7841f06c7f8661d66fa

  public isAuthenticated(): boolean {
    return this.authService.isAuthorized();
  }

  public getCurrentUser(): string {
    return this.authService.getEmployeeModel().employeeFirstname + ' ' + this.authService.getEmployeeModel().employeeLastname;
  }

  public getCurrentPage(): string {
    return this.router.url;
  }

  public logout(){
    this.employeeService.removeSessions();
  }
  ngOnInit() {
  }

}
