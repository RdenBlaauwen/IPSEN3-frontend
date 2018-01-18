import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatFormFieldModule, MatInputModule } from '@angular/material';
import { ProjectService } from '../services/project.service';
import { Project } from '../models/ProjectModel';
import { AuthService } from '../services/auth.service';
import { Employee } from '../models/Employee';
import { CustomerModel } from '../models/CustomerModel';
import { DialogService } from '../services/DialogService';
import { FormControl } from '@angular/forms/';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {
  private dataSource: MatTableDataSource<Project>;
  displayedColumns = ['projectName', 'projectDescription', 'customerName', 'projectModify', 'projectDelete'];
  selectedProject: Project = new Project();
  loggedEmployeeModel: Employee;
  customers: CustomerModel[];
  selectedCustomer = new CustomerModel();
  admin: boolean = false;
  
  constructor(private projectService: ProjectService, auth: AuthService, private dialogService: DialogService) {
    this.customers = this.projectService.getAllCustomers();
    this.loggedEmployeeModel = auth.getEmployeeModel();
    this.admin = auth.isAdmin();
    this.projectService.getAllProjects().then((data) => {
      this.dataSource = new MatTableDataSource<Project>(data);
    }, (error) => console.log(error.SessionNotCreatedError));
  }

  //  MatTableDataSource function
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  selectRow(row: Project) {
    this.selectedProject = row;
    this.projectService.newEvent(row);
  }

  deleteProject() {
    this.projectService.removeProject(this.selectedProject);
  }

  openDialog() {
    this.dialogService.confirm('Bevestigen', 'Weet u zeker dat u dit project wilt verwijderen? ')
    .subscribe(res => {
      if (res.valueOf()) {
        this.deleteProject();
      }
    });
  }

  openCreateDialog(){
    this.dialogService.createProject();
  }
  ngOnInit() {}
}
