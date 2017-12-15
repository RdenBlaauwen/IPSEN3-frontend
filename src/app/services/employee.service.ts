import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { Http, Response, Headers } from "@angular/http";
import { Router } from "@angular/router";
import { Employee } from "../models/Employee";


@Injectable()
export class EmployeeService
{
  naam : string = null;
    constructor(private auth: AuthService, private router: Router, private http: Http)
    {

    }
    public register(employee: Employee): void
    {
        let data =
        {
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
            data =>
            {
                alert('Employee succesvol aangemaakt');
            },
            error =>
            {
                alert('Aanmaken employee mislukt');
            }
        );
    }
    private goHome()
    {
        this.router.navigate(['home']);
    }
    public login(email: string, password: string)
    {
        let headers = this.auth.createAuthHeader(email, password);
         this.http.get(`/api/login/`, {headers: headers}).subscribe(
         (res: Response) => {
           console.log(res.json());
         for(let employee of res.json())
         {
           if(employee.employeeEmail == email && employee.employeePassword == password)
           {
             let authorization = 
             {
               email,
               password,
               name: employee.employeeFirstname
             }
             this.goHome();
             let auth = JSON.stringify(authorization);
             let storage = false ? localStorage : sessionStorage;
             storage.setItem('authorization', auth);
           }
         }
       })
       
    }
}