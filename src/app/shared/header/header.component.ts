import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { MatDialog } from '@angular/material';
import { ManualComponent } from '../../manual/manual.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  admin: boolean = false;
  manager: boolean = false;

  constructor(private employeeService: EmployeeService, private authService: AuthService, private router: Router,
          private dialog: MatDialog) {
    this.admin = authService.isAdmin();
    this.manager = authService.isManager()
   }

  public logoutUser() {
    this.employeeService.removeSessions();
    this.employeeService.goLogin();
  }

  public isAuthenticated(): boolean {
    return this.authService.isAuthorized();
  }

  public getCurrentUser(): string {
    return this.authService.getEmployeeModel().employeeFirstname + ' ' + this.authService.getEmployeeModel().employeeLastname;
  }

  public getCurrentPage(): string {
    return this.router.url;
  }

  openHandleiding(){
    const dialogRef = this.dialog.open(ManualComponent, {
      width: '650px'
    });
  }

  public logout(){
    this.employeeService.removeSessions();
  }

  ngOnInit() {
  }

}
