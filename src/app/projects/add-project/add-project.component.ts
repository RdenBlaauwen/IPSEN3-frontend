import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { MatSnackBar, MatDialogRef } from '@angular/material';
import { CustomerModel } from '../../models/CustomerModel';
import { Project } from '../../models/ProjectModel';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent{
  project: Project = new Project();
  customers: CustomerModel[];
  selectdCustomer: number;
  admin: boolean = false;
  constructor(private projectService: ProjectService, public snackBar: MatSnackBar, private dialog: MatDialogRef<any>, auth: AuthService) { 
    this.customers = projectService.getAllCustomers();
    this.admin = auth.isAdmin();
  }

  insertNewProject() {
    this.project.projectCustomerFk = this.selectdCustomer;
    this.projectService.insertNewProject(this.project);
    this.dialog.close();
    history.pushState(null, '/project-management');
    this.openSnackBar();
  }

  openSnackBar() {
      this.snackBar.open('New Project Inserted!', '', {
        duration: 1000
      });
    }
    
}
