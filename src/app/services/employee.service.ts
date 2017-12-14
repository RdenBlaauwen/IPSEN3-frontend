import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { Http, Response, Headers } from "@angular/http";
import { Router } from "@angular/router";


@Injectable()
export class EmployeeService
{
  naam : string = null;
    constructor(private auth: AuthService, private router: Router, private http: Http)
    {

    }
    private goHome()
    {
        this.router.navigate(['home']);
    }
    public login(email: string, password: string)
    {
        let activeEmployee = "";
        let loginEncoded =  btoa(email+":"+password);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic ' + loginEncoded);
         this.http.get(`/api/login/`,{headers:headers}).subscribe(
         (res: Response) => {
           console.log(res.json());
          
         for(let employee of res.json())
         {
           if(employee.employeeEmail == email && employee.employeePassword == password)
           {
             let authorization = 
             {
               email,
               password
             }
             this.goHome();
             let auth = JSON.stringify(authorization);
             let storage = false ? localStorage : sessionStorage;
             storage.setItem('authorization', auth);
             this.naam= employee.employeeFirstname;
             
           }
         }
       })
       
    }
}