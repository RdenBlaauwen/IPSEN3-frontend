import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Project } from '../models/ProjectModel';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Headers, Http, Response } from '@angular/http';
import { CustomerModel } from '../models/CustomerModel';

@Injectable()
export class ProjectService {
  readonly ALL_PROJECT_JSON = 'http://localhost:8080/api/projects/read';
  readonly INSERT_PROJECT = '/api/projects/create/';
  projectToModify: Project;
  constructor(private auth: AuthService, private http: HttpClient, private router: Router
  ,private httpN: Http) { this.getAllProjects(); }

  public removeProject(sp: Project)
  {
    let data =
    {
        projectId: sp.projectId,
        projectDescription: sp.projectDescription,
        projectName: sp.projectName,
        projectIsDeleted: sp.projectIsDeleted,
        projectCustomerFk: sp.projectCustomerFk

    };
    let headers = this.auth.createAuthHeader(
        this.auth.emailAddress, this.auth.password);
    this.httpN.post(`http://localhost:8080/api/projects/delete/`, data,{headers: headers}).subscribe
    (
        data =>
        {
            alert('Project succesvol verwijderd');
        },
        error =>
        {
            alert('Verwijderen Project mislukt');
        }
    );
  }

  public insertNewProject(sp: Project): void
  {
      let data =
      {
          projectId: sp.projectId,
          projectDescription: sp.projectDescription,
          projectName: sp.projectName,
          projectIsDeleted: sp.projectIsDeleted,
          projectCustomerFk: sp.projectCustomerFk

      };
      let headers = this.auth.createAuthHeader(
          this.auth.emailAddress, this.auth.password);
      this.httpN.post(`http://localhost:8080/api/projects/create/`, data).subscribe
      (
          data =>
          {
              alert('Project succesvol aangemaakt');
          },
          error =>
          {
              alert('Aanmaken Project mislukt');
          }
      );
  }

  public getAllCustomers()
  {
    let customers: CustomerModel[] = [];
    let headers = this.auth.createAuthHeader(this.auth.emailAddress, this.auth.password);
    this.httpN.get(`http://localhost:8080/api/customers/getAll/`, {headers: headers}).subscribe(
      (res: Response) =>{
        for(let customer of res.json())
            {
                let customerContainer = new CustomerModel(customer.customer_id, 
                  customer.customer_name, customer.customer_description,
                  customer.customer_isdeleted);
                  customers.push(customerContainer);
            }
      })
      return customers;
  }

  getAllProjects(): Promise<Project[]> {
      let headers = this.auth.createAuthHttpHeader(this.auth.emailAddress, this.auth.password);
    return this.http.get<Project[]>(this.ALL_PROJECT_JSON, {headers: headers})
    .toPromise()
    .then(res => res)
    .then(projects => projects.map(project => {
      return new Project(
        project.projectId,
        project.projectName,
        project.projectDescription,
        project.projectIsDeleted,
        project.projectCustomerFk,
        project.customerName);
    }));
  }

  public setProjectToModify(project: Project)
  {
    this.projectToModify = project;
    this.router.navigate(['modify-project']);
  }

  public updateProject(project: Project)
  {
    let data =
    {
        projectId: project.projectId,
        projectName: project.projectName,
        projectDescription: project.projectDescription,
        projectCustomerFk: project.projectCustomerFk,
        projectIsDeleted: project.projectIsDeleted

    };
    let headers = this.auth.createAuthHeader(
        this.auth.emailAddress, this.auth.password);
    this.httpN.put(`http://localhost:8080/api/projects/update/`, data,{headers: headers}).subscribe
    (
        data =>
        {
            alert('Project succesvol gewijzigd');
        },
        error =>
        {
            alert('Project update mislukt');
        }
    );
  }
}
