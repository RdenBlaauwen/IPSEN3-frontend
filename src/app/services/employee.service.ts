import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Http, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Employee } from '../models/Employee';

@Injectable()
export class EmployeeService {
    readonly UPDATE_EMPLOYEE_URL = 'http://localhost:8080/api/login/update';

    naam: string = null;
    constructor(private auth: AuthService, private router: Router, private http: Http) {}

    public register(employee: Employee): void {
        const data = {
            employeeId: employee.employeeId,
            employeeFirstname: employee.employeeFirstName,
            employeeLastName: employee.employeeLastName,
            employeePassword: employee.employeePassword,
            employeeEmail: employee.employeeEmail,
            employeeIsDeleted: employee.employeeIsDeleted,
            employeeRole: employee.employeeRole
        };

        this.http.post('users', data).subscribe
        (
            resp => {
                alert('Employee succesvol aangemaakt');
            },
            error => {
                alert('Aanmaken employee mislukt');
            }
        );
    }

    public goHome() {
        this.router.navigate(['hour-management']);
    }

    public goLogin() {
        this.router.navigate(['']);
    }

    public login(email: string, password: string) {
        const headers = this.auth.createAuthHeader(email, password);
         this.http.get('http://localhost:8080/api/login/', {headers: headers}).subscribe(
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
