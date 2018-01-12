import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/ProjectModel';
import { CustomerModel } from '../../models/CustomerModel';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent {
  selectedProject: Project = new Project();
  customers: CustomerModel[];
  selectedCustomer: number;
  constructor(private projectService: ProjectService) {
    this.customers = projectService.getAllCustomers();
    if(projectService.projectToModify != null)
    {
      this.selectedProject = projectService.projectToModify;
    }
   }

   modifyProject()
   {
     this.selectedProject.projectCustomerFk = this.selectedCustomer;
     this.projectService.updateProject(this.selectedProject);
   }

}
