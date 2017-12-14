import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  constructor(private projectService: ProjectService, public snackBar: MatSnackBar) { }

  insertNewProject(project_name: string, project_description: string, customer_fk: string) {
    this.projectService.insertNewProject(project_name, project_description, customer_fk).subscribe();
  }

  openSnackBar() {
      this.snackBar.open('New Project Inserted!', '', {
        duration: 1000
      });
    }

  ngOnInit() {}
}
