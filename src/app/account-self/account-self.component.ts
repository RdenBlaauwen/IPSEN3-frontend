import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Employee } from '../models/Employee';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-account-self',
  templateUrl: './account-self.component.html',
  styleUrls: ['./account-self.component.css']
})
export class AccountSelfComponent implements OnInit {

  public loggedUser: Employee = this.authService.getEmployeeModel();

  constructor(private authService: AuthService) { }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  ngOnInit() {
  }

}
