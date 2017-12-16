import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { MatSnackBar } from '@angular/material';
import { CustomerModel } from '../../models/CustomerModel';
import { Project } from '../../models/ProjectModel';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent{
  project: Project = new Project();
  customers: CustomerModel[];
  selectdCustomer: number;
  
  constructor(private projectService: ProjectService, public snackBar: MatSnackBar) { 
    this.customers = projectService.getAllCustomers();
  }

  insertNewProject() {
    this.project.projectCustomerFk = this.selectdCustomer;
    this.projectService.insertNewProject(this.project);
    this.openSnackBar();
  }

  openSnackBar() {
      this.snackBar.open('New Project Inserted!', '', {
        duration: 1000
      });
    }
    
}
