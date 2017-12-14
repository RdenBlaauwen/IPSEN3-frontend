
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/ProjectModel';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProjectService {
  readonly ALL_PROJECT_JSON = 'http://localhost:8080/api/projects/read';
  constructor(private http: HttpClient) { }

  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.ALL_PROJECT_JSON);
  }
}