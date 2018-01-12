import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Headers, Http, Response } from '@angular/http';
import { CustomerModel } from '../models/CustomerModel';

@Injectable()
export class CustomerService {
  readonly ALL_PROJECT_JSON = 'http://localhost:8080/api/projects/read';
  readonly INSERT_PROJECT = '/api/projects/create/';
  customerToModify: CustomerModel;

  constructor(private auth: AuthService, private http: HttpClient, private router: Router
  ,private httpN: Http) { this.getAllCustomers(); }

  public removeCustomer(sp: CustomerModel)
  {
    let data =
    {
        customer_id: sp.customer_id,
        customer_name: sp.customer_name,
        customer_description: sp.customer_description,
        customer_isdeleted: sp.customer_isdeleted

    };
    let headers = this.auth.createAuthHeader(
        this.auth.emailAddress, this.auth.password);
    this.httpN.put(`http://localhost:8080/api/customers/remove/`, data,{headers: headers}).subscribe
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

  public insertNewCustomer(sp: CustomerModel): void
  {
      let data =
      {
          customer_name: sp.customer_name,
          customer_description: sp.customer_description

      };
      let headers = this.auth.createAuthHeader(
          this.auth.emailAddress, this.auth.password);
      this.httpN.post(`http://localhost:8080/api/customers/createCustomer/`, data,{headers:headers}).subscribe
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

  public setCustomerToModify(customer: CustomerModel)
  {
    this.customerToModify = customer;
    this.router.navigate(['modify-customer'])
  }

  public updateCustomer(customer: CustomerModel)
  {
    let data =
    {
        customer_id: customer.customer_id,
        customer_name: customer.customer_name,
        customer_description: customer.customer_description,
        customer_isdeleted: customer.customer_isdeleted

    };
    let headers = this.auth.createAuthHeader(
        this.auth.emailAddress, this.auth.password);
    this.httpN.put(`http://localhost:8080/api/customers/update/`, data,{headers: headers}).subscribe
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
