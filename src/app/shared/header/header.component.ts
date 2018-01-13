import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  public isAuthenticated(): boolean {
    console.log(this.authService.isAuthorized());
    return this.authService.isAuthorized();
  }

  public getCurrentUser(): string {
    return this.authService.getEmployeeModel().employeeFirstName + ' ' + this.authService.getEmployeeModel().employeeLastName;
  }

  public getCurrentPage(): string {
    return this.router.url;
  }

  ngOnInit() {
  }

}
