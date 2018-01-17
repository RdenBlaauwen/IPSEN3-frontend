import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Headers, Http, Response } from '@angular/http';
import { CustomerModel } from '../models/CustomerModel';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CustomerService {
  readonly ALL_PROJECT_JSON = 'http://localhost:8080/api/projects/read';
  readonly INSERT_PROJECT = '/api/projects/create/';
  customers: CustomerModel[] = [];
  private subject = new Subject<any>();

  constructor(private auth: AuthService, private http: HttpClient, private router: Router
  ,private httpN: Http) { }
    newEvent(customer: CustomerModel){
        this.subject.next(customer);
    }
    get events$ (){
        return this.subject.asObservable();
    }
  public removeCustomer(sp: CustomerModel)
  {
    let headers = this.auth.createAuthHttpHeader(
        this.auth.emailAddress, this.auth.password);
    this.http.put(`http://localhost:8080/api/customers/remove/`, sp,{headers: headers}).subscribe
    (
        data =>
        {
            alert('Customer succesvol verwijderd');
        },
        error =>
        {
            alert('Verwijderen Customer mislukt');
        }
    );

  }

  public insertNewCustomer(customer: CustomerModel): void
  {
      let headers = this.auth.createAuthHttpHeader(
          this.auth.emailAddress, this.auth.password);
      this.http.post(`http://localhost:8080/api/customers/createCustomer/`, customer,{headers:headers}).subscribe
      (
          data =>
          {
              alert('Customer succesvol aangemaakt');
          },
          error =>
          {
              alert('Aanmaken Customer mislukt');
          }
      );
  }

  getAllCustomers(): Observable<CustomerModel[]> {
    let headers = this.auth.createAuthHttpHeader(this.auth.emailAddress, this.auth.password);
    return this.http.get<CustomerModel[]>(`http://localhost:8080/api/customers/getAll/`, {headers: headers});
  }

  public updateCustomer(customer: CustomerModel)
  {
    let headers = this.auth.createAuthHeader(
        this.auth.emailAddress, this.auth.password);
    this.httpN.put(`http://localhost:8080/api/customers/update/`, customer,{headers: headers}).subscribe
    (
        data =>
        {
            alert('Klant succesvol gewijzigd');
        },
        error =>
        {
            alert('Klant update mislukt');
        }
    );
  }
}
