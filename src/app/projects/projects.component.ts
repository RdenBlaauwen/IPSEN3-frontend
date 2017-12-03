import { Component, OnInit } from '@angular/core';
import{ Http, Response } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { Project } from './project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projecten: any[];
  constructor(private http: Http) {
    this.http.get("/api/projects/").subscribe(
      
      (res: Response) => {
      this.projecten = res.json();
    }
    )
   }

}
