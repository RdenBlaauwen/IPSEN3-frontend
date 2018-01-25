import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Headers, Http, Response } from '@angular/http';
import { CustomerModel } from '../models/CustomerModel';
import { Subject } from 'rxjs/Subject';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class CustomerService {
  readonly ALL_PROJECT_JSON = 'http://localhost:8080/api/projects/read';
  readonly INSERT_PROJECT = '/api/projects/create/';
  customers: CustomerModel[] = [];
  private subject = new Subject<any>();

  constructor(private auth: AuthService, private http: HttpClient, private router: Router
  ,private httpN: Http, private snackBar: MatSnackBar) { }
  private loadTrigger = new Subject<any>();

  loadEvent(event: boolean){
      this.loadTrigger.next(event);
  }

  get loadTrigger$ (){
      return this.loadTrigger.asObservable();
  }
    newEvent(customer: CustomerModel){
        this.subject.next(customer);
    }
    get events$ (){
        return this.subject.asObservable();
    }
  public removeCustomer(sp: CustomerModel)
  {
    let headers = this.auth.createAuthHttpHeader();
    this.http.put(`http://localhost:8080/api/customers/remove/`, sp,{headers: headers}).subscribe(
        data =>{
        if(data == true){
            this.snackBar.open('Klant succesvol verwijderd.', '', {duration:1000});
        }
        else{this.snackBar.open('Er iets fout gegaan in de server.', '', {duration:1000});}
     }, error=>{
        this.snackBar.open('Verwijderen klant mislukt.', '',{duration: 1000});
    })

  }

  public insertNewCustomer(customer: CustomerModel): void
  {
      let headers = this.auth.createAuthHttpHeader();
      this.http.post(`http://localhost:8080/api/customers/createCustomer/`, customer,{headers:headers}).subscribe
      (
          data =>
          {
            if(data == true){
                this.snackBar.open('Klant succesvol toegevoegd.', '', {duration:1000});
            }
            else{this.snackBar.open('Er iets fout gegaan in de server.', '', {duration:1000});}
        }, error=>{
            this.snackBar.open('Aanmaken klant mislukt.', '',{duration: 1000});
        })
  }

  getAllCustomers(): Observable<CustomerModel[]> {
    let headers = this.auth.createAuthHttpHeader();
    return this.http.get<CustomerModel[]>(`http://localhost:8080/api/customers/getAll/`, {headers: headers});
  }

  public updateCustomer(customer: CustomerModel)
  {
    let headers = this.auth.createAuthHttpHeader();
    this.http.put(`http://localhost:8080/api/customers/update/`, customer,{headers: headers}).subscribe(
        data =>
        {if(data == true){
                this.snackBar.open('Klant succesvol gewijzigd.', '', {duration:1000});
            }
            else{this.snackBar.open('Er iets fout gegaan in de server.', '', {duration:1000});}
        }, error=>{
            this.snackBar.open('Wijzigen klant mislukt.', '',{duration: 1000});
        })
  }
}
