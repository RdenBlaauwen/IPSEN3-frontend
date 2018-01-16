import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/Employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {
  selectedEmployee :Employee = new Employee();

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.events$.forEach(employee =>{
      this.selectedEmployee = employee;
    })
  }

  modifyAccount(){
    this.employeeService.modifyEmployee(this.selectedEmployee);
  }

}
