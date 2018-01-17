import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { MatSnackBar, MatDialogRef } from '@angular/material';
import { CustomerModel } from '../../models/CustomerModel';
import { Project } from '../../models/ProjectModel';

@Component({
  selector: 'app-add-userstory',
  templateUrl: './add-userstory.component.html',
  styleUrls: ['./add-userstory.component.css']
})
export class AddUserStoryComponent{
  project: Project = new Project();
  customers: CustomerModel[];
  selectdCustomer: number;
  
  constructor(private projectService: ProjectService, public snackBar: MatSnackBar, private dialog: MatDialogRef<any>) { 
    this.customers = projectService.getAllCustomers();
  }

  insertNewProject() {
    this.project.projectCustomerFk = this.selectdCustomer;
    this.projectService.insertNewProject(this.project);
    this.dialog.close();
    history.pushState(null, '/project-management');
    this.openSnackBar();
  }

  openSnackBar() {
      this.snackBar.open('Nieuwe taak toegevoegd!', '', {
        duration: 1000
      });
    }
    
}
