import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Project } from '../models/ProjectModel';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Headers, Http, Response } from '@angular/http';
import { CustomerModel } from '../models/CustomerModel';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ProjectService {
  readonly ALL_PROJECT_JSON = 'http://localhost:8080/api/projects/read';
  readonly INSERT_PROJECT = 'http://localhost:8080/api/projects/create/';
  private subject = new Subject<any>();
  constructor(private auth: AuthService, private http: HttpClient, private router: Router, private httpN: Http) {}
  newEvent(project: Project){
        this.subject.next(project);
    }
    get events$ (){
        return this.subject.asObservable();
    }
  public removeProject(sp: Project) {
    const data = {
        projectId: sp.projectId,
        projectDescription: sp.projectDescription,
        projectName: sp.projectName,
        projectIsDeleted: sp.projectIsDeleted,
        projectCustomerFk: sp.projectCustomerFk

    };
    const headers = this.auth.createAuthHeader(
        this.auth.emailAddress, this.auth.password);
    this.httpN.post(`http://localhost:8080/api/projects/delete/`, data,{headers: headers}).subscribe
    (
        resp => {
            alert('Project succesvol verwijderd');
        },
        error => {
            alert('Verwijderen Project mislukt');
        }
    );
  }

  public insertNewProject(sp: Project): void {
      const data = {
          projectId: sp.projectId,
          projectDescription: sp.projectDescription,
          projectName: sp.projectName,
          projectIsDeleted: sp.projectIsDeleted,
          projectCustomerFk: sp.projectCustomerFk
      };
      const headers = this.auth.createAuthHeader(
          this.auth.emailAddress, this.auth.password);
      this.httpN.post(`http://localhost:8080/api/projects/create/`, data).subscribe
      (
          resp => {
              alert('Project succesvol aangemaakt');
          },
          error => {
              alert('Aanmaken Project mislukt');
          }
      );
  }

  public getAllCustomers() {
    const customers: CustomerModel[] = [];
    const headers = this.auth.createAuthHeader(this.auth.emailAddress, this.auth.password);
    this.httpN.get(`http://localhost:8080/api/customers/getAll/`, {headers: headers}).subscribe(
      (res: Response) => {
        for (const customer of res.json())
            {
                const customerContainer = new CustomerModel(
                    customer.customer_id,
                    customer.customer_name,
                    customer.customer_description,
                    customer.customer_isdeleted);
                    customers.push(customerContainer);
            }
      });
      return customers;
  }

  getAllProjects(): Promise<Project[]> {
      const headers = this.auth.createAuthHttpHeader(this.auth.emailAddress, this.auth.password);
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

  public updateProject(project: Project) {
    const data = {
        projectId: project.projectId,
        projectName: project.projectName,
        projectDescription: project.projectDescription,
        projectCustomerFk: project.projectCustomerFk,
        projectIsDeleted: project.projectIsDeleted

    };
    const headers = this.auth.createAuthHeader(
        this.auth.emailAddress, this.auth.password);
    this.httpN.put(`http://localhost:8080/api/projects/update/`, data, {headers: headers}).subscribe
    (
        resp => {
            if(resp){
                alert('Project succesvol gewijzigd');
            }else{
                alert('Er is iets fout gegaan');
            }            
        },
        error => {
            alert('Project update mislukt');
        }
    );
  }
}
