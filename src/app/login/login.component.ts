import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { forEach } from '@angular/router/src/utils/collection';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { AuthService } from '../services/auth.service';
import { FormControl, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  email_input = new FormControl('', [Validators.required, Validators.email]);
  employees: string[];
  emailArg: string;
  passwordArg: string;
  currentEmployee: string = null;

  constructor(private router: Router, private employeeService: EmployeeService, private auth: AuthService,
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    this.auth.getAuthorization();
    //  is de gebruiker al ingelogd?
    //  dan wordt die doorverwezen naar homepagina
    if (this.auth.isAuthorized()) {
      this.router.navigate(['Uren']);
    }
    iconRegistry.addSvgIcon('password_visible',
    sanitizer.bypassSecurityTrustResourceUrl('assets/password_visible.svg'));
  }

  checkLogin() {
    if(this.emailArg!=null&&this.passwordArg!=null
      &&this.emailArg!=""&&this.passwordArg!=""){
        this.employeeService.login(this.emailArg, this.passwordArg);
    }
  }

  getErrorMessage() {
    return this.email_input.hasError('required') ? 'You must enter a value' :
      this.email_input.hasError('email') ? 'Not a valid email' :
        '';
  }
}
