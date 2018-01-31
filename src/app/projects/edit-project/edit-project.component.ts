import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/ProjectModel';
import { CustomerModel } from '../../models/CustomerModel';
import { EmployeeService } from '../../services/employee.service';
import { FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit{
  ngOnInit(): void {
    this.projectService.events$.forEach(event =>{
      this.selectedProject = event;
      this.selectedCustomer=this.selectedProject.projectCustomerFk;
      for(let cus of this.customers){
        if(cus.customer_name == event.customerName){
          this.fillCustomer = new FormControl(cus.customer_id);
        }
      }
    })
  }
  selectedProject: Project = new Project();
  customers: CustomerModel[];
  selectedCustomer: number;
  fillCustomer = new FormControl();
  admin:boolean = false;
  constructor(private projectService: ProjectService, auth: AuthService) {
    this.customers = projectService.getAllCustomers();
    this.admin = auth.isAdmin();
   }

   modifyProject()
   {
     console.log("customerid="+this.selectedCustomer);
     this.selectedProject.projectCustomerFk = this.selectedCustomer;
     this.projectService.updateProject(this.selectedProject);
     this.projectService.loadEvent(true);
   }

}
