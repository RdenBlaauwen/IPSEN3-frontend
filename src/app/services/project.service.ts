import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Project } from '../models/ProjectModel';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProjectService {
  readonly ALL_PROJECT_JSON = 'http://localhost:8080/api/projects/read';
  readonly INSERT_PROJECT = 'http://localhost:8080/api/projects/create/url';

  constructor(private http: HttpClient) { }
  body = {};
  insertNewProject(name: string, description: string, customer_fk: string) {
    return this.http.post(this.INSERT_PROJECT, this.body, {
      params: new HttpParams().set('name', name).set('description', description).set('custid', customer_fk)
    });
  }

  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.ALL_PROJECT_JSON);
  }
}
