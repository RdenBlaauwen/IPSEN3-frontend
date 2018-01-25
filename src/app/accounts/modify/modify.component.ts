import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/Employee';
import { EmployeeService } from '../../services/employee.service';
import { Role } from '../../models/Role';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {
  selectedEmployee :Employee = new Employee();
  roles : Role[]=[];
  admin: boolean = false;

  constructor(private employeeService: EmployeeService, private auth: AuthService) { }

  ngOnInit() {
    this.employeeService.events$.forEach(employee =>{
      this.selectedEmployee = employee;
    });
    this.roles = this.employeeService.getRoles();
    this.admin = this.auth.isAdmin();
  }

  modifyAccount(){
    this.employeeService.modifyEmployee(this.selectedEmployee);
    this.employeeService.loadEvent(true);
  }

}
