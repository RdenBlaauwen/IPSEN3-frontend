import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Http, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Employee } from '../models/Employee';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class EmployeeService {
    readonly UPDATE_EMPLOYEE_URL = 'http://localhost:8080/api/login/update';

    naam: string = null;
    private subject = new Subject<any>();

    newEvent(employee: Employee){
        this.subject.next(employee);
    }
    get events$ (){
        return this.subject.asObservable();
    }
    constructor(private auth: AuthService, private router: Router, private http: Http, private httpN: HttpClient, private snackBar: MatSnackBar) {}



    public createEmployee(employee: Employee){
        const headers = this.auth.createAuthHttpHeader(this.auth.emailAddress, this.auth.password);
        this.httpN.post(`http://localhost:8080/api/users/create`, employee, {headers:headers}).subscribe(
            res=>{
                if(res == true){
                    this.snackBar.open('Account succesvol aangemaakt','',{duration:1000});
                }else{
                    this.snackBar.open('Er is iets fout gegaan in de server','',{duration:1000});
                }
        }, error=>{
            this.snackBar.open('Aanmaken account mislukt','',{duration:1000});
        });
    }

    public modifyEmployee(employee: Employee){
        const headers = this.auth.createAuthHttpHeader(this.auth.emailAddress, this.auth.password);
        this.httpN.put(`http://localhost:8080/api/users/update`, employee, {headers:headers}).subscribe
        (
            res=>{
                if(res == true){
                    this.snackBar.open('Account succesvol aangepast','',{duration:1000});
                }else{
                    this.snackBar.open('Er is iets fout gegaan in de server','',{duration:1000});
                }
        }, error=>{
            this.snackBar.open('Aanpassen account mislukt','',{duration:1000});
        });
    }

    public getAllEmployees(){
        const headers = this.auth.createAuthHttpHeader(this.auth.emailAddress, this.auth.password);
        return this.httpN.get<Employee[]>(`http://localhost:8080/api/users`, {headers:headers});
    }

    public goHome() {
        this.router.navigate(['hour-management']);
        location.reload(false);
    }

    public goLogin() {
        this.router.navigate(['']);
    }

    public login(email: string, password: string) {
        const headers = this.auth.createAuthHttpHeader(email, password);
        let loggedUserObject = new Employee();
        this.httpN.get<Employee>('http://localhost:8080/api/users/login/', {headers: headers}).subscribe(user=>{
            const authorization = {
                email,
                password,
                loggedUserObject: user
              };
              const auth = JSON.stringify(authorization);
              const storage = false ? localStorage : sessionStorage;
              storage.setItem('authorization', auth);
              this.goHome();
        });
             
    }
    

    public removeSessions() {
        const storage = false ? localStorage : sessionStorage;
        storage.removeItem('authorization');
        this.auth.setNullAfterLogout();
        this.router.navigate(['']);
    }

    /**
     * Update employee
     */

}
