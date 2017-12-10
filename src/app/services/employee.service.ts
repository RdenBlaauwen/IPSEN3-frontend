import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { Http, Response, Headers } from "@angular/http/";


@Injectable()
export class EmployeeService
{
    constructor(private auth: AuthService, private router: Router, private http: Http)
    {

    }

    public login(email: string, password: string)
    {
        let activeEmployee;
        let loginEncoded =  btoa(email+":"+password);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic ' + loginEncoded);
       //  const options = new RequestOptions();
         this.http.get(`/api/login/`,{headers:headers}).subscribe(
         
         (res: Response) => {
         for(let employee of res.json())
         {
           if(employee.employeeEmail == email && employee.employeePassword == password)
           {
             let authorization = 
             {
               email,
               password
             }
             let auth = JSON.stringify(authorization);
             let storage = false ? localStorage : sessionStorage;
             storage.setItem('authorization', auth);
             activeEmployee = employee.employeeFirstname;
             break;
           }
           else
           {
              activeEmployee = null;
           }
         }
       }
       )
       return activeEmployee;
    }
}