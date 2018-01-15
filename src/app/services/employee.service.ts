import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Http, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Employee } from '../models/Employee';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class EmployeeService {
    readonly UPDATE_EMPLOYEE_URL = 'http://localhost:8080/api/login/update';

    naam: string = null;
    constructor(private auth: AuthService, private router: Router, private http: Http, private httpN: HttpClient) {}

    public createEmployee(employee: Employee){
        const headers = this.auth.createAuthHttpHeader(this.auth.emailAddress, this.auth.password);
        const data = {
            employeeId: employee.employeeId,
            employeeFirstname: employee.employeeFirstname,
            employeeLastName: employee.employeeLastname,
            employeePassword: employee.employeePassword,
            employeeEmail: employee.employeeEmail,
            employeeIsDeleted: employee.employeeIsDeleted,
            employeeRole: employee.employeeRole
        };
        this.httpN.post(`http://localhost:8080/api/users/create`, data, {headers:headers}).subscribe(
            res=>{
            alert("Succesvol");
        }, error=>{
            alert("Mislukt");
        });
    }

    public modifyEmployee(employee: Employee){
        const headers = this.auth.createAuthHttpHeader(this.auth.emailAddress, this.auth.password);
        const data = {
            employeeId: employee.employeeId,
            employeeFirstname: employee.employeeFirstname,
            employeeLastName: employee.employeeLastname,
            employeePassword: employee.employeePassword,
            employeeEmail: employee.employeeEmail,
            employeeIsDeleted: employee.employeeIsDeleted,
            employeeRole: employee.employeeRole
        };
        this.httpN.put(`http://localhost:8080/api/users/update`, data, {headers:headers}).subscribe
        (
            res=>{
                alert("Succesvol");
            },error=>{
                alert("mislukt");
            }
        )
    }

    public getAllEmployees(){
        const headers = this.auth.createAuthHttpHeader(this.auth.emailAddress, this.auth.password);
        return this.httpN.get<Employee[]>(`http://localhost:8080/api/users`, {headers:headers});
    }


    private goHome() {
        this.router.navigate(['hour-management']);
    }

    public login(email: string, password: string) {
        const headers = this.auth.createAuthHeader(email, password);
         this.http.get('http://localhost:8080/api/users/login/', {headers: headers}).subscribe(
         (res: Response) => {
           console.log(res.json());
         for (const em of res.json()) {
           if (em.employeeEmail === email && em.employeePassword === password) {
            const loggedUserObject = new Employee(
                em.employeeId,
                em.employeeFirstname,
                em.employeeLastName,
                em.employeePassword,
                em.employeeEmail,
                em.employeeIsDeleted,
                em.employeeRole);
             const authorization = {
               email,
               password,
               loggedUserObject
             };
             const auth = JSON.stringify(authorization);
             const storage = false ? localStorage : sessionStorage;
             storage.setItem('authorization', auth);
             this.goHome();
           }
         }
       });
    }

    public removeSessions() {
        const storage = false ? localStorage : sessionStorage;
        storage.removeItem('authorization');
        this.auth.setNullAfterLogout();
    }

    /**
     * Update employee
     */
    
}
